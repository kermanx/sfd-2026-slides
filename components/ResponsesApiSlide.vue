<template>
  <section class="slidev-layout responses-api-slide content-slide">
    <slot />
  </section>
</template>

<style scoped>
.responses-api-slide {
  --responses-paper: #fcfcfa;
  --responses-text: #27333b;
  --responses-muted: #69777e;
  --responses-rule: #dde3e3;
  --responses-input: #5279a5;
  --responses-model: #8870ab;
  --responses-output: #398476;
  --responses-system: #ae8041;
  width: 100%;
  height: 100%;
  padding-bottom: 36px;
  background: var(--responses-paper);
  color: var(--responses-text);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.responses-api-slide :deep(.responses-title) { display: flex; justify-content: space-between; align-items: center; }
.responses-api-slide :deep(.responses-title > p) { margin: 0; opacity: 1; line-height: 1.4; }
.responses-api-slide :deep(.responses-endpoint) { padding: 0; background: transparent; color: var(--responses-input); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 13px; opacity: 1; }
.responses-api-slide :deep(.responses-stateless) { margin: 23px 0 21px; }
.responses-api-slide :deep(.responses-details) { display: grid; grid-template-columns: 432px minmax(0, 1fr); gap: 32px; }
.responses-api-slide :deep(.request-structure), .responses-api-slide :deep(.message-roles) { min-width: 0; }
.responses-api-slide :deep(.detail-heading) { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 13px; }
.responses-api-slide :deep(.detail-heading h2) { margin: 0; font-size: 20px; font-weight: 600; line-height: 1.4; }
.responses-api-slide :deep(.detail-heading p) { margin: 0; line-height: 1.4; }
.responses-api-slide :deep(.detail-heading span) { color: var(--responses-muted); font-size: 11px; }
.responses-api-slide :deep(.request-structure > .slidev-code-wrapper) { margin: 0 !important; padding: 13px 14px; border: 1px solid color-mix(in srgb, var(--responses-input) 22%, var(--responses-paper)); border-radius: 5px; background: color-mix(in srgb, var(--responses-input) 3%, var(--responses-paper)); }
.responses-api-slide :deep(pre), .responses-api-slide :deep(.slidev-code) { margin: 0 !important; padding: 0 !important; border: 0; border-radius: 0; background: transparent !important; box-shadow: none; font-size: 12px !important; line-height: 19px !important; }
.responses-api-slide :deep(pre code) { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace !important; font-size: inherit !important; line-height: inherit !important; }
.responses-api-slide :deep(.message-shape) { display: block; margin: 0; padding: 11px 13px; border: 1px solid var(--responses-rule); border-radius: 4px; background: transparent; color: var(--responses-muted); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 12px; line-height: 1.4; }
.responses-api-slide :deep(.message-shape b) { color: var(--responses-model); font-weight: 500; }
.responses-api-slide :deep(.message-roles > p:not(.role-note)) { margin: 0; }
.responses-api-slide :deep(.message-role-list) { margin: 11px 0 0; padding: 0; list-style: none; }
.responses-api-slide :deep(.message-role-list li) { display: grid; grid-template-columns: 110px 1fr; align-items: center; gap: 12px; min-height: 40px; margin: 0; padding: 0; border-bottom: 1px solid var(--responses-rule); }
.responses-api-slide :deep(.message-role-list code) { padding: 0; background: transparent; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 15px; font-weight: 500; }
.responses-api-slide :deep(.message-role-list span) { font-size: 14px; line-height: 1.4; }
.responses-api-slide :deep(.role-system code) { color: var(--responses-system); }
.responses-api-slide :deep(.role-developer code) { color: var(--responses-model); }
.responses-api-slide :deep(.role-user code) { color: var(--responses-input); }
.responses-api-slide :deep(.role-assistant code) { color: var(--responses-output); }
.responses-api-slide :deep(.role-note) { margin: 12px 0 0; color: var(--responses-muted); font-size: 12px; line-height: 1.6; }
.responses-api-slide :deep(.role-note code) { padding: 0; background: transparent; color: var(--responses-muted); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 11px; }
:global(.dark) .responses-api-slide { --responses-paper: #161e24; --responses-text: #e0e8ed; --responses-muted: #a6b6bf; --responses-rule: #35424c; --responses-input: #8dadd2; --responses-model: #b4a1d1; --responses-output: #83b6a9; --responses-system: #c6a371; }
</style>
