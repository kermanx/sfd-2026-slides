<template>
  <section class="vibe-coding content-slide" aria-labelledby="vibe-coding-title">
    <header class="vibe-heading">
      <h1 id="vibe-coding-title">Vibe Coding</h1>
    </header>

    <div class="vibe-introduction">
      <p>激进一点：不手写任何一段逻辑</p>
      <p>现阶段人的作用：<strong>code review</strong> 与 <strong>纠偏</strong></p>
    </div>

    <div class="review-requirements">
      <section class="architecture-requirement">
        <h2>预期架构</h2>
        <p>实现有没有偏离设计？</p>
      </section>
      <section class="capability-requirement">
        <h2>模型边界</h2>
        <p>哪些部分还需要 review？</p>
      </section>
    </div>

    <p class="changing-judgment">模型的能力边界，半年就可能大变。</p>

    <div class="automation-questions">
      <p>离全自动化有多远？</p>
      <p>我们的 review 能力正在被蒸馏</p>
    </div>
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

.vibe-introduction { margin-top: 23px; }
.vibe-introduction p { margin: 0; font-size: 16px; line-height: 1.7; }
.vibe-introduction p + p { margin-top: 6px; }
.vibe-introduction strong { color: var(--vibe-green); font-weight: 600; }

.review-requirements { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0 0; }
.review-requirements > section { padding: 19px 22px 20px; border-top: 2px solid var(--requirement-accent); background: var(--requirement-tint); }
.architecture-requirement { --requirement-accent: #5279a5; --requirement-tint: #edf2f8; }
.capability-requirement { --requirement-accent: #398476; --requirement-tint: #eaf3ee; }
.review-requirements h2 { margin: 0; color: var(--requirement-accent); font-size: 22px; font-weight: 600; line-height: 1.4; }
.review-requirements p { margin: 10px 0 0; font-size: 18px; line-height: 1.65; }

.changing-judgment { margin: 24px 0 0; color: var(--vibe-muted); font-size: 14px; line-height: 1.7; }
.automation-questions { margin-top: 32px; font-size: 18px; line-height: 1.7; }
.automation-questions p { margin: 0; }
.automation-questions p + p { margin-top: 8px; }

:global(.dark) .vibe-coding { --vibe-paper: #161e24; --vibe-text: #e0e8ed; --vibe-muted: #93a4b0; --vibe-rule: #35424c; --vibe-green: #83b6a9; }
:global(.dark) .architecture-requirement { --requirement-accent: #8dadd2; --requirement-tint: #222f3e; }
:global(.dark) .capability-requirement { --requirement-accent: #83b6a9; --requirement-tint: #20332f; }
</style>
