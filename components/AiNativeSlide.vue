<template>
  <section class="slidev-layout ai-native-slide content-slide">
    <slot />
  </section>
</template>

<style scoped>
.ai-native-slide {
  --native-paper: #fcfcfa;
  --native-text: #27333b;
  --native-muted: #69777e;
  --native-rule: #dde3e3;
  --native-blue: #5279a5;
  --native-green: #398476;
  --native-purple: #8870ab;
  --native-code: #f3f6f5;
  width: 100%;
  height: 100%;
  padding-bottom: 36px;
  background: var(--native-paper);
  color: var(--native-text);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}


.ai-native-slide :deep(.native-comparisons) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-top: 12px;
}

.ai-native-slide :deep(.native-comparison) {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
  min-width: 0;
}

.ai-native-slide :deep(.native-comparison + .native-comparison) {
  padding-top: 18px;
  border-top: 1px solid var(--native-rule);
}

.ai-native-slide :deep(.native-option) {
  display: grid;
  justify-items: start;
  text-align: left;
  min-width: 0;
}

.ai-native-slide :deep(.native-option h2) {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.4px;
  white-space: nowrap;
}

.ai-native-slide :deep(.native-option > p) {
  margin: 3px 0 10px;
  color: var(--native-muted);
  font-size: 15px;
  line-height: 1.5;
}

.ai-native-slide :deep(.native-option.preferred h2) { color: var(--native-green); }
.ai-native-slide :deep(.native-preference) {
  align-self: center;
  padding-top: 65px;
  color: var(--native-green);
  font-family: 'PT Serif', Georgia, serif;
  font-size: 38px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
}

.ai-native-slide :deep(.native-ptc-task) {
  margin: 16px 0 32px;
  color: var(--native-muted);
  font-size: 18px;
  line-height: 1.4;
  opacity: 1;
}

:global(.dark) .ai-native-slide {
  --native-paper: #161e24;
  --native-text: #e0e8ed;
  --native-muted: #a6b6bf;
  --native-rule: #35424c;
  --native-blue: #8dadd2;
  --native-green: #83b6a9;
  --native-purple: #b4a1d1;
  --native-code: #202c30;
}

</style>
