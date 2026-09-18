<template>
  <div class="persistent-state" role="img" aria-label="两轮模型调用使用同一个 Python REPL。第一轮取得 PR 列表，保存在 prs 变量中；第二轮复用 prs，输出 PR 编号。每轮只把输出返回模型。">
    <svg class="persistent-connections" viewBox="0 0 426 320" fill="none" aria-hidden="true">
      <g class="code-arrow">
        <path d="M64 90H103M98 86L103 90L98 94" />
        <path d="M64 248H103M98 244L103 248L98 252" />
      </g>
      <g class="output-arrow">
        <path d="M104 119H65M70 115L65 119L70 123" />
        <path d="M104 277H65M70 273L65 277L70 281" />
      </g>
      <g class="arrow-label">
        <text x="84" y="80">代码</text>
        <text x="84" y="138">输出</text>
        <text x="84" y="238">代码</text>
        <text x="84" y="296">输出</text>
      </g>
    </svg>

    <div class="persistent-model first-model"><span>第 1 轮</span><strong>模型</strong></div>
    <div class="persistent-model second-model"><span>第 2 轮</span><strong>模型</strong></div>

    <div class="persistent-runtime">
      <div class="runtime-heading">同一个 Python REPL</div>
      <div class="execution-cell first-cell">
        <pre>import json
<b>prs</b> = json.loads(
  await list_prs({"state": "open"})
)
print(len(<b>prs</b>))</pre>
        <div class="cell-output"><span>stdout</span><code>3</code></div>
      </div>
      <div class="retained-state">
        <svg viewBox="0 0 18 34" fill="none" aria-hidden="true"><path d="M9 1V32M3 26L9 32L15 26" /></svg>
        <span><code>prs</code> 保留在内存中</span>
      </div>
      <div class="execution-cell second-cell">
        <pre>print([p["number"] for p in <b>prs</b>])</pre>
        <div class="cell-output"><span>stdout</span><code>[41, 42, 43]</code></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.persistent-state { position: relative; width: 100%; height: 320px; }
.persistent-connections { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.persistent-connections path { stroke: currentColor; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
.code-arrow { color: var(--extension-muted); }
.output-arrow { color: var(--extension-green); }
.arrow-label { fill: var(--extension-muted); font-size: 10px; text-anchor: middle; }
.persistent-model { position: absolute; left: 0; width: 60px; text-align: center; }
.first-model { top: 79px; }
.second-model { top: 237px; }
.persistent-model span { display: block; color: var(--extension-muted); font-size: 11px; line-height: 1.5; }
.persistent-model strong { display: block; color: var(--extension-text); font-size: 16px; font-weight: 500; line-height: 1.6; }
.persistent-runtime { position: absolute; top: 0; left: 104px; width: 274px; border: 1px solid var(--extension-rule); border-radius: 5px; overflow: hidden; background: var(--extension-code); }
.runtime-heading { height: 34px; display: flex; align-items: center; padding: 0 12px; border-bottom: 1px solid var(--extension-rule); color: var(--extension-green); font-size: 13px; }
.execution-cell { padding: 12px; }
.first-cell { height: 130px; }
.second-cell { height: 92px; display: flex; flex-direction: column; justify-content: center; }
.execution-cell pre { margin: 0; padding: 0; overflow: visible; color: var(--extension-text); background: transparent; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-size: 11.5px; line-height: 16px; white-space: pre; }
.execution-cell b { color: var(--extension-green); font-weight: 600; }
.cell-output { display: flex; align-items: baseline; gap: 10px; margin-top: 8px; font-size: 11px; line-height: 16px; }
.cell-output > span { color: var(--extension-muted); }
.cell-output code { padding: 0; color: var(--extension-green); background: transparent; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-size: 11.5px; }
.retained-state { height: 60px; display: flex; align-items: center; gap: 12px; padding: 0 18px; color: var(--extension-green); font-size: 13px; }
.retained-state > svg { width: 18px; height: 34px; flex: none; }
.retained-state path { stroke: currentColor; stroke-width: 1.3; stroke-linecap: round; stroke-linejoin: round; }
.retained-state code { padding: 0; color: inherit; background: transparent; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 13px; }
</style>
