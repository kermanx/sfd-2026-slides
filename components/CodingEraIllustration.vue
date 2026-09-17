<script setup lang="ts">
import { useId } from 'vue'

defineProps<{
  stage: 'static' | 'completion' | 'chat' | 'agent' | 'wish'
  label: string
}>()

const arrowheadId = `era-arrowhead-${useId()}`

// All three nodes and arrow segments share one circle, 120° apart.
const loopRadius = 62
const loopPoint = (angle: number) => {
  const radians = angle * Math.PI / 180
  return [90 + loopRadius * Math.cos(radians), 82 + loopRadius * Math.sin(radians)]
}
const loopNodes = [
  { id: 'plan', label: '计划', angle: 270 },
  { id: 'execute', label: '执行', angle: 150 },
  { id: 'verify', label: '验证', angle: 30 },
].map(node => {
  const [x, y] = loopPoint(node.angle)
  const start = loopPoint(node.angle).join(' ')
  const middle = loopPoint(node.angle - 60).join(' ')
  const end = loopPoint(node.angle - 120).join(' ')
  return {
    ...node, x, y,
    arc: `M${start} A${loopRadius} ${loopRadius} 0 0 0 ${middle} A${loopRadius} ${loopRadius} 0 0 0 ${end}`,
  }
})
</script>

<template>
  <svg
    class="era-illustration"
    viewBox="0 0 180 164"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    :aria-label="label"
  >
    <defs v-if="stage === 'agent'">
      <marker
        :id="arrowheadId"
        viewBox="0 0 10 10"
        markerWidth="10"
        markerHeight="10"
        refX="8"
        refY="5"
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <path d="M2 2L8 5L2 8" class="loop-stroke" fill="none" />
      </marker>
    </defs>
    <!-- A shared drawing vocabulary: paper, tinted surfaces, code, and fine ink. -->
    <g v-if="stage === 'static'">
      <rect x="7" y="23" width="148" height="109" rx="7" class="surface frame-stroke" />
      <path d="M7 45H155" class="faint-stroke" />
      <circle cx="18" cy="34" r="2" class="muted-fill" />
      <circle cx="25" cy="34" r="2" class="muted-fill" />
      <circle cx="32" cy="34" r="2" class="muted-fill" />
      <path d="M19 58H38M19 72H28M19 104H31M19 117H45" class="code muted-stroke" />
      <text x="43" y="75" class="code-text ink">std::</text>
      <path d="M82 64V78" class="accent-stroke" />
      <rect x="56" y="84" width="114" height="66" rx="5" class="surface frame-stroke" />
      <path d="M57 89Q57 85 61 85H165Q169 85 169 89V105H57Z" class="tint" />
      <path d="M63 94L66 97L63 100M66 97H70" class="accent-stroke" />
      <text x="77" y="99" class="code-text ink">vector</text>
      <text x="77" y="119" class="code-text subdued">string</text>
      <text x="77" y="139" class="code-text subdued">map</text>
      <path d="M64 114H68M66 112V116M64 134H68M66 132V136" class="muted-stroke" />
    </g>

    <g v-else-if="stage === 'completion'">
      <rect x="7" y="23" width="166" height="121" rx="7" class="surface frame-stroke" />
      <path d="M7 45H173" class="faint-stroke" />
      <circle cx="18" cy="34" r="2" class="muted-fill" />
      <circle cx="25" cy="34" r="2" class="muted-fill" />
      <circle cx="32" cy="34" r="2" class="muted-fill" />
      <text x="18" y="65" class="small-code ink">def greet(name):</text>
      <text x="28" y="84" class="small-code ink">return</text>
      <rect x="69" y="71" width="92" height="19" rx="3" class="tint" />
      <text x="73" y="84" class="small-code accent">"Hi, " + name</text>
      <path d="M68 72V88" class="accent-stroke" />
      <path d="M28 103H102M28 113H82" class="code ghost-stroke" />
      <rect x="125" y="119" width="36" height="17" rx="4" class="tint" />
      <text x="133" y="131" class="key-label accent">TAB</text>
      <path d="M148 8L151 16L159 19L151 22L148 30L145 22L137 19L145 16Z" class="sparkle" />
      <path d="M167 7V15M163 11H171" class="accent-stroke" />
    </g>

    <g v-else-if="stage === 'chat'">
      <path d="M14 17H133Q140 17 140 24V54Q140 61 133 61H40L27 71V61H14Q7 61 7 54V24Q7 17 14 17Z" class="tint frame-stroke" />
      <circle cx="25" cy="38" r="7" class="surface" />
      <path d="M22 35H28M22 40H26M44 33H122M44 43H103" class="code accent-stroke" />
      <path d="M20 88V112Q20 121 28 121H35M30 117L35 121L30 125" class="ghost-stroke" />
      <rect x="39" y="82" width="134" height="69" rx="7" class="surface frame-stroke" />
      <path d="M39 103H173" class="faint-stroke" />
      <path d="M54 88L56 93L61 95L56 97L54 102L52 97L47 95L52 93Z" class="accent-fill" />
      <text x="69" y="98" class="key-label subdued">ASSISTANT</text>
      <path d="M57 115L52 120L57 125M69 115L74 120L69 125M64 113L61 127" class="accent-stroke" />
      <path d="M85 116H159M85 125H144M53 137H136" class="code muted-stroke" />
    </g>

    <g v-else-if="stage === 'agent'">
      <!-- Circular arcs meet beneath the nodes; arrows sit at the arc midpoints. -->
      <g class="loop-stroke" :marker-mid="`url(#${arrowheadId})`">
        <path v-for="node in loopNodes" :key="node.id" :d="node.arc" />
      </g>
      <path d="M90 33V61M69 94L49 105M111 94L131 105" class="faint-stroke" />
      <rect x="67" y="61" width="46" height="42" rx="12" class="tint frame-stroke" />
      <path d="M79 77L74 82L79 87M101 77L106 82L101 87M94 73L86 91" class="accent-stroke" />
      <circle cx="90" cy="57" r="2" class="accent-fill" />
      <g v-for="node in loopNodes" :key="node.id" :transform="`translate(${node.x} ${node.y})`">
        <rect x="-31" y="-13" width="62" height="26" rx="6" class="surface frame-stroke" />
        <path v-if="node.id === 'plan'" d="M-23 -5H-20M-23 0H-20M-23 5H-20M-16 -5H-10M-16 0H-10M-16 5H-12" class="accent-stroke" />
        <path v-else-if="node.id === 'execute'" d="M-23 -5L-18 0L-23 5M-14 5H-9" class="accent-stroke" />
        <g v-else>
          <circle cx="-17" cy="0" r="7" class="tint" />
          <path d="M-21 0L-18 3L-13 -3" class="accent-stroke" />
        </g>
        <text x="-2" y="4" class="node-label ink">{{ node.label }}</text>
      </g>
    </g>

    <g v-else>
      <path d="M19 11H128Q135 11 135 18V39Q135 46 128 46H83L72 54V46H19Q12 46 12 39V18Q12 11 19 11Z" class="surface frame-stroke" />
      <path d="M25 22L27 27L32 29L27 31L25 36L23 31L18 29L23 27Z" class="accent-fill" />
      <text x="44" y="33" class="wish-label ink">做一个 …</text>
      <path d="M81 57V62M81 87V96M77 92L81 97L85 92" class="ghost-stroke" />
      <path d="M81 60L85 70L96 74L85 78L81 88L77 78L66 74L77 70Z" class="sparkle" />
      <path d="M110 63V71M106 67H114M53 78V84M50 81H56" class="accent-stroke" />
      <rect x="23" y="103" width="144" height="54" rx="6" class="surface frame-stroke" />
      <path d="M23 116H167" class="faint-stroke" />
      <circle cx="32" cy="110" r="1.5" class="muted-fill" />
      <circle cx="38" cy="110" r="1.5" class="muted-fill" />
      <rect x="31" y="123" width="28" height="26" rx="3" class="tint" />
      <path d="M37 130H52M37 136H47M37 142H50" class="muted-stroke" />
      <rect x="68" y="124" width="33" height="8" rx="2" class="tint" />
      <path d="M69 141H109M69 147H98" class="code muted-stroke" />
      <path d="M121 147V139M131 147V133M141 147V126" class="chart-stroke" />
      <circle cx="159" cy="109" r="12" class="accent-fill" />
      <path d="M153 109L157 113L165 105" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  </svg>
</template>

<style scoped>
.era-illustration {
  display: block;
  width: 100%;
  height: 140px;
  overflow: visible;
  --drawing-ink: #435360;
  --drawing-muted: #aebbc5;
  --drawing-surface: #fff;
  --drawing-outline: #b8c5cc;
}

.era-illustration path {
  stroke-linecap: round;
  stroke-linejoin: round;
}

.surface { fill: var(--drawing-surface); }
.tint { fill: var(--era-tint); }
.frame-stroke { stroke: var(--drawing-outline); stroke-width: 1.15; }
.ink { fill: var(--drawing-ink); }
.subdued { fill: #8796a3; }
.accent, .accent-fill { fill: var(--era-color); }
.muted-fill { fill: var(--drawing-muted); }
.accent-stroke { stroke: var(--era-color); stroke-width: 1.6; }
.muted-stroke { stroke: var(--drawing-muted); stroke-width: 1.5; }
.faint-stroke { stroke: var(--drawing-outline); stroke-width: 0.8; }
.ghost-stroke { stroke: var(--era-color); stroke-width: 1.5; stroke-dasharray: 3 4; opacity: 0.5; }
.loop-stroke { stroke: var(--era-color); stroke-width: 1.6; }
.chart-stroke { stroke: var(--era-color); stroke-width: 6; }
.code { stroke-width: 2.5; }
.sparkle { fill: var(--era-tint); stroke: var(--era-color); stroke-width: 1.3; }
.code-text, .small-code, .key-label { font-family: 'SFMono-Regular', Consolas, monospace; }
.code-text { font-size: 11px; }
.small-code { font-size: 10px; letter-spacing: -0.5px; }
.key-label { font-size: 9px; letter-spacing: 0.6px; }
.node-label { font-size: 10px; font-weight: 500; }
.wish-label { font-size: 12px; letter-spacing: 1px; }

:global(.dark) .era-illustration {
  --drawing-ink: #dbe4ec;
  --drawing-muted: #738593;
  --drawing-surface: #202c35;
  --drawing-outline: #617581;
}

:global(.dark) .tint,
:global(.dark) .sparkle {
  fill: color-mix(in srgb, var(--era-tint) 15%, #202c35);
}
</style>
