<template>
  <svg class="rlm-overview" viewBox="0 0 426 350" role="img" aria-labelledby="rlm-overview-title rlm-overview-description">
    <title id="rlm-overview-title">RLM 如何检查仓库中缺少鉴权的接口</title>
    <desc id="rlm-overview-description">示意例子：仓库代码存入 Python REPL 的 context 变量，不直接塞进主模型。主模型写代码按模块切分，将鉴权检查问题和用户模块、订单模块的代码分别送给两个 depth 1 的 RLM。它们分别返回 /users 和 /orders，结果回到执行环境，最后汇总缺少鉴权的接口。</desc>

    <rect class="rlm-boundary" x="1" y="9" width="270" height="288" rx="4" />
    <rect class="depth-tab" x="12" y="0.5" width="105" height="21" rx="2" />
    <text class="depth-label" x="20" y="15">RLM · depth 0</text>

    <text class="question-label" x="15" y="46">q：哪些接口没鉴权？</text>
    <path class="call-path" d="M130 43H151M147 39L151 43L147 47" />
    <rect class="model-box" x="154" y="28" width="100" height="30" rx="3" />
    <text class="model-label" x="204" y="48">LM</text>

    <rect class="runtime-box" x="11" y="94" width="250" height="192" rx="3" />
    <text class="runtime-label" x="22" y="109">Python REPL</text>

    <path class="blocked-path" d="M165 117V60M161 66L165 60L169 66" />
    <path class="blocked-cross" d="M159 76L171 88M171 76L159 88" />
    <path class="call-path" d="M213 58V185M209 179L213 185L217 179" />
    <path class="result-path" d="M244 185V58M240 64L244 58L248 64" />
    <text class="flow-label" x="204" y="84" text-anchor="end">代码</text>
    <text class="flow-label result-label" x="250" y="84">输出</text>

    <rect class="context-box" x="22" y="117" width="164" height="48" rx="3" />
    <text class="context-label" x="31" y="136"><tspan class="mono">context</tspan> = 仓库代码</text>
    <text class="module-label" x="31" y="155">用户模块 · 订单模块 · …</text>
    <path class="call-path" d="M104 165V185M100 179L104 185L108 179" />
    <text class="flow-label" x="91" y="180" text-anchor="end">切分</text>

    <rect class="code-box" x="22" y="186" width="228" height="89" rx="3" />
    <text class="code-line" x="31" y="204">parts = context.split(...)</text>
    <text class="code-line" x="31" y="224">a = llm_query(q + parts[0])</text>
    <text class="code-line" x="31" y="244">b = llm_query(q + parts[1])</text>
    <text class="code-line" x="31" y="265">print(a, b)</text>

    <path class="call-path" d="M250 216L306 156M300 158L306 156L305 162" />
    <path class="result-path" d="M306 206L250 232M256 232L250 232L253 226" />
    <path class="call-path" d="M250 239L306 274M300 273L306 274L304 268" />
    <path class="result-path" d="M306 324L250 256M251 262L250 256L256 258" />

    <g transform="translate(307 120)">
      <rect class="rlm-boundary" width="118" height="102" rx="4" />
      <rect class="depth-tab" x="9" y="-9" width="101" height="19" rx="2" />
      <text class="child-depth" x="59" y="5">RLM · depth 1</text>
      <rect class="context-box" x="8" y="20" width="102" height="34" rx="2" />
      <text class="child-prompt" x="59" y="34">用户模块代码</text>
      <text class="child-prompt" x="59" y="48">哪些接口没鉴权？</text>
      <path class="call-path" d="M59 54V65M55 60L59 65L63 60" />
      <rect class="model-box" x="8" y="66" width="102" height="20" rx="2" />
      <text class="child-model" x="59" y="80">LM</text>
      <text class="child-answer" x="59" y="98">返回：/users</text>
    </g>

    <g transform="translate(307 238)">
      <rect class="rlm-boundary" width="118" height="102" rx="4" />
      <rect class="depth-tab" x="9" y="-9" width="101" height="19" rx="2" />
      <text class="child-depth" x="59" y="5">RLM · depth 1</text>
      <rect class="context-box" x="8" y="20" width="102" height="34" rx="2" />
      <text class="child-prompt" x="59" y="34">订单模块代码</text>
      <text class="child-prompt" x="59" y="48">哪些接口没鉴权？</text>
      <path class="call-path" d="M59 54V65M55 60L59 65L63 60" />
      <rect class="model-box" x="8" y="66" width="102" height="20" rx="2" />
      <text class="child-model" x="59" y="80">LM</text>
      <text class="child-answer" x="59" y="98">返回：/orders</text>
    </g>

    <path class="result-path" d="M136 297V317M132 311L136 317L140 311" />
    <rect class="answer-box" x="1" y="318" width="270" height="30" rx="3" />
    <text class="final-answer" x="136" y="338">缺少鉴权：/users、/orders</text>
  </svg>
</template>

<style scoped>
.rlm-overview {
  --rlm-paper: #fbf6e9;
  --rlm-border: #b4975a;
  --rlm-runtime: #edf4ed;
  --rlm-model: #eaf1fa;
  --rlm-model-border: #a3b7d0;
  --rlm-blocked: #be6b60;
  display: block;
  width: 100%;
  height: 350px;
  overflow: visible;
}
.rlm-boundary,
.depth-tab { fill: var(--rlm-paper); stroke: var(--rlm-border); stroke-width: 1; }
.depth-label { fill: var(--extension-text); font-size: 12px; font-weight: 500; }
.child-depth { fill: var(--extension-text); font-size: 11px; font-weight: 500; text-anchor: middle; }
.question-label { fill: var(--extension-text); font-size: 11.5px; }
.model-box { fill: var(--rlm-model); stroke: var(--rlm-model-border); stroke-width: 1; }
.model-label { fill: var(--extension-text); font-size: 14px; font-weight: 600; text-anchor: middle; }
.runtime-box { fill: var(--rlm-runtime); stroke: var(--extension-green); stroke-width: 1; }
.runtime-label { fill: var(--extension-green); font-size: 12px; }
.context-box,
.code-box { fill: var(--slide-paper); stroke: var(--extension-rule); stroke-width: 1; }
.context-label { fill: var(--extension-text); font-size: 11.5px; }
.module-label { fill: var(--extension-muted); font-size: 11px; }
.mono,
.code-line { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; }
.code-line { fill: var(--extension-text); font-size: 11.3px; }
.call-path,
.result-path,
.blocked-path { fill: none; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
.call-path { stroke: var(--extension-muted); }
.result-path { stroke: var(--extension-green); }
.blocked-path { stroke: var(--rlm-blocked); stroke-dasharray: 3 3; }
.blocked-cross { fill: none; stroke: var(--rlm-blocked); stroke-width: 2.5; stroke-linecap: round; }
.flow-label { fill: var(--extension-muted); font-size: 10px; }
.result-label { fill: var(--extension-green); }
.child-prompt { fill: var(--extension-text); font-size: 11px; text-anchor: middle; }
.child-model { fill: var(--extension-text); font-size: 12px; font-weight: 500; text-anchor: middle; }
.child-answer { fill: var(--extension-green); font-size: 11px; text-anchor: middle; }
.answer-box { fill: var(--rlm-runtime); stroke: var(--extension-rule); stroke-width: 1; }
.final-answer { fill: var(--extension-green); font-size: 12px; text-anchor: middle; }
:global(.dark) .rlm-overview { --rlm-paper: #302c22; --rlm-border: #a38a56; --rlm-runtime: #21332d; --rlm-model: #253547; --rlm-model-border: #6985a8; --rlm-blocked: #dc8e82; }
</style>
