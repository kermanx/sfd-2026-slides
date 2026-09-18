<template>
  <section class="slidev-layout ptc-extensions-slide content-slide">
    <slot />
  </section>
</template>

<style scoped>
.ptc-extensions-slide {
  --extension-text: #27333b;
  --extension-muted: #69777e;
  --extension-rule: #d7e0dd;
  --extension-green: #398476;
  --extension-code: #f3f6f5;
  width: 100%;
  height: 100%;
  padding-bottom: 36px;
  background: var(--slide-paper);
  color: var(--extension-text);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.ptc-extensions-slide :deep(.ptc-extensions) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  margin-top: 18px;
}

.ptc-extensions-slide :deep(.ptc-extension) { min-width: 0; }
.ptc-extensions-slide :deep(h2) {
  margin: 0;
  color: var(--extension-text);
  font-size: 21px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.4px;
  white-space: nowrap;
}
.ptc-extensions-slide :deep(h2 a) { color: inherit; border-bottom: 0; }
.ptc-extensions-slide :deep(.extension-visual) { margin-top: 26px; }

:global(.dark) .ptc-extensions-slide {
  --extension-text: #e0e8ed;
  --extension-muted: #a6b6bf;
  --extension-rule: #354b44;
  --extension-green: #83b6a9;
  --extension-code: #202c30;
}
</style>
