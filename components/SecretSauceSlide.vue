<template>
  <section class="slidev-layout secret-sauce-slide">
    <slot />
  </section>
</template>

<style scoped>
.secret-sauce-slide {
  --secret-paper: #fcfcfa;
  --secret-text: #27333b;
  width: 100%;
  height: 100%;
  padding: 34px 44px 36px;
  color: var(--secret-text);
  background: var(--secret-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 22px;
  line-height: 1.7;
}
.secret-sauce-slide :deep(h1) {
  margin: 0;
  color: #526f7a;
  font-family: 'PT Serif', 'Songti SC', Georgia, serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.5px;
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
:global(.dark) .secret-sauce-slide :deep(h1) { color: #abc7ce; }
</style>
