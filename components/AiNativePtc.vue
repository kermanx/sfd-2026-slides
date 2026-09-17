<template>
  <div class="ptc-diagram" aria-label="模型生成代码，代码循环调用工具并筛选结果，只将输出返回模型上下文">
    <svg class="ptc-connections" viewBox="0 0 892 320" fill="none" aria-hidden="true">
      <g class="call-stroke">
        <path d="M51 112V73Q51 67 57 67H132M126 62L132 67L126 72" />
        <path d="M686 96H716M710 91L716 96L710 101M686 214H716M710 209L716 214L710 219" />
      </g>
      <g class="result-stroke">
        <path d="M716 124H686M692 119L686 124L692 129M716 242H686M692 237L686 242L692 247" />
        <path d="M138 297H58Q51 297 51 290V207M46 213L51 207L56 213" />
      </g>
    </svg>

    <div class="ptc-model">
      <span class="ptc-call-label">生成代码</span>
      <svg viewBox="0 0 60 60" class="ptc-model-icon" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="54" height="54" rx="16" />
        <path d="M18 20L31 15L43 25L37 41L21 39L18 20M18 20L37 41M31 15L21 39M43 25L21 39" />
        <circle cx="18" cy="20" r="3" /><circle cx="31" cy="15" r="3" />
        <circle cx="43" cy="25" r="3" /><circle cx="37" cy="41" r="3" />
        <circle cx="21" cy="39" r="3" />
      </svg>
      <strong>模型</strong>
      <span class="ptc-output-label">仅输出进入<br />模型上下文</span>
    </div>

    <div class="ptc-runtime">
      <div class="ptc-runtime-heading"><span>代码执行环境</span><span>Python</span></div>
      <div class="ptc-code"><slot /></div>
      <div class="ptc-output"><span>stdout</span><code>{'pr': 42, 'failed': ['typecheck']}</code></div>
    </div>

    <div class="ptc-tools">
      <div class="ptc-tools-heading">TOOLS</div>
      <div class="ptc-tool">
        <code>list_prs</code>
        <span>PR 列表</span>
      </div>
      <div class="ptc-tool">
        <div><code>get_checks</code><span class="ptc-repeat">× N</span></div>
        <span>CI 检查结果</span>
      </div>
      <p>原始结果留在执行环境</p>
    </div>
  </div>
</template>

<style scoped>
.ptc-diagram {
  position: relative;
  display: grid;
  grid-template-columns: 100px 544px 172px;
  gap: 38px;
  height: 320px;
}
.ptc-connections { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.ptc-connections path { stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.call-stroke { color: var(--native-blue); }
.result-stroke { color: var(--native-green); }
.ptc-model { position: relative; display: flex; flex-direction: column; align-items: center; padding-top: 110px; }
.ptc-model-icon { width: 68px; height: 68px; color: var(--native-purple); }
.ptc-model-icon rect { fill: currentColor; fill-opacity: 0.07; stroke: currentColor; stroke-width: 1.3; }
.ptc-model-icon path { stroke: currentColor; stroke-width: 1.15; }
.ptc-model-icon circle { fill: var(--native-paper); stroke: currentColor; stroke-width: 1.3; }
.ptc-model strong { margin-top: 7px; font-size: 16px; font-weight: 500; line-height: 1.2; }
.ptc-call-label { position: absolute; top: 38px; left: 34px; width: 90px; font-size: 14px; color: var(--native-blue); }
.ptc-output-label { position: absolute; bottom: 0; left: 0; padding-right: 7px; background: var(--native-paper); color: var(--native-green); font-size: 14px; line-height: 1.5; }
.ptc-runtime { z-index: 1; display: grid; grid-template-rows: 38px 1fr 42px; height: 320px; overflow: hidden; border: 1px solid #cfddda; border-radius: 7px; background: var(--native-code); }
.ptc-runtime-heading { display: flex; align-items: center; justify-content: space-between; padding: 0 15px; border-bottom: 1px solid var(--native-rule); color: var(--native-muted); font-size: 13px; line-height: 1.4; }
.ptc-runtime-heading span:first-child { color: var(--native-green); font-weight: 500; }
.ptc-runtime-heading span:last-child { font-family: 'SFMono-Regular', Consolas, monospace; }
.ptc-code { min-height: 0; padding: 14px 15px; }
.ptc-code :deep(.slidev-code-wrapper) { margin: 0 !important; }
.ptc-code :deep(pre), .ptc-code :deep(.slidev-code) {
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  font-size: 13.5px !important;
  line-height: 23px !important;
}
.ptc-code :deep(code) { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace !important; font-size: inherit !important; line-height: inherit !important; }
.ptc-output { display: flex; align-items: center; gap: 12px; padding: 0 15px; border-top: 1px solid var(--native-rule); color: var(--native-green); }
.ptc-output > span { font-family: 'SFMono-Regular', Consolas, monospace; font-size: 11px; }
.ptc-output > code { padding: 0; background: transparent; color: inherit; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 13px; }
.ptc-tools { position: relative; padding-top: 72px; }
.ptc-tools-heading { position: absolute; top: 38px; color: var(--native-muted); font-size: 12px; font-weight: 500; letter-spacing: 1.5px; }
.ptc-tool { height: 78px; padding: 16px 13px; border: 1px solid #cbd7e3; border-radius: 6px; background: color-mix(in srgb, var(--native-blue) 5%, var(--native-paper)); }
.ptc-tool + .ptc-tool { margin-top: 40px; }
.ptc-tool code { display: block; padding: 0; background: transparent; color: var(--native-blue); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 16px; line-height: 1.2; }
.ptc-tool > span { display: block; margin-top: 7px; color: var(--native-muted); font-size: 13px; line-height: 1.2; }
.ptc-tool > div { display: flex; justify-content: space-between; align-items: center; }
.ptc-repeat { color: var(--native-blue); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 12px; }
.ptc-tools p { margin: 17px 0 0; color: var(--native-green); font-size: 13px; line-height: 1.5; }
:global(.dark) .ptc-runtime, :global(.dark) .ptc-tool { border-color: var(--native-rule); }
</style>
