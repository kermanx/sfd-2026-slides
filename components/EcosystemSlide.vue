<template>
  <section class="slidev-layout ecosystem-slide">
    <slot />
  </section>
</template>

<style scoped>
.ecosystem-slide {
  --ecosystem-paper: #fcfcfa;
  --ecosystem-text: #27333b;
  --ecosystem-rule: #d6dfe2;
  --ecosystem-accent: #5279a5;
  --ecosystem-orange: #c17d36;
  --ecosystem-top-space: 96px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 44px;
  color: var(--ecosystem-text);
  background: var(--ecosystem-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.ecosystem-slide :deep(.ecosystem-map) { position: relative; width: 100%; padding-top: var(--ecosystem-top-space); }
.ecosystem-slide :deep(.ecosystem-nodes) { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 42px; }
.ecosystem-slide :deep(.ecosystem-node),
.ecosystem-slide :deep(.ecosystem-data) {
  position: relative;
  min-width: 0;
  padding: 16px;
  border: 1px solid var(--ecosystem-rule);
  border-radius: 5px;
  background: var(--ecosystem-paper);
}
.ecosystem-slide :deep(.ecosystem-node) { height: 182px; }
.ecosystem-slide :deep(.ecosystem-node h2),
.ecosystem-slide :deep(.ecosystem-data h2) { margin: 0; font-size: 20px; font-weight: 500; line-height: 1.4; }
.ecosystem-slide :deep(.ecosystem-node ul) { margin: 12px 0 0; padding: 0; list-style: none; font-size: 16px; line-height: 25px; }
.ecosystem-slide :deep(.ecosystem-node li) { margin: 0; padding: 0; }
.ecosystem-slide :deep(.ecosystem-harness) { border-color: color-mix(in srgb, var(--ecosystem-accent) 55%, var(--ecosystem-paper)); }
.ecosystem-slide :deep(.ecosystem-data) { width: calc((100% - 42px) / 2); height: 100px; margin: 80px 0 0 auto; }
.ecosystem-slide :deep(.ecosystem-data p) { margin: 13px 0 0; font-size: 16px; line-height: 1.5; opacity: 1; white-space: nowrap; }
.ecosystem-slide :deep(.ecosystem-connections) { position: absolute; inset: var(--ecosystem-top-space) 0 0; width: 100%; height: calc(100% - var(--ecosystem-top-space)); overflow: visible; pointer-events: none; }
:global(.dark) .ecosystem-slide { --ecosystem-paper: #161e24; --ecosystem-text: #e0e8ed; --ecosystem-rule: #48565e; --ecosystem-accent: #8dadd2; --ecosystem-orange: #d7a365; }
</style>
