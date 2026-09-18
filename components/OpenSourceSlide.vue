<template>
  <section class="slidev-layout open-source-slide content-slide">
    <slot />
  </section>
</template>

<style scoped>
.open-source-slide {
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  background: var(--slide-paper);
  color: #27333b;
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 22px;
  line-height: 1.75;
}

.open-source-slide :deep(.open-source-copy) { margin-top: 42px; }
.open-source-slide :deep(.open-source-group + .open-source-group) { margin-top: 58px; }
.open-source-slide :deep(p) {
  margin: 0;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  opacity: 1;
}
.open-source-slide :deep(p + p) { margin-top: 22px; }
.open-source-slide :deep(.open-source-example) {
  padding-left: 24px;
  color: #69777e;
  font-size: 20px;
}
.open-source-slide :deep(strong) { font-weight: 600; }
</style>
