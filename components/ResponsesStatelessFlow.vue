<template>
  <div class="responses-stateless" role="img" aria-label="无状态调用：每次请求独立，所需历史由调用方放入本次请求；完整请求送入模型，得到本次响应。">
    <div class="stateless-label"><strong>无状态调用</strong><span>每次请求独立</span></div>
    <div class="stateless-flow">
      <div class="stateless-node stateless-request"><strong>完整请求</strong><span>参数 + input（含所需历史）</span></div>
      <svg class="stateless-arrow" viewBox="0 0 72 20" fill="none" aria-hidden="true">
        <path d="M0 10H72M66 5L72 10L66 15" />
      </svg>
      <div class="stateless-node stateless-model">Model</div>
      <svg class="stateless-arrow" viewBox="0 0 72 20" fill="none" aria-hidden="true">
        <path d="M0 10H72M66 5L72 10L66 15" />
      </svg>
      <div class="stateless-node stateless-response"><strong>本次响应</strong><span>output、usage 等</span></div>
    </div>
  </div>
</template>

<style scoped>
.responses-stateless { display: grid; grid-template-columns: 160px minmax(0, 1fr); align-items: center; gap: 40px; width: 100%; height: 67px; }
.responses-stateless strong { display: block; font-size: 18px; font-weight: 500; line-height: 1.4; }
.responses-stateless span { display: block; margin-top: 4px; color: var(--responses-muted); font-size: 12px; line-height: 1.4; }
.stateless-label { color: var(--responses-output); }
.stateless-flow { display: grid; grid-template-columns: minmax(0, 1fr) 72px 100px 72px minmax(0, 1fr); align-items: center; }
.stateless-node { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 62px; border: 1px solid color-mix(in srgb, var(--node-color) 28%, var(--responses-paper)); border-radius: 5px; background: color-mix(in srgb, var(--node-color) 4%, var(--responses-paper)); color: var(--node-color); text-align: center; }
.stateless-request { --node-color: var(--responses-input); }
.stateless-model { --node-color: var(--responses-model); font-size: 19px; font-weight: 500; }
.stateless-response { --node-color: var(--responses-output); }
.stateless-arrow { display: block; width: 72px; height: 20px; overflow: visible; pointer-events: none; }
.stateless-arrow path { stroke: var(--responses-muted); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
</style>
