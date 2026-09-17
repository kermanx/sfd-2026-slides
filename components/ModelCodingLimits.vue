<script setup lang="ts">
import { useId } from 'vue'
import systemDesignComment from '../assets/1789651061765.png'

const arrowId = `review-arrow-${useId()}`
</script>

<template>
  <section class="model-limits" aria-labelledby="model-limits-title">
    <h1 id="model-limits-title">模型 Coding 能力已达上界？</h1>
    <p class="limits-premise">某种意义上确实是这样？</p>

    <div class="coding-equation">
      <div class="equation-term review-term">
        <svg class="review-loop" viewBox="0 0 260 64" fill="none" role="img" aria-label="write 与 review 循环">
          <defs>
            <marker :id="arrowId" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M2 2L8 5L2 8" class="review-connection" />
            </marker>
          </defs>
          <rect x="14" y="12" width="86" height="40" rx="6" class="review-node" />
          <rect x="160" y="12" width="86" height="40" rx="6" class="review-node" />
          <text x="57" y="37" text-anchor="middle">write</text>
          <text x="203" y="37" text-anchor="middle">review</text>
          <g class="review-connection" :marker-end="`url(#${arrowId})`">
            <path d="M101 25H158" />
            <path d="M159 40H102" />
          </g>
        </svg>
        <p class="term-caption">引入 reviewer</p>
      </div>

      <span class="equation-symbol" aria-hidden="true">+</span>

      <div class="equation-term subagent-term">
        <svg class="subagent-resources" viewBox="0 0 240 71" fill="none" role="img" aria-label="充足的 subagent 资源">
          <path d="M120 8V18M50 30V18H190V30M120 18V30" class="resource-connection" />
          <circle cx="120" cy="8" r="3" class="resource-dot" />
          <g v-for="x in [28, 98, 168]" :key="x" :transform="`translate(${x} 30)`">
            <rect width="44" height="34" rx="8" class="resource-node" />
            <path d="M15 11L10 17L15 23M29 11L34 17L29 23M24 10L20 24" class="resource-connection" />
          </g>
        </svg>
        <p class="term-caption">充足的 subagent 资源</p>
      </div>

      <svg class="equation-arrow" viewBox="0 0 36 24" fill="none" aria-hidden="true">
        <path d="M3 12H31M23 4L31 12L23 20" />
      </svg>

      <div class="equation-result">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="14" />
          <path d="M9 16L14 21L23 11" />
        </svg>
        <p>它能写出<strong>没有故障的代码</strong></p>
      </div>
    </div>

    <section class="system-design-question" aria-labelledby="system-design-heading">
      <h2 id="system-design-heading">系统设计的能力真的不可代替吗？</h2>
      <img :src="systemDesignComment" alt="系统设计能力讨论截图" />
    </section>
  </section>
</template>

<style scoped>
.model-limits {
  --limits-paper: #fcfcfa;
  --limits-text: #27333b;
  --limits-muted: #75828a;
  --limits-blue: #5279a5;
  --limits-green: #398476;
  --limits-rule: #dde3e3;
  --limits-tint: #eef3f6;
  width: 100%;
  height: 100%;
  padding: 34px 44px 32px;
  color: var(--limits-text);
  background: var(--limits-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.model-limits h1 {
  margin: 0;
  color: #526f7a;
  font-family: 'PT Serif', 'Songti SC', Georgia, serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.limits-premise {
  margin: 17px 0 0;
  font-size: 17px;
  line-height: 1.5;
}

.coding-equation {
  display: grid;
  grid-template-columns: 1.15fr 26px 1fr 36px 1.05fr;
  align-items: center;
  gap: 12px;
  height: 130px;
  margin-top: 13px;
  padding: 10px 15px;
  background: var(--limits-tint);
}

.equation-term { text-align: center; }
.term-caption { margin: 0; font-size: 13px; line-height: 22px; }
.review-loop { display: block; width: 100%; height: 62px; }
.review-loop text { fill: var(--limits-blue); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 14px; }
.review-node { fill: var(--limits-paper); stroke: #b8c8d8; stroke-width: 1; }
.review-connection { fill: none; stroke: var(--limits-blue); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.equation-symbol { text-align: center; color: var(--limits-muted); font-size: 26px; font-weight: 300; }
.subagent-resources { display: block; width: 100%; height: 80px; }
.resource-node { fill: var(--limits-paper); stroke: #adc8c0; stroke-width: 1; }
.resource-dot { fill: var(--limits-green); }
.resource-connection { stroke: var(--limits-green); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.equation-arrow { width: 32px; stroke: #95a7af; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }

.equation-result { display: flex; align-items: center; justify-content: center; gap: 12px; }
.equation-result svg { flex-shrink: 0; width: 30px; height: 30px; stroke: var(--limits-green); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.equation-result p { margin: 0; color: var(--limits-muted); font-size: 14px; line-height: 1.6; }
.equation-result strong { display: block; margin-top: 3px; color: var(--limits-green); font-size: 20px; font-weight: 600; white-space: nowrap; }

.system-design-question { margin-top: 23px; }
.system-design-question h2 { margin: 0; font-size: 22px; font-weight: 600; line-height: 1.4; }
.system-design-question img { display: block; width: 100%; height: auto; margin-top: 13px; border: 1px solid var(--limits-rule); border-radius: 5px; }

:global(.dark) .model-limits {
  --limits-paper: #161e24;
  --limits-text: #e0e8ed;
  --limits-muted: #93a4b0;
  --limits-blue: #8dadd2;
  --limits-green: #83b6a9;
  --limits-rule: #35424c;
  --limits-tint: #222f35;
}
:global(.dark) .model-limits h1 { color: #abc7ce; }
</style>
