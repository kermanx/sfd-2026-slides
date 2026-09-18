<template>
  <svg class="ecosystem-connections" viewBox="0 0 892 362" fill="none" role="img" aria-labelledby="ecosystem-relations-title ecosystem-relations-description">
    <title id="ecosystem-relations-title">从计算资源到 Agent，以及数据反馈</title>
    <desc id="ecosystem-relations-description">Hardware 支撑 Infra，Infra 的需求与瓶颈又启发 Hardware 设计。Infra 与 Model 协同设计。Model 为 Harness 提供模型能力。上方橙色箭头从 Harness 指向 Model，标记为 ???；Harness 和 Infra 的橙色双向连接标记为 co-design。Harness 使用过程中产生的轨迹和反馈可以成为 Data，经过筛选后用于模型训练。</desc>
    <g class="harness-connection">
      <path d="M738 -8V-16Q738 -26 728 -26H576Q566 -26 566 -16V-8M561 -14L566 -8L571 -14" />
      <path d="M842 -8V-58Q842 -68 832 -68H340Q330 -68 330 -58V-8M837 -14L842 -8L847 -14M325 -14L330 -8L335 -14" />
    </g>
    <text x="586" y="-74" text-anchor="middle" class="connection-label label-above">co-design</text>
    <text x="652" y="-30" text-anchor="middle" class="connection-label label-above">???</text>
    <g class="resource-connection">
      <path d="M200 91H224M218 86L224 91L218 96" />
      <path d="M433 91H459M453 86L459 91L453 96" />
      <path d="M666 91H692M686 86L692 91L686 96" />
    </g>
    <g class="design-connection">
      <path d="M287 190V206Q287 216 277 216H114Q104 216 104 206V190M99 196L104 190L109 196" />
      <path d="M370 190V206Q370 216 380 216H500Q510 216 510 206V190M365 196L370 190L375 196M505 196L510 190L515 196" />
    </g>
    <text x="195.5" y="222" text-anchor="middle" class="connection-label label-below">设计启发</text>
    <text x="440" y="222" text-anchor="middle" class="connection-label label-below">co-design</text>
    <g class="data-connection">
      <path d="M606 254V190M601 196L606 190L611 196" />
      <path d="M796 190V254M791 248L796 254L801 248" />
    </g>
    <text x="612" y="222" class="connection-label label-side">训练</text>
    <text x="790" y="222" text-anchor="end" class="connection-label label-side">轨迹</text>
  </svg>
</template>

<style scoped>
.resource-connection { stroke: #98a8b0; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.design-connection, .data-connection { stroke: var(--ecosystem-accent); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.harness-connection { stroke: var(--ecosystem-orange); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
.connection-label { fill: var(--ecosystem-text); font-family: 'Inter', 'PingFang SC', sans-serif; font-size: 16px; }
.label-above { dominant-baseline: text-after-edge; }
.label-below { dominant-baseline: text-before-edge; }
.label-side { dominant-baseline: central; }
</style>
