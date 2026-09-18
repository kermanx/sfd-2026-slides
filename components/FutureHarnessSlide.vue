<template>
  <section class="slidev-layout future-harness-slide content-slide">
    <slot />
  </section>
</template>

<style scoped>
.future-harness-slide {
  --future-paper: #fcfcfa;
  --future-text: #27333b;
  --future-heading: #526f7a;
  --future-accent: #2f7890;
  --future-muted: #69777e;
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  color: var(--future-text);
  background: var(--future-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 18px;
  line-height: 1.75;
}


.future-harness-slide :deep(.future-directions) {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  margin-top: 32px;
}

.future-harness-slide :deep(.future-direction) {
  min-width: 0;
}

.future-harness-slide :deep(h2) {
  margin: 0;
  color: var(--future-heading);
  font-size: inherit;
  font-weight: 600;
  line-height: inherit;
  white-space: nowrap;
}

.future-harness-slide :deep(.direction-content) { margin-top: 25px; }

.future-harness-slide :deep(p) {
  margin: 0;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  opacity: 1;
}

.future-harness-slide :deep(p + p) { margin-top: 20px; }
.future-harness-slide :deep(.training-belief) {
  margin-top: 25px;
  color: var(--future-muted);
}
.future-harness-slide :deep(.training-belief strong) { color: var(--future-text); }
.future-harness-slide :deep(.training-takeaway) {
  display: inline-block;
  max-width: 100%;
  color: var(--future-accent);
  text-wrap: balance;
  vertical-align: top;
}
.future-harness-slide :deep(strong) { font-weight: 600; }
.future-harness-slide :deep(.api-questions p) { white-space: nowrap; }
.future-harness-slide :deep(.infra-open-question) { color: var(--future-muted); }
.future-harness-slide :deep(.future-addendum) {
  position: absolute;
  right: var(--slide-content-x);
  bottom: 50px;
  margin: 0;
  color: var(--future-muted);
  font-size: 16px;
  line-height: 1.5;
  text-align: right;
}

:global(.dark) .future-harness-slide {
  --future-paper: #161e24;
  --future-text: #e0e8ed;
  --future-heading: #abc7ce;
  --future-accent: #85c5d9;
  --future-muted: #a6b6bf;
}
</style>
