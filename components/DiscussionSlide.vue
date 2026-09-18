<template>
  <section class="slidev-layout discussion-slide content-slide">
    <slot />
  </section>
</template>

<style scoped>
.discussion-slide {
  --discussion-paper: #fcfcfa;
  --discussion-text: #27333b;
  --discussion-detail: #59666e;
  --discussion-rule: #dde3e3;
  width: 100%;
  height: 100%;
  padding-bottom: 36px;
  background: var(--discussion-paper);
  color: var(--discussion-text);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}


.discussion-slide :deep(.discussion-grid) {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin-top: 30px;
}

.discussion-slide :deep(.discussion-pair) {
  grid-template-rows: repeat(2, 188px);
  row-gap: 16px;
}

.discussion-slide :deep(.discussion-trio) {
  grid-template-rows: 140px repeat(2, 124px);
}

.discussion-slide :deep(.discussion-group) {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 222px;
  column-gap: 28px;
  align-items: center;
  min-width: 0;
}

.discussion-slide :deep(.discussion-group + .discussion-group) {
  border-top: 1px solid var(--discussion-rule);
}

.discussion-slide :deep(.topic-copy) {
  display: grid;
  grid-template-columns: 25px minmax(0, 1fr);
  column-gap: 14px;
  row-gap: 10px;
  align-content: center;
}

.discussion-slide :deep(.prompt-group) { --topic-color: #5279a5; --topic-tint: #eaf1fa; }
.discussion-slide :deep(.example-group) { --topic-color: #8870ab; --topic-tint: #f0ebf7; }
.discussion-slide :deep(.burden-group) { --topic-color: #398476; --topic-tint: #e6f2ed; }
.discussion-slide :deep(.pattern-group) { --topic-color: #70808e; --topic-tint: #eaf0f3; }
.discussion-slide :deep(.feeling-group) { --topic-color: #ae8041; --topic-tint: #f8efdf; }

.discussion-slide :deep(.topic-marker) {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  color: var(--topic-color);
}

.discussion-slide :deep(.topic-marker span) {
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid currentColor;
  border-radius: 50%;
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 11px;
  line-height: 1;
}

.discussion-slide :deep(h2) {
  grid-column: 2;
  grid-row: 1;
  margin: 0;
  font-size: 23px;
  font-weight: 600;
  line-height: 1.4;
}

.discussion-slide :deep(ul) {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  padding: 0 0 0 18px;
  color: var(--discussion-detail);
  font-size: 18px;
  line-height: 1.65;
  list-style: disc;
}

.discussion-slide :deep(li) {
  margin: 0;
  padding: 0;
}

.discussion-slide :deep(li + li) { margin-top: 3px; }

.discussion-slide :deep(li p) {
  margin: 0;
  line-height: inherit;
}

.discussion-slide :deep(.psychology-illustration) {
  grid-column: 2;
  grid-row: 1;
  width: 100%;
  height: 112px;
  margin: 0;
}

.discussion-slide :deep(.discussion-trio .topic-copy) { row-gap: 7px; }
.discussion-slide :deep(.discussion-trio h2) { font-size: 22px; }
.discussion-slide :deep(.discussion-trio ul) { font-size: 17px; line-height: 1.6; }
.discussion-slide :deep(.discussion-trio li + li) { margin-top: 2px; }

:global(.dark) .discussion-slide {
  --discussion-paper: #161e24;
  --discussion-text: #e0e8ed;
  --discussion-detail: #b1bfc8;
  --discussion-rule: #35424c;
}

:global(.dark) .discussion-slide :deep(.prompt-group) { --topic-color: #8dadd2; --topic-tint: #223246; }
:global(.dark) .discussion-slide :deep(.example-group) { --topic-color: #b4a1d1; --topic-tint: #332c43; }
:global(.dark) .discussion-slide :deep(.burden-group) { --topic-color: #83b6a9; --topic-tint: #20382f; }
:global(.dark) .discussion-slide :deep(.pattern-group) { --topic-color: #a3b6c5; --topic-tint: #2a3741; }
:global(.dark) .discussion-slide :deep(.feeling-group) { --topic-color: #c6a371; --topic-tint: #3b3224; }

</style>
