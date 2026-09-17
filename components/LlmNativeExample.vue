<script setup lang="ts">
defineProps<{ kind: 'skill' | 'mcp' | 'configuration-skill' | 'configuration-ui' }>()
</script>

<template>
  <div class="native-example" :class="`example-${kind}`">
    <template v-if="kind === 'skill'">
      <div class="example-heading">
        <span class="example-filename">
          <svg viewBox="0 0 16 18" fill="none" aria-hidden="true"><path d="M3 1H10L14 5V17H3ZM10 1V5H14M6 9H11M6 12H10" /></svg>
          SKILL.md
        </span>
        <span class="example-caption">代码格式化 · 示例</span>
      </div>
      <div class="skill-instructions">
        <div>沿用仓库已有的 <em>formatter</em>。</div>
        <div>只格式化<em>本次修改</em>的文件，</div>
        <div>不要改动其他代码。</div>
      </div>
    </template>

    <template v-else-if="kind === 'mcp'">
      <div class="example-heading">
        <span class="example-filename"><span class="json-symbol">{ }</span> format_files</span>
        <span class="example-caption">JSON 参数 · 示例</span>
      </div>
      <div class="mcp-arguments" aria-label="JSON 参数：paths 为 src/app.ts，write 为 true">
        <div class="json-punctuation">{</div>
        <div>&nbsp; <span class="json-key">"paths"</span>: [<span class="json-string">"src/app.ts"</span>],</div>
        <div>&nbsp; <span class="json-key">"write"</span>: <span class="json-boolean">true</span></div>
        <div class="json-punctuation">}</div>
      </div>
    </template>

    <template v-else-if="kind === 'configuration-skill'">
      <div class="configuration-request"><span class="request-speaker">你</span>按仓库规范，配好保存时格式化。</div>
      <div class="configuration-process">
        <span class="model-label">模型</span>
        <span>检查项目</span><span class="step-arrow">→</span>
        <span>修改配置</span><span class="step-arrow">→</span>
        <span>验证</span>
      </div>
      <div class="configuration-result">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.5" /><path d="M4.5 8L7 10.5L11.5 5.5" /></svg>
        <code>.vscode/settings.json</code><span>已更新</span>
      </div>
    </template>

    <template v-else>
      <div class="example-heading"><span>编辑器设置</span><span class="example-caption">工作区 · 示例</span></div>
      <div class="configuration-form">
        <div class="setting-row"><span>默认格式化工具</span><span class="setting-select">Prettier<svg viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1L5 5L9 1" /></svg></span></div>
        <div class="setting-row"><span>保存时格式化</span><span class="setting-toggle"><span /></span></div>
        <div class="setting-row"><span>配置范围</span><span class="setting-select">工作区<svg viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1L5 5L9 1" /></svg></span></div>
        <svg class="settings-cursor" viewBox="0 0 20 26" fill="none" aria-hidden="true"><path d="M2 1V21L7 16L11 25L15 23L11 15H18Z" /></svg>
      </div>
    </template>
  </div>
</template>

<style scoped>
.native-example {
  --example-accent: var(--native-green);
  width: 100%;
  height: 126px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--example-accent) 25%, var(--native-paper));
  border-radius: 5px;
  background: color-mix(in srgb, var(--example-accent) 3%, var(--native-paper));
  text-align: left;
  font-size: 13px;
  line-height: 1.4;
}
.example-mcp, .example-configuration-ui { --example-accent: var(--native-blue); }
.example-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 29px;
  padding: 0 13px;
  border-bottom: 1px solid color-mix(in srgb, var(--example-accent) 17%, var(--native-paper));
  color: var(--example-accent);
  font-size: 12px;
  line-height: 1;
}
.example-filename { display: inline-flex; align-items: center; gap: 7px; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 12px; }
.example-filename svg { width: 13px; height: 15px; stroke: currentColor; stroke-width: 1.2; stroke-linejoin: round; stroke-linecap: round; }
.example-caption { color: var(--native-muted); font-size: 10px; }
.skill-instructions { padding: 12px 15px; font-size: 15px; line-height: 23px; color: var(--native-text); }
.skill-instructions em { color: var(--native-green); font-style: normal; font-weight: 500; }
.json-symbol { font-size: 12px; letter-spacing: -2px; padding-right: 3px; }
.mcp-arguments { padding: 9px 15px; color: var(--native-muted); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 13px; line-height: 19px; }
.json-key { color: var(--native-blue); }
.json-string { color: var(--native-green); }
.json-boolean { color: var(--native-purple); }
.json-punctuation { color: var(--native-muted); }
.configuration-request { display: flex; align-items: center; gap: 9px; height: 39px; padding: 0 13px; border-bottom: 1px solid color-mix(in srgb, var(--example-accent) 17%, var(--native-paper)); background: color-mix(in srgb, var(--native-green) 5%, var(--native-paper)); font-size: 14px; }
.request-speaker { display: grid; place-items: center; width: 20px; height: 20px; border-radius: 50%; background: color-mix(in srgb, var(--native-green) 12%, var(--native-paper)); color: var(--native-green); font-size: 11px; }
.configuration-process { display: flex; align-items: center; gap: 9px; margin: 14px 13px 10px; color: var(--native-text); font-size: 13px; }
.model-label { margin-right: 3px; padding: 2px 6px; border: 1px solid color-mix(in srgb, var(--native-purple) 35%, var(--native-paper)); border-radius: 3px; color: var(--native-purple); font-size: 11px; line-height: 1.3; }
.step-arrow { color: var(--native-green); }
.configuration-result { display: flex; align-items: center; gap: 7px; margin: 0 13px; color: var(--native-green); font-size: 11px; }
.configuration-result svg { width: 15px; height: 15px; stroke: currentColor; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
.configuration-result code { margin: 0; padding: 0; background: transparent; color: var(--native-green); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 12px; }
.configuration-form { position: relative; display: grid; gap: 5px; padding: 8px 13px; }
.setting-row { display: flex; align-items: center; justify-content: space-between; min-height: 22px; color: var(--native-muted); font-size: 12px; }
.setting-select { display: flex; align-items: center; justify-content: space-between; width: 150px; height: 22px; padding: 0 8px; border: 1px solid color-mix(in srgb, var(--native-blue) 25%, var(--native-paper)); border-radius: 3px; background: var(--native-paper); color: var(--native-text); font-size: 11px; }
.setting-select svg { width: 8px; height: 5px; stroke: var(--native-muted); stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
.setting-toggle { display: flex; align-items: center; justify-content: flex-end; width: 28px; height: 15px; padding: 2px; border-radius: 10px; background: var(--native-blue); }
.setting-toggle > span { width: 11px; height: 11px; border-radius: 50%; background: var(--native-paper); }
.settings-cursor { position: absolute; right: 22px; top: 22px; width: 17px; height: 22px; fill: var(--native-paper); stroke: var(--native-text); stroke-width: 1.2; stroke-linejoin: round; }
</style>
