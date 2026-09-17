<template>
  <section class="slidev-layout agent-harness-slide">
    <slot />
  </section>
</template>

<style scoped>
.agent-harness-slide {
  --loop-paper: #fcfcfa;
  --loop-text: #27333b;
  --loop-muted: #69777e;
  --loop-rule: #dde3e3;
  --loop-model: #8870ab;
  --loop-action: #5279a5;
  --loop-observation: #398476;
  width: 100%;
  height: 100%;
  padding: 34px 44px 36px;
  color: var(--loop-text);
  background: var(--loop-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.agent-harness-slide :deep(h1) {
  margin: 0;
  color: #526f7a;
  font-family: 'PT Serif', 'Songti SC', Georgia, serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.5px;
}
.agent-harness-slide :deep(.agent-formula) {
  margin: 78px 0 0;
  color: var(--loop-text);
  font-size: 27px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.4px;
  text-align: center;
  opacity: 1;
}
.agent-harness-slide :deep(.react-loop) { margin-top: 10px; }
:global(.dark) .agent-harness-slide {
  --loop-paper: #161e24;
  --loop-text: #e0e8ed;
  --loop-muted: #a6b6bf;
  --loop-rule: #35424c;
  --loop-model: #b4a1d1;
  --loop-action: #8dadd2;
  --loop-observation: #83b6a9;
}
:global(.dark) .agent-harness-slide :deep(h1) { color: #abc7ce; }
</style>
