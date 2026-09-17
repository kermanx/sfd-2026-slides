<script setup lang="ts">
import { computed, onScopeDispose, ref } from 'vue'
import { onSlideEnter, onSlideLeave, useNav, useSlideContext } from '@slidev/client'
import { CODE_START, CODE_END, DURATION, EXECUTION_END, codeLines, frameAt, python, samples, stages } from './ptc-demo'

const elapsed = ref(0)
const playing = ref(false)
const speed = ref(1)
const { isPrintMode } = useNav()
const { $renderContext } = useSlideContext()
const staticView = computed(() => isPrintMode.value || !['slide', 'presenter'].includes($renderContext.value))
const frame = computed(() => frameAt(staticView.value ? DURATION : elapsed.value))
const cursorLine = computed(() => codeLines.findLast(line => line.start <= frame.value.code.length)?.number ?? 1)
let raf = 0
let previous = 0

function stop() {
  playing.value = false
  cancelAnimationFrame(raf)
  raf = 0
}
function tick(now: number) {
  if (!playing.value) return
  const typingSpeed = elapsed.value >= CODE_START && elapsed.value < CODE_END ? 3 : 1
  if (previous) elapsed.value = Math.min(DURATION, elapsed.value + Math.min(now - previous, 100) * speed.value * typingSpeed)
  previous = now
  if (elapsed.value >= DURATION) stop()
  else raf = requestAnimationFrame(tick)
}
function play() {
  if (playing.value || staticView.value) return
  if (elapsed.value >= DURATION) elapsed.value = 0
  previous = 0
  playing.value = true
  raf = requestAnimationFrame(tick)
}
function replay() { stop(); elapsed.value = 0; play() }
function seek(time: number) { stop(); elapsed.value = time }
function visibleToken(token: { text: string; start: number }) {
  return token.text.slice(0, Math.max(0, frame.value.code.length - token.start))
}
onSlideEnter(() => {
  if (staticView.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) seek(DURATION)
  else replay()
})
onSlideLeave(stop)
onScopeDispose(stop)
</script>

<template>
  <section class="ptc-comparison-slide" :class="{ 'is-playing': playing }" aria-labelledby="ptc-title">
    <header class="ptc-top">
      <h1 id="ptc-title">Programmatic Tool Calling <span>(PTC)</span></h1>
      <div v-if="!staticView" class="ptc-controls" @click.stop @keydown.stop>
        <button class="ptc-play" :aria-label="playing ? '暂停动画' : '播放动画'" @click="playing ? stop() : play()">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path v-if="playing" d="M5 3V13M11 3V13" /><path v-else d="M5 3L12 8L5 13Z" /></svg>
          {{ playing ? '暂停' : frame.complete ? '播放' : '继续' }}
        </button>
        <button aria-label="从头重播动画" @click="replay">↻ 重播</button>
        <button aria-label="切换播放速度" @click="speed = speed === 1 ? 2 : 1">{{ speed }}×</button>
      </div>
    </header>

    <nav class="ptc-timeline" aria-label="动画阶段" @click.stop @keydown.stop>
      <div class="ptc-stages"><button v-for="(stage, i) in stages" :key="stage.time" :aria-label="`跳到阶段 ${i + 1}：${stage.label}`" :aria-current="frame.stage === i ? 'step' : undefined" :class="{ current: frame.stage === i, passed: frame.stage > i }" @click="seek(stage.preview)"><span>{{ String(i + 1).padStart(2, '0') }}</span>{{ stage.label }}</button></div>
    </nav>

    <div class="ptc-columns">
      <article class="ptc-direct">
        <div class="ptc-column-title"><h2>无 PTC</h2></div>
        <div class="ptc-conversation">
          <div class="ptc-message ptc-request" :class="{ 'not-yet': frame.time < CODE_START, live: frame.time >= CODE_START && frame.time < 2100 }">
            <div class="ptc-message-label"><b>模型</b><span>生成调用</span></div>
            <pre>{{ frame.firstCall }}<span v-if="frame.time >= CODE_START && frame.time < 2100" class="stream-caret" /></pre>
          </div>
          <div class="ptc-message ptc-response" :class="{ 'not-yet': !frame.hasPrList }">
            <div class="ptc-message-label"><b>工具 → 模型</b><span>PR 列表</span></div>
            <div class="ptc-pr-list"><code v-for="pr in samples" :key="pr.number" v-text="'{number: ' + pr.number + '}'" /></div>
          </div>
          <div class="ptc-message ptc-request" :class="{ 'not-yet': frame.time < 8000, live: frame.time >= 8000 && frame.time < 10800 }">
            <div class="ptc-message-label"><b>模型再次生成</b><span>这三次可以并行</span></div>
            <pre class="ptc-batch-calls">{{ frame.batchCalls }}<span v-if="frame.time >= 8000 && frame.time < 10800" class="stream-caret" /></pre>
          </div>
          <div class="ptc-message ptc-response ptc-checks-message" :class="{ 'not-yet': !frame.directResults[0] }">
            <div class="ptc-message-label"><b>工具 → 模型</b><span>全部 checks</span></div>
            <div v-for="(pr, i) in samples" :key="pr.number" class="ptc-check-row" :class="{ 'not-yet': !frame.directResults[i] }">
              <code>#{{ pr.number }}</code>
              <span v-for="check in pr.checks" :key="check.name" :class="{ failed: check.conclusion === 'failure' }">{{ check.conclusion === 'failure' ? '×' : '✓' }} {{ check.name }}</span>
            </div>
          </div>
        </div>
        <div class="ptc-context ptc-direct-context">
          <div><span class="ptc-context-title">模型读取并筛选</span><span>{{ frame.directResults[2] ? '3 个 PR + 6 个 checks' : '等待工具结果' }}</span></div>
          <code>{{ frame.finalAnswer || '…' }}<span v-if="frame.time >= 17400 && frame.time < 19200" class="stream-caret" /></code>
        </div>
      </article>

      <article class="ptc-programmatic">
        <div class="ptc-column-title"><h2>有 PTC</h2></div>
        <div class="ptc-execution-box">
          <div class="ptc-execution-heading"><span><i :class="{ active: frame.generating || frame.executing }" />{{ frame.generating ? '模型生成代码' : frame.runtimeStatus }}</span><code>Python</code></div>
          <div class="ptc-code" :aria-label="python">
            <div v-for="line in codeLines" :key="line.number" class="ptc-code-line" :class="{ 'executing-line': frame.activeLines.includes(line.number) }">
              <span class="ptc-line-number">{{ line.number }}</span>
              <code><template v-for="(token, i) in line.tokens" :key="i"><span :class="`syntax-${token.kind}`">{{ visibleToken(token) }}</span></template><span v-if="frame.generating && cursorLine === line.number" class="stream-caret" /></code>
            </div>
          </div>
          <div class="ptc-runtime-event" :class="{ 'is-executing': frame.executing }"><span class="ptc-run-symbol">{{ frame.executing ? '›' : frame.time >= EXECUTION_END ? '✓' : '·' }}</span><code>{{ frame.runtimeEvent }}</code></div>
          <div class="ptc-stdout">
            <div class="ptc-stdout-label"><code>stdout</code><span>{{ frame.time >= EXECUTION_END ? '已返回模型' : '执行环境内 · 尚未返回模型' }}</span></div>
            <code v-for="(line, i) in frame.localOutput" :key="i" class="ptc-output-line">{{ line || ' ' }}<span v-if="(i === 0 && frame.time >= 12800 && frame.time < 13800) || (i === 1 && frame.time >= 15800 && frame.time < 16800)" class="stream-caret" /></code>
          </div>
        </div>
        <div class="ptc-context ptc-filtered-context" :class="{ delivered: frame.time >= EXECUTION_END }">
          <div><span class="ptc-context-title">执行结束 → 模型上下文</span><span>{{ frame.time >= EXECUTION_END ? '仅 2 条失败摘要' : '中间结果留在执行环境' }}</span></div>
          <pre>{{ frame.modelOutput || '…' }}<span v-if="frame.time >= 17400 && frame.time < 18700" class="stream-caret" /></pre>
        </div>
      </article>
    </div>

  </section>
</template>

<style scoped>
.ptc-comparison-slide {
  --ptc-paper: #fcfcfa; --ptc-text: #27333b; --ptc-muted: #748088; --ptc-rule: #dde3e3;
  --ptc-blue: #5279a5; --ptc-green: #398476; --ptc-red: #b06c55; --ptc-code: #f3f6f5;
  --ptc-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  height: 100%; width: 100%; padding: 30px 38px 28px; background: var(--ptc-paper); color: var(--ptc-text);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.ptc-top { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.ptc-top h1 { margin: 0; color: #526f7a; font-family: 'PT Serif', 'Songti SC', Georgia, serif; font-size: 29px; font-weight: 500; line-height: 1.3; letter-spacing: -.55px; white-space: nowrap; }
.ptc-top h1 span { font-size: 25px; }
.ptc-controls { display: flex; align-items: center; gap: 6px; }
.ptc-controls button { display: inline-flex; justify-content: center; align-items: center; gap: 4px; height: 27px; padding: 0 8px; border: 1px solid var(--ptc-rule); border-radius: 4px; color: var(--ptc-muted); background: transparent; font-size: 11px; cursor: pointer; white-space: nowrap; }
.ptc-controls .ptc-play { color: var(--ptc-green); border-color: color-mix(in srgb, var(--ptc-green) 35%, var(--ptc-paper)); }
.ptc-controls svg { width: 11px; height: 11px; fill: none; stroke: currentColor; stroke-width: 1.8; }
.ptc-columns { display: grid; grid-template-columns: 340px minmax(0, 1fr); gap: 25px; margin-top: 12px; }
.ptc-columns article { min-width: 0; }
.ptc-column-title { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin-bottom: 9px; }
.ptc-column-title h2 { margin: 0; font-size: 19px; line-height: 1.4; font-weight: 600; }
.ptc-programmatic h2 { color: var(--ptc-green); }
.ptc-conversation { display: grid; grid-template-rows: 44px 44px 77px 92px; gap: 5px; height: 290px; padding: 7px 10px; border: 1px solid var(--ptc-rule); border-radius: 6px; background: color-mix(in srgb, var(--ptc-blue) 2%, var(--ptc-paper)); }
.ptc-message { position: relative; padding: 5px 8px 5px 11px; min-width: 0; border-left: 2px solid transparent; transition: opacity .2s, background .2s; }
.ptc-message-label { display: flex; justify-content: space-between; gap: 6px; margin-bottom: 4px; font-size: 10px; line-height: 1.3; }
.ptc-message-label b { color: var(--ptc-muted); font-weight: 500; }
.ptc-message-label > span { color: var(--ptc-muted); }
.ptc-request { border-color: color-mix(in srgb, var(--ptc-blue) 35%, var(--ptc-paper)); }
.ptc-request .ptc-message-label b { color: var(--ptc-blue); }
.ptc-request.live { background: color-mix(in srgb, var(--ptc-blue) 7%, transparent); border-color: var(--ptc-blue); }
.ptc-message pre { margin: 0; padding: 0; overflow: hidden; color: var(--ptc-text); background: transparent; font-family: var(--ptc-mono); font-size: 11.5px; line-height: 17px; }
.ptc-response { border-color: #c5cdcf; }
.ptc-pr-list { display: flex; justify-content: space-between; gap: 4px; }
.ptc-pr-list code { font-family: var(--ptc-mono); font-size: 10.5px; color: var(--ptc-muted); }
.ptc-check-row { display: flex; align-items: center; gap: 10px; height: 19px; font-size: 11px; color: var(--ptc-muted); transition: opacity .2s; }
.ptc-check-row > code { color: var(--ptc-text); font-family: var(--ptc-mono); font-size: 10px; }
.ptc-check-row .failed { color: var(--ptc-red); font-weight: 500; }
.not-yet { opacity: .18; }
.ptc-execution-box { height: 290px; display: grid; grid-template-rows: 26px 174px 24px 1fr; border: 1px solid #cbdcd6; border-radius: 6px; overflow: hidden; background: var(--ptc-code); }
.ptc-execution-heading { display: flex; justify-content: space-between; align-items: center; padding: 0 12px; border-bottom: 1px solid var(--ptc-rule); color: var(--ptc-green); font-size: 11px; }
.ptc-execution-heading > span { display: flex; align-items: center; gap: 7px; }
.ptc-execution-heading i { width: 5px; height: 5px; border-radius: 50%; background: #b5c6bf; }
.ptc-execution-heading i.active { background: var(--ptc-green); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ptc-green) 12%, transparent); }
.ptc-execution-heading > code { color: var(--ptc-muted); font-family: var(--ptc-mono); font-size: 10px; }
.ptc-code { padding: 6px 0; min-width: 0; }
.ptc-code-line { display: flex; align-items: baseline; min-height: 18px; line-height: 18px; padding-right: 8px; transition: background .15s; }
.ptc-code-line.executing-line { background: color-mix(in srgb, var(--ptc-green) 12%, transparent); box-shadow: inset 2px 0 var(--ptc-green); }
.ptc-line-number { flex: 0 0 30px; padding-right: 9px; color: #a1afaa; text-align: right; font-family: var(--ptc-mono); font-size: 9px; user-select: none; }
.ptc-code-line > code { display: block; margin: 0; padding: 0; background: transparent; color: var(--ptc-text); font-family: var(--ptc-mono); font-size: 12px; line-height: 18px; white-space: pre; }
.syntax-keyword { color: var(--ptc-green); }.syntax-string { color: #a47569; }.syntax-function { color: #647b9d; }
.ptc-runtime-event { display: flex; align-items: center; gap: 7px; padding: 0 11px; border-top: 1px solid var(--ptc-rule); border-bottom: 1px solid var(--ptc-rule); color: var(--ptc-muted); overflow: hidden; }
.ptc-runtime-event.is-executing { color: var(--ptc-green); }
.ptc-run-symbol { font-size: 17px; line-height: 1; }
.ptc-runtime-event code { font-family: var(--ptc-mono); font-size: 10px; white-space: nowrap; }
.ptc-stdout { padding: 7px 12px 5px; }
.ptc-stdout-label { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; color: var(--ptc-muted); font-size: 9px; line-height: 1.2; }
.ptc-stdout-label code { font-family: var(--ptc-mono); font-size: 10px; color: var(--ptc-green); }
.ptc-output-line { display: block; min-height: 17px; white-space: pre; font-family: var(--ptc-mono); font-size: 11px; line-height: 17px; color: var(--ptc-green); }
.ptc-context { height: 54px; margin-top: 9px; padding: 7px 0 0; border-top: 1px solid var(--ptc-rule); }
.ptc-context > div { display: flex; justify-content: space-between; gap: 6px; margin-bottom: 5px; color: var(--ptc-muted); font-size: 10px; line-height: 1.3; }
.ptc-context-title { color: var(--ptc-text); font-weight: 500; }
.ptc-context > code, .ptc-context > pre { display: block; margin: 0; padding: 0; background: transparent; color: var(--ptc-text); font-family: var(--ptc-mono); font-size: 11px; line-height: 17px; white-space: pre; }
.ptc-filtered-context.delivered .ptc-context-title, .ptc-filtered-context > pre { color: var(--ptc-green); }
.ptc-timeline { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 12px; }
.ptc-stages { display: flex; align-items: center; gap: 17px; }
.ptc-stages button { display: flex; align-items: center; gap: 5px; padding: 0; color: var(--ptc-muted); background: transparent; border: 0; font-size: 10px; line-height: 1.4; cursor: pointer; }
.ptc-stages button > span { display: grid; place-items: center; width: 17px; height: 17px; border: 1px solid var(--ptc-rule); border-radius: 50%; font-family: var(--ptc-mono); font-size: 8px; }
.ptc-stages button.current { color: var(--ptc-green); font-weight: 600; }.ptc-stages button.current > span { border-color: var(--ptc-green); background: color-mix(in srgb, var(--ptc-green) 7%, transparent); }.ptc-stages button.passed { color: var(--ptc-green); }
.stream-caret { display: inline-block; width: 1.5px; height: 1em; margin-left: 1px; vertical-align: -.1em; background: var(--ptc-green); }
.is-playing .stream-caret { animation: ptc-caret .7s steps(2, jump-none) infinite; }
@keyframes ptc-caret { 50% { opacity: .15; } }
button:focus-visible { outline: 2px solid var(--ptc-green); outline-offset: 3px; }
:global(.dark) .ptc-comparison-slide { --ptc-paper: #161e24; --ptc-text: #e0e8ed; --ptc-muted: #a6b6bf; --ptc-rule: #35424c; --ptc-blue: #8dadd2; --ptc-green: #83b6a9; --ptc-red: #d69a84; --ptc-code: #202c30; }
:global(.dark) .ptc-top h1 { color: #abc7ce; }
:global(.dark) .ptc-execution-box { border-color: var(--ptc-rule); }
@media (prefers-reduced-motion: reduce) { .stream-caret { animation: none !important; } .ptc-message, .ptc-code-line, .ptc-check-row { transition: none; } }
</style>
