<template>
  <section class="harness-approaches" aria-label="Kimi Code 与 DSH">
    <article class="approach kimi-approach">
      <header class="approach-heading">
        <span class="heading-mark" aria-hidden="true" />
        <h1>Kimi Code</h1>
      </header>
      <blockquote>“做自己爱用的 Coding Agent”</blockquote>

      <ul class="approach-points">
        <li>
          <h2>Agent Infra</h2>
          <p>属于 Infra 部门，而不是 Harness 部门</p>
        </li>
        <li>
          <h2>收集数据！</h2>
          <p>所以还得是一个产品</p>
        </li>
        <li>
          <h2>实验平台</h2>
          <p>“很方便地探索不同机制的效果”</p>
          <div class="service-separation">
            <div class="di-heading">
              <span class="di-label">Dependency Injection</span>
              <span class="di-caption">定义与实现分离</span>
            </div>
            <svg class="service-diagram" viewBox="0 0 420 108" fill="none" role="img" aria-labelledby="kimi-di-title kimi-di-description">
              <title id="kimi-di-title">依赖同一 Service 定义，切换注入的实现</title>
              <desc id="kimi-di-description">调用方依赖 Service 定义；实现 A 或实现 B 注入同一 Service，可以替换实现来实验不同机制。</desc>

              <rect x="1" y="36" width="91" height="36" rx="5" class="di-caller" />
              <text x="46.5" y="59" text-anchor="middle" class="di-node-label">调用方</text>
              <path d="M99 54H142M137 50L142 54L137 58" class="di-connection" />
              <text x="120" y="43" text-anchor="middle" class="di-edge-label">依赖</text>

              <rect x="151" y="28" width="108" height="52" rx="5" class="di-contract" />
              <text x="205" y="50" text-anchor="middle" class="di-contract-name">Service</text>
              <text x="205" y="68" text-anchor="middle" class="di-node-label">定义</text>

              <path d="M325 24H302Q292 24 292 34V54H267M272 50L267 54L272 58" class="di-connection" />
              <path d="M325 88H302Q292 88 292 78V54" class="di-alternative-connection" />
              <text x="279" y="43" text-anchor="middle" class="di-edge-label">注入</text>

              <rect x="330" y="7" width="89" height="34" rx="5" class="di-implementation" />
              <text x="374.5" y="29" text-anchor="middle" class="di-node-label">实现 A</text>
              <path d="M368 65V47M364 51L368 47L372 51M382 47V65M378 61L382 65L386 61" class="di-swap" />
              <rect x="330" y="71" width="89" height="34" rx="5" class="di-alternative" />
              <text x="374.5" y="93" text-anchor="middle" class="di-node-label">实现 B</text>
            </svg>
          </div>
        </li>
      </ul>
    </article>

    <article class="approach dsh-approach">
      <header class="approach-heading">
        <span class="heading-mark" aria-hidden="true" />
        <h1>DSH</h1>
      </header>
      <blockquote>Everything is a Plugin?</blockquote>

      <svg
        class="plugin-diagram"
        viewBox="0 0 360 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="dsh-plugin-paths-title dsh-plugin-paths-description"
      >
        <title id="dsh-plugin-paths-title">插件化的两条路径</title>
        <desc id="dsh-plugin-paths-description">插件化加上 HMR 热更新、进训练以改进模型能力，共同通向自进化；插件化也通向 FDE。</desc>

        <!-- Three capabilities combine; none is drawn as sufficient on its own. -->
        <g transform="translate(17 9)">
          <rect x="0" y="27" width="69" height="17" rx="4" class="plugin-hub" />
          <rect x="7" y="9" width="20" height="22" rx="3" class="plugin-module" />
          <path d="M12 18L16 21L12 24M20 24H23" class="module-code" />
          <rect x="35" y="0" width="20" height="22" rx="3" class="plugin-loose-module" />
          <path d="M41 8L45 5L49 8M41 14L45 17L49 14M45 24V33M41 29L45 33L49 29" class="plugin-connector" />
        </g>
        <text x="51" y="78" text-anchor="middle" class="plugin-label">插件化</text>

        <text x="111" y="39" text-anchor="middle" class="capability-plus">+</text>

        <g transform="translate(144 5)">
          <rect x="0" y="15" width="29" height="22" rx="4" class="plugin-option" />
          <text x="14.5" y="30" text-anchor="middle" class="version-old">v1</text>
          <rect x="44" y="15" width="29" height="22" rx="4" class="plugin-hub" />
          <text x="58.5" y="30" text-anchor="middle" class="version-new">v2</text>
          <path d="M14.5 8V2Q14.5 -2 18.5 -2H54.5Q58.5 -2 58.5 2V8M54.5 4L58.5 8L62.5 4" class="plugin-connector" />
          <path d="M58.5 44V50Q58.5 54 54.5 54H18.5Q14.5 54 14.5 50V44M10.5 48L14.5 44L18.5 48" class="plugin-connector" />
        </g>
        <text x="180" y="78" text-anchor="middle" class="plugin-label hmr-label">HMR</text>
        <text x="180" y="97" text-anchor="middle" class="plugin-caption">热更新</text>

        <text x="245" y="39" text-anchor="middle" class="capability-plus">+</text>

        <g transform="translate(276 9)">
          <path d="M0 10H13M0 18H9M0 26H13M17 18H28M24 14L28 18L24 22" class="training-input" />
          <path d="M37 5L57 15L38 31L63 42M37 5L38 31M57 15L63 42M38 31L57 15" class="plugin-connector" />
          <circle cx="37" cy="5" r="5" class="plugin-hub" />
          <circle cx="57" cy="15" r="5" class="plugin-module" />
          <circle cx="38" cy="31" r="5" class="plugin-module" />
          <circle cx="63" cy="42" r="5" class="plugin-hub" />
        </g>
        <text x="309" y="78" text-anchor="middle" class="plugin-label">进训练</text>
        <text x="309" y="97" text-anchor="middle" class="plugin-caption">改进模型能力</text>

        <path d="M51 92V118M51 118H309V108M180 118V136M176 132L180 136L184 132" class="plugin-connector" />
        <rect x="101" y="141" width="158" height="43" rx="6" class="evolution-result" />
        <g transform="translate(116 150)" class="evolution-loop">
          <path d="M4 10A10 10 0 0 1 21 6M21 1V6H16M24 15A10 10 0 0 1 7 20M7 25V20H12" />
        </g>
        <text x="195" y="169" text-anchor="middle" class="outcome-label">自进化</text>

        <!-- Both paths share the outlet below the plugin label. -->
        <path d="M51 118V235Q51 247 63 247H262M256 242L262 247L256 252" class="plugin-connector" />
        <circle cx="51" cy="118" r="2.4" class="plugin-module" />

        <g transform="translate(272 225)">
          <rect x="0" y="0" width="68" height="46" rx="4" class="plugin-option" />
          <path d="M0 11H68M7 6H9M14 6H16" class="plugin-connector" />
          <rect x="7" y="17" width="15" height="22" rx="2" class="plugin-hub" />
          <rect x="28" y="17" width="14" height="9" rx="2" class="plugin-module" />
          <rect x="47" y="17" width="14" height="9" rx="2" class="plugin-module" />
          <path d="M29 33H60M29 38H48" class="plugin-connector" />
        </g>
        <text x="306" y="293" text-anchor="middle" class="outcome-label">FDE</text>

      </svg>
    </article>
  </section>
</template>

<style scoped>
.harness-approaches {
  --approaches-paper: #fcfcfa;
  --approaches-text: #27333b;
  --approaches-muted: #75828a;
  --approaches-rule: #dde3e3;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 60px;
  width: 100%;
  height: 100%;
  padding: 36px 44px 38px;
  background: var(--approaches-paper);
  color: var(--approaches-text);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.approach {
  position: relative;
  min-width: 0;
}

.kimi-approach {
  --approach-accent: #5279a5;
  --approach-tint: #edf2f8;
}

.dsh-approach {
  --approach-accent: #398476;
  --approach-tint: #eaf3ee;
}

.dsh-approach::before {
  content: '';
  position: absolute;
  left: -30px;
  top: 7px;
  bottom: 8px;
  border-left: 1px solid var(--approaches-rule);
}

.approach-heading {
  display: flex;
  align-items: center;
  gap: 13px;
}

.heading-mark {
  width: 5px;
  height: 28px;
  border-radius: 2px;
  background: var(--approach-accent);
}

.approach-heading h1 {
  margin: 0;
  color: #526f7a;
  font-family: 'PT Serif', Georgia, serif;
  font-size: 34px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.6px;
}

.approach blockquote {
  margin: 23px 0 0;
  padding: 0 0 21px;
  border: 0;
  border-bottom: 1px solid var(--approaches-rule);
  color: var(--approach-accent);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
}

.approach-points {
  display: grid;
  gap: 15px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.approach-points li {
  margin: 0;
  padding: 0;
}

.approach-points h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
}

.approach-points p {
  margin: 5px 0 0;
  font-size: 14px;
  line-height: 1.6;
}

.service-separation {
  margin-top: 10px;
  padding-top: 9px;
  border-top: 1px solid var(--approaches-rule);
}

.di-heading { display: flex; align-items: baseline; justify-content: space-between; }

.di-label {
  color: var(--approach-accent);
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
}

.service-diagram {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 5px;
}

.di-caption { color: var(--approaches-muted); font-size: 11px; }
.di-caller { fill: var(--approaches-paper); stroke: var(--approaches-rule); stroke-width: 1; }
.di-contract { fill: var(--approach-tint); stroke: var(--approach-accent); stroke-width: 1.3; }
.di-implementation { fill: var(--approach-tint); stroke: color-mix(in srgb, var(--approach-accent) 50%, var(--approaches-paper)); stroke-width: 1; }
.di-alternative { fill: var(--approaches-paper); stroke: var(--approach-accent); stroke-width: 1; stroke-dasharray: 4 3; }
.di-node-label { fill: var(--approaches-text); font-size: 13px; }
.di-contract-name { fill: var(--approach-accent); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 13px; font-weight: 500; }
.di-edge-label { fill: var(--approaches-muted); font-size: 10px; }
.di-connection, .di-alternative-connection, .di-swap { stroke: var(--approach-accent); stroke-width: 1.3; stroke-linecap: round; stroke-linejoin: round; }
.di-alternative-connection { stroke-dasharray: 4 3; }
.di-swap { stroke-width: 1.2; }

.plugin-diagram {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 19px;
}

.plugin-connector, .training-input, .evolution-loop, .module-code {
  stroke: var(--approach-accent);
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.plugin-hub, .plugin-option {
  fill: var(--approach-tint);
  stroke: color-mix(in srgb, var(--approach-accent) 35%, var(--approaches-paper));
  stroke-width: 1;
}

.plugin-option { fill: var(--approaches-paper); }
.plugin-module { fill: var(--approach-accent); fill-opacity: 0.8; }
.plugin-loose-module { fill: var(--approaches-paper); stroke: var(--approach-accent); stroke-width: 1.5; }
.module-code { stroke: var(--approaches-paper); stroke-width: 1.1; }
.plugin-label { fill: var(--approaches-text); font-size: 15px; font-weight: 500; }
.plugin-caption { fill: var(--approaches-muted); font-size: 10.5px; }
.hmr-label { fill: var(--approach-accent); font-weight: 600; }
.capability-plus { fill: var(--approach-accent); font-size: 22px; font-weight: 400; }
.version-old, .version-new { font-family: 'SFMono-Regular', Consolas, monospace; font-size: 12px; }
.version-old { fill: var(--approaches-muted); }
.version-new { fill: var(--approach-accent); font-weight: 600; }
.training-input { stroke-width: 1.2; }
.evolution-result { fill: var(--approach-tint); }
.evolution-loop { stroke-width: 1.6; }
.outcome-label { fill: var(--approaches-text); font-size: 18px; font-weight: 600; }

:global(.dark) .harness-approaches {
  --approaches-paper: #161e24;
  --approaches-text: #e0e8ed;
  --approaches-muted: #93a4b0;
  --approaches-rule: #35424c;
}

:global(.dark) .kimi-approach {
  --approach-accent: #8dadd2;
  --approach-tint: #222f3e;
}

:global(.dark) .dsh-approach {
  --approach-accent: #83b6a9;
  --approach-tint: #20332f;
}

:global(.dark) .approach-heading h1 { color: #abc7ce; }
</style>
