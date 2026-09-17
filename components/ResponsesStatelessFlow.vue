<template>
  <div class="responses-stateless" role="img" aria-label="无状态调用：每次请求独立，所需历史由调用方放入本次请求；完整请求送入模型，得到本次响应。">
    <div class="stateless-label"><strong>无状态调用</strong><span>每次请求独立</span></div>
    <div class="stateless-request"><strong>完整请求</strong><span>参数 + input（含所需历史）</span></div>
    <div class="stateless-model">Model</div>
    <div class="stateless-response"><strong>本次响应</strong><span>output、usage 等</span></div>
    <svg class="stateless-arrows" viewBox="0 0 892 67" fill="none" aria-hidden="true">
      <path d="M378 27H426M420 22L426 27L420 32M536 27H610M604 22L610 27L604 32" />
    </svg>
  </div>
</template>

<style scoped>
.responses-stateless { position: relative; width: 100%; height: 67px; }
.responses-stateless > div { position: absolute; top: 1px; }
.responses-stateless strong { display: block; font-size: 18px; font-weight: 500; line-height: 1.4; }
.responses-stateless span { display: block; margin-top: 6px; color: var(--responses-muted); font-size: 12px; line-height: 1.4; }
.stateless-label { left: 0; color: var(--responses-output); }
.stateless-request { left: 172px; width: 194px; color: var(--responses-input); text-align: center; }
.responses-stateless .stateless-model { top: 6px; left: 438px; display: grid; place-items: center; width: 86px; height: 42px; border: 1px solid color-mix(in srgb, var(--responses-model) 28%, var(--responses-paper)); border-radius: 5px; background: color-mix(in srgb, var(--responses-model) 4%, var(--responses-paper)); color: var(--responses-model); font-size: 19px; font-weight: 500; }
.stateless-response { left: 626px; width: 198px; color: var(--responses-output); text-align: center; }
.stateless-arrows { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.stateless-arrows path { stroke: var(--responses-muted); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
</style>
