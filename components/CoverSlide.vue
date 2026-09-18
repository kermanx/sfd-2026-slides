<template>
  <section class="slidev-layout cover-slide">
    <slot />
  </section>
</template>

<style scoped>
.cover-slide {
  --cover-paper: #fcfcfa;
  --cover-title: #526f7a;
  --cover-caption: #6f7e85;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 60px;
  background: var(--cover-paper);
  text-align: center;
}
.cover-slide :deep(.cover-copy) { width: 100%; max-width: 780px; }
.cover-slide :deep(h1) {
  margin: 0;
  color: var(--cover-title);
  font-family: 'PT Serif', 'Songti SC', Georgia, serif;
  font-size: 58px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.8px;
}
.cover-slide :deep(.cover-copy > p) {
  margin: 32px 0 0;
  color: var(--cover-caption);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.4px;
  opacity: 1;
}
:global(.dark) .cover-slide { --cover-paper: #161e24; --cover-title: #abc7ce; --cover-caption: #a6b6bf; }
</style>
