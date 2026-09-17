<template>
  <section class="slidev-layout harness-goals-slide">
    <slot />
  </section>
</template>

<style scoped>
.harness-goals-slide {
  --goals-paper: #fcfcfa;
  --goals-text: #27333b;
  --goals-muted: #69777e;
  --goals-rule: #dde3e3;
  --goals-heading: #526f7a;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 34px 44px 42px;
  color: var(--goals-text);
  background: var(--goals-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.harness-goals-slide :deep(h1) {
  margin: 0;
  color: var(--goals-heading);
  font-family: 'PT Serif', 'Songti SC', Georgia, serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.harness-goals-slide :deep(.goals-context) {
  margin: 12px 0 0;
  color: var(--goals-muted);
  font-size: 17px;
  line-height: 1.5;
  opacity: 1;
}

.harness-goals-slide :deep(.goals-grid) {
  display: grid;
  grid-template-columns: 1fr 1.23fr 1.13fr 1fr;
  gap: 24px;
  margin-top: 40px;
}

.harness-goals-slide :deep(.goal-column) {
  min-width: 0;
  padding-top: 17px;
  border-top: 2px solid var(--goal-color);
}

.harness-goals-slide :deep(.goal-model) { --goal-color: #8870ab; }
.harness-goals-slide :deep(.goal-human) { --goal-color: #5279a5; }
.harness-goals-slide :deep(.goal-world) { --goal-color: #398476; }
.harness-goals-slide :deep(.goal-composition) { --goal-color: #ae8041; }

.harness-goals-slide :deep(h2) {
  margin: 0;
  color: var(--goal-color);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.3px;
  white-space: nowrap;
}

.harness-goals-slide :deep(.goal-column ul) {
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
  font-size: 18px;
  line-height: 1.6;
}

.harness-goals-slide :deep(.goal-column li) {
  margin: 0;
  padding: 0;
}

.harness-goals-slide :deep(.goal-column li + li) { margin-top: 10px; }
.harness-goals-slide :deep(.goal-column li p) { margin: 0; line-height: inherit; }

.harness-goals-slide :deep(.goal-column code) {
  padding: 2px 5px;
  border-radius: 3px;
  color: var(--goal-color);
  background: color-mix(in srgb, var(--goal-color) 8%, transparent);
  font-size: 0.9em;
}

.harness-goals-slide :deep(.goal-aside) {
  display: block;
  margin-top: 6px;
  color: var(--goals-muted);
  font-size: 15px;
  line-height: 1.6;
}

.harness-goals-slide :deep(.goals-conclusion) {
  margin-top: auto;
  margin-bottom: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--goals-rule);
}

.harness-goals-slide :deep(.goals-conclusion p) {
  margin: 0;
  color: var(--goals-muted);
  font-size: 21px;
  line-height: 1.5;
}

.harness-goals-slide :deep(.goals-conclusion p + p) {
  margin-top: 7px;
  color: var(--goals-heading);
  font-size: 27px;
  font-weight: 600;
  letter-spacing: -0.4px;
}

:global(.dark) .harness-goals-slide {
  --goals-paper: #161e24;
  --goals-text: #e0e8ed;
  --goals-muted: #a6b6bf;
  --goals-rule: #35424c;
  --goals-heading: #abc7ce;
}

:global(.dark) .harness-goals-slide :deep(.goal-model) { --goal-color: #b4a1d1; }
:global(.dark) .harness-goals-slide :deep(.goal-human) { --goal-color: #8dadd2; }
:global(.dark) .harness-goals-slide :deep(.goal-world) { --goal-color: #83b6a9; }
:global(.dark) .harness-goals-slide :deep(.goal-composition) { --goal-color: #c6a371; }
</style>
