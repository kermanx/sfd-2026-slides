<template>
  <section class="vibe-coding content-slide" aria-labelledby="vibe-coding-title">
    <header class="vibe-heading">
      <h1 id="vibe-coding-title">Vibe Coding</h1>
      <span class="human-in-loop">Human in the Loop</span>
    </header>

    <div class="vibe-introduction">
      <p>激进一点：不需要手写任何一段逻辑</p>
      <p>现阶段人的作用是 <strong>code review</strong> 和 <strong>纠偏</strong>。这要求：</p>
    </div>

    <ol class="review-requirements">
      <li class="architecture-requirement">
        <div class="requirement-heading">
          <span class="requirement-number" aria-hidden="true">01</span>
        </div>
        <p>对整个架构，尤其是<strong>预期中的架构</strong>非常清楚和敏感，能够迅速发现 AI 代码中设计不良的部分；</p>
      </li>
      <li class="capability-requirement">
        <div class="requirement-heading">
          <span class="requirement-number" aria-hidden="true">02</span>
        </div>
        <p>理解<strong>模型的能力边界</strong>，知道哪些任务模型几乎一定不会做错，不必再花时间逐项检查。</p>
      </li>
    </ol>

    <p class="changing-judgment">这些判断会随着模型的进化而不断改变，半年就可能出现较大变化。</p>

    <ul class="automation-questions">
      <li>离全自动化有多远？</li>
      <ul>
        <li>我们的 review 能力正在被蒸馏</li>
      </ul>
    </ul>
  </section>
</template>

<style scoped>
.vibe-coding {
  --vibe-paper: #fcfcfa;
  --vibe-text: #27333b;
  --vibe-muted: #75828a;
  --vibe-rule: #dde3e3;
  --vibe-green: #398476;
  width: 100%;
  height: 100%;
  padding-bottom: 34px;
  color: var(--vibe-text);
  background: var(--vibe-paper);
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.vibe-heading { display: flex; align-items: center; justify-content: space-between; }
.human-in-loop { display: inline-flex; align-items: center; gap: 9px; padding: 6px 12px; border: 1px solid var(--vibe-rule); border-radius: 5px; color: var(--vibe-green); font-size: 13px; line-height: 1.5; }
.human-in-loop::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

.vibe-introduction { margin-top: 23px; }
.vibe-introduction p { margin: 0; font-size: 16px; line-height: 1.7; }
.vibe-introduction p + p { margin-top: 6px; }
.vibe-introduction strong { color: var(--vibe-green); font-weight: 600; }

.review-requirements { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0 0; padding: 0; list-style: none; }
.review-requirements li { margin: 0; padding: 19px 22px 20px; border-top: 2px solid var(--requirement-accent); background: var(--requirement-tint); }
.architecture-requirement { --requirement-accent: #5279a5; --requirement-tint: #edf2f8; }
.capability-requirement { --requirement-accent: #398476; --requirement-tint: #eaf3ee; }
.requirement-heading { display: flex; align-items: center; gap: 13px; }
.requirement-number { color: var(--requirement-accent); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 23px; line-height: 1.4; font-weight: 400; }
.review-requirements p { margin: 13px 0 0; font-size: 15px; line-height: 1.85; }
.review-requirements strong { color: var(--requirement-accent); font-weight: 600; }

.changing-judgment { margin: 19px 0 0; color: var(--vibe-muted); font-size: 14px; line-height: 1.7; }
.changing-judgment strong { color: var(--vibe-text); font-weight: 500; }
.automation-questions { margin: 25px 0 0; padding-left: 22px; list-style: disc; font-size: 16px; line-height: 1.7; }
.automation-questions li { margin: 5px 0 0; padding: 0; }

:global(.dark) .vibe-coding { --vibe-paper: #161e24; --vibe-text: #e0e8ed; --vibe-muted: #93a4b0; --vibe-rule: #35424c; --vibe-green: #83b6a9; }
:global(.dark) .architecture-requirement { --requirement-accent: #8dadd2; --requirement-tint: #222f3e; }
:global(.dark) .capability-requirement { --requirement-accent: #83b6a9; --requirement-tint: #20332f; }
</style>
