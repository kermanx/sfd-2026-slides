<script setup lang="ts">
defineProps<{ kind: 'prompt' | 'example' | 'burden' | 'pattern' | 'feeling' }>()
</script>

<template>
  <svg
    class="psychology-illustration"
    viewBox="0 0 240 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- A spoken instruction, with one clear silhouette. -->
    <g v-if="kind === 'prompt'">
      <path d="M54 19H186A16 16 0 0 1 202 35V73A16 16 0 0 1 186 89H94L71 106V89H54A16 16 0 0 1 38 73V35A16 16 0 0 1 54 19Z" class="psych-tint" />
      <text x="120" y="64" text-anchor="middle" class="psych-instruction">你是……</text>
    </g>

    <!-- A round shape pushed against a square template. -->
    <g v-else-if="kind === 'example'">
      <rect x="136" y="23" width="76" height="76" rx="3" class="psych-tint" />
      <rect x="147" y="34" width="54" height="54" rx="1" class="psych-paper" />
      <circle cx="124" cy="61" r="32" class="psych-accent" />
      <path d="M30 61H73M62 50L73 61L62 72" class="psych-stroke" />
    </g>

    <!-- Added weight on a lever; the effect remains a question. -->
    <g v-else-if="kind === 'burden'">
      <path d="M104 101L120 73L136 101Z" class="psych-tint" />
      <path d="M41 79L201 62" class="psych-stroke" />
      <g transform="rotate(-6 120 70)">
        <rect x="53" y="52" width="45" height="17" rx="3" class="psych-accent" />
        <rect x="61" y="31" width="34" height="17" rx="3" class="psych-tint" />
        <rect x="65" y="10" width="26" height="17" rx="3" class="psych-tint" />
      </g>
      <text x="177" y="53" text-anchor="middle" class="psych-question">?</text>
    </g>

    <!-- The repeated opening is the illustration itself. -->
    <g v-else-if="kind === 'pattern'" class="psych-pattern">
      <text x="39" y="29" class="psych-echo">We need…</text>
      <text x="39" y="67">We need…</text>
      <text x="39" y="105" class="psych-echo">We need…</text>
    </g>

    <!-- The concrete dish from the accompanying example. -->
    <g v-else>
      <ellipse cx="120" cy="71" rx="86" ry="34" class="psych-tint" />
      <ellipse cx="120" cy="67" rx="73" ry="27" class="psych-paper" />
      <path d="M68 63C63 51 79 43 91 47C98 37 116 41 119 51C134 45 149 49 148 61C153 73 137 77 123 73C111 85 93 77 93 71C79 78 70 72 68 63Z" class="psych-egg" />
      <path d="M79 54L105 43C112 59 97 70 79 54Z" class="psych-tomato" />
      <path d="M134 54L158 45C166 63 149 73 134 54Z" class="psych-tomato" />
      <path d="M119 72L143 64C149 80 131 88 119 72Z" class="psych-tomato" />
      <path d="M151 70C148 65 155 59 163 62C174 60 178 69 169 73C166 81 153 79 151 70Z" class="psych-egg" />
    </g>
  </svg>
</template>

<style scoped>
.psychology-illustration {
  --psych-paper: var(--discussion-paper, #fcfcfa);
  --psych-egg: #e5ba63;
  --psych-tomato: #c96d59;
  display: block;
  width: 100%;
}

.psych-tint { fill: var(--topic-tint); }
.psych-paper { fill: var(--psych-paper); }
.psych-accent { fill: var(--topic-color); }
.psych-stroke {
  stroke: var(--topic-color);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.psych-instruction {
  fill: var(--topic-color);
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 1px;
}

.psych-question {
  fill: var(--topic-color);
  font-family: 'PT Serif', Georgia, serif;
  font-size: 42px;
}

.psych-pattern {
  fill: var(--topic-color);
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 29px;
  letter-spacing: -1px;
}

.psych-echo { opacity: 0.24; }
.psych-egg { fill: var(--psych-egg); }
.psych-tomato { fill: var(--psych-tomato); }

:global(.dark) .psychology-illustration {
  --psych-egg: #c7a25d;
  --psych-tomato: #be796b;
}
</style>
