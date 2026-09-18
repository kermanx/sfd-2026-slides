<template>
  <footer class="deck-footer" :class="{ 'on-black': String($frontmatter.class || '').split(/\s+/).includes('bg-black') }">
    <span>_Kerman · SFD 2026</span>
    <span>Opinions are my own</span>
  </footer>
</template>

<style scoped>
.deck-footer {
  --footer-text: #84918f;
  position: absolute;
  right: 16px;
  bottom: 8px;
  left: 16px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--footer-text);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
}

.on-black,
:global(.dark) .deck-footer {
  --footer-text: #a0adaa;
}
</style>
