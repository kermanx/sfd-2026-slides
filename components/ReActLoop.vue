<template>
  <div class="react-loop" role="img" aria-label="ReACT Loop：思考，行动，观察；观察结果回到下一轮思考。">
    <svg class="react-paths" viewBox="0 0 892 302" fill="none" aria-hidden="true">
      <path class="forward-path" d="M232 97H378M371 91L378 97L371 103M514 97H660M653 91L660 97L653 103" />
      <path class="feedback-path" d="M728 161V249Q728 265 712 265H180Q164 265 164 249V161M158 168L164 161L170 168" />
    </svg>
    <div class="react-step reason-step"><strong>思考</strong><span>Reason</span></div>
    <div class="react-step action-step"><strong>行动</strong><span>Act</span></div>
    <div class="react-step observation-step"><strong>观察</strong><span>Observe</span></div>
    <div class="react-caption"><slot /></div>
  </div>
</template>

<style scoped>
.react-loop { position: relative; width: 100%; height: 302px; }
.react-paths { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.react-paths path { stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.forward-path { color: var(--loop-muted); }
.feedback-path { color: var(--loop-observation); }
.react-step { position: absolute; top: 73px; width: 164px; text-align: center; }
.react-step strong { display: block; font-size: 32px; font-weight: 500; line-height: 1.3; }
.react-step span { display: block; margin-top: 8px; color: var(--loop-muted); font-size: 15px; line-height: 1.4; }
.reason-step { left: 82px; color: var(--loop-model); }
.action-step { left: 364px; color: var(--loop-action); }
.observation-step { left: 646px; color: var(--loop-observation); }
.react-caption { position: absolute; top: 172px; right: 0; left: 0; color: var(--loop-text); font-size: 27px; font-weight: 500; line-height: 1.4; letter-spacing: -0.4px; text-align: center; }
.react-caption :deep(h2) { margin: 0; font-size: inherit; font-weight: inherit; line-height: inherit; }
</style>
