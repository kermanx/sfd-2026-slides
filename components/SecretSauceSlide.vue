<template>
  <section class="slidev-layout secret-sauce-slide content-slide">
    <slot />
  </section>
</template>

<style scoped>
.secret-sauce-slide {
  --secret-paper: #fcfcfa;
  --secret-text: #27333b;
  width: 100%;
  height: 100%;
  padding-bottom: 36px;
  color: var(--secret-text);
  background: var(--secret-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 22px;
  line-height: 1.7;
}
.secret-sauce-slide :deep(p) {
  margin: 0;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  opacity: 1;
}
.secret-sauce-slide :deep(.secret-copy) { margin-top: 42px; }
.secret-sauce-slide :deep(.secret-copy > p + p) { margin-top: 26px; }
.secret-sauce-slide :deep(.training-point) { margin-top: 32px; }
.secret-sauce-slide :deep(.training-notes) { margin-top: 18px; padding-left: 24px; }
.secret-sauce-slide :deep(.training-notes > p + p) { margin-top: 18px; }
.secret-sauce-slide :deep(strong) { font-weight: 600; }
:global(.dark) .secret-sauce-slide {
  --secret-paper: #161e24;
  --secret-text: #e0e8ed;
}
</style>
