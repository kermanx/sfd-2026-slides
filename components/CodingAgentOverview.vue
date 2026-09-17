<script setup lang="ts">
import CodingEraIllustration from './CodingEraIllustration.vue'

const eras = [
  {
    id: 'static', generation: '前史', number: '00', title: '静态分析补全',
    color: '#70808e', tint: '#eaf0f3', action: '选择一个符号',
    products: [{ name: 'DevCpp' }, { name: 'IntelliSense' }],
  },
  {
    id: 'completion', generation: '第一代', number: '01', title: 'AI 代码补全',
    color: '#5279a5', tint: '#eaf1fa', action: '续写一段代码', year: '2018',
    products: [{ name: 'TabNine' }, { name: 'GitHub Copilot' }],
  },
  {
    id: 'chat', generation: '第二代', number: '02', title: '对话式编程',
    color: '#8870ab', tint: '#f0ebf7', action: '通过对话编程', year: '2023',
    products: [{ name: 'ChatGPT' }, { name: 'GitHub Copilot' }],
  },
  {
    id: 'agent', generation: '第三代', number: '03', title: 'Agentic Coding',
    color: '#398476', tint: '#e6f2ed', action: '自主执行任务',
    products: [
      { date: '2024.3', name: 'Devin' },
      { date: '2024.11', name: 'Cursor Agent' },
      { date: '2025.2', name: 'Claude Code beta' },
      { date: '2025.9', name: 'Kimi CLI' },
    ],
  },
  {
    id: 'wish', generation: '第四代', number: '04', title: '全自动许愿机',
    color: '#ae8041', tint: '#f8efdf', action: '从愿望到成品',
    products: [{ name: 'Claude Tag' }, { name: 'Raft' }, { name: 'Mira' }],
  },
] as const
</script>

<template>
  <section class="coding-overview" aria-labelledby="coding-overview-title">
    <header class="overview-heading">
      <h1 id="coding-overview-title">The History of Coding Agent</h1>
    </header>

    <div class="era-timeline">
      <article
        v-for="era in eras"
        :key="era.id"
        class="era"
        :class="`era-${era.id}`"
        :style="{ '--era-color': era.color, '--era-tint': era.tint }"
      >
        <div class="era-marker">
          <span class="era-number">{{ era.number }}</span>
          <span class="era-generation">{{ era.generation }}</span>
        </div>
        <h2>{{ era.title }}</h2>
        <CodingEraIllustration :stage="era.id" :label="era.action" />
        <p class="era-action">{{ era.action }}</p>
        <div class="era-details">
          <div v-if="'year' in era" class="era-year">{{ era.year }}</div>
          <ul class="era-products" :class="{ 'with-dates': era.id === 'agent' }">
            <li v-for="product in era.products" :key="product.name">
              <span v-if="'date' in product" class="product-date">{{ product.date }}</span>
              <span>{{ product.name }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>

  </section>
</template>

<style scoped>
.coding-overview {
  --overview-paper: #fcfcfa;
  --overview-text: #27333b;
  --overview-muted: #7a858b;
  --overview-rule: #dde3e3;
  width: 100%;
  height: 100%;
  padding: 34px 40px 36px;
  color: var(--overview-text);
  background: var(--overview-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.overview-heading h1 {
  margin: 0;
  color: #526f7a;
  font-family: 'PT Serif', Georgia, serif;
  font-size: 34px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.8px;
}

.era-timeline {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.4fr 1fr;
  gap: 14px;
  margin-top: 22px;
}

.era {
  min-width: 0;
}

.era-marker {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 26px;
  color: var(--era-color);
}

.era-marker::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -14px;
  left: 91px;
  border-top: 1px solid var(--overview-rule);
}

.era:last-child .era-marker::after {
  right: 0;
}

.era-number {
  display: grid;
  width: 26px;
  height: 26px;
  place-items: center;
  border: 1px solid currentColor;
  border-radius: 50%;
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 11px;
  letter-spacing: -0.5px;
}

.era-generation {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
}

.era h2 {
  margin: 15px 0 10px;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.6px;
  white-space: nowrap;
}

.era-action {
  margin: 8px 0 0;
  color: var(--era-color);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
}

.era-details {
  margin-top: 11px;
  padding-top: 11px;
  border-top: 1px solid var(--overview-rule);
}

.era-year {
  margin-bottom: 5px;
  color: var(--era-color);
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
}

.era-products {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
  line-height: 1.85;
}

.era-products li {
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.era-products.with-dates li {
  display: grid;
  grid-template-columns: 57px 1fr;
  gap: 6px;
}

.product-date {
  color: var(--overview-muted);
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 11px;
  line-height: 2.18;
}

:global(.dark) .coding-overview {
  --overview-paper: #161e24;
  --overview-text: #e0e8ed;
  --overview-muted: #93a4b0;
  --overview-rule: #35424c;
}

:global(.dark) .overview-heading h1 {
  color: #abc7ce;
}

:global(.dark) .era {
  --era-color: color-mix(in srgb, var(--era-tint) 40%, #86a6b7) !important;
}
</style>
