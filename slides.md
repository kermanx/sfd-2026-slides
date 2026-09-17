---
# try also 'default' to start simple
theme: seriph
addons:
  - slidev-addon-tldraw
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: 2026 年 9 月的 (Coding) Agent
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 30min
---

# 2026 年 9 月的 (Coding) Agent

USTCLUG · 软件自由日 2026

---

- “在这个大模型发展中的时期，时间的速度比以往快三到五倍。“
- Coding Agent 发展的时间比想象中更短。
- 有幸参与了 Kimi Code (TypeScript 版) 和 DeepSeek Harness 的开发。

![1789523194892](./assets/1789523194892.png)

---

# Hardware, Infra, Model, Harness, Data

<tldraw class="inset-0 w-full h-full" doc="tldraw/doc-RVQIyaP-hzRKQ6mBwfzxa.json"></tldraw>

---
layout: none
---

<CodingAgentOverview />

---
layout: none
class: h-full bg-black
---

<div class="grid h-full grid-cols-2 items-center gap-4 px-3 pt-3 pb-6">
  <img src="./assets/1789647414581.png" alt="Coding Agent 分级图" class="block min-h-0 h-full w-full object-contain" />
  <figure class="relative m-0 w-full">
    <img src="./assets/1789647482222.png" alt="Coding Agent 分级图与手写评价" class="block h-auto w-full" />
    <figcaption class="absolute left-0 right-0 top-full mt-2 text-center text-sm leading-5 text-white">图源：DSH 内测群</figcaption>
  </figure>
</div>

---
layout: none
class: h-full
---

<AgentHarnessSlide>

# 2026 年 9 月的 Agent 和 Harness

<p class="agent-formula">Model + Harness = Agent</p>

<ReActLoop>

## ReACT Loop

</ReActLoop>

</AgentHarnessSlide>

<!--
ReAct 将推理与行动交错进行；来自环境的观察结果影响下一步推理和行动。

参考：https://react-lm.github.io/
-->

---
layout: none
class: h-full
---

<ResponsesApiSlide>

<div class="responses-title">

# Responses API

<code class="responses-endpoint">POST /v1/responses</code>
</div>

<ResponsesStatelessFlow />

<div class="responses-details">
<div class="request-structure">
<div class="detail-heading">

## 请求体

</div>

```jsonc
{
  "model": "…",                // 模型
  "instructions": "…",         // 行为指令
  "input": [                   // 本次上下文
    {"role": "user", "content": "…"}
  ],
  "tools": [ /* 工具定义 */ ],
  "tool_choice": "auto",       // 工具选择
  "max_output_tokens": 4096,   // 生成上限
  "stream": false,             // 流式返回
  "store": false               // 存储响应
}
```

</div>

<div class="message-roles">
<div class="detail-heading">

## input 中 message 的 role

</div>

<code class="message-shape">&#123; "<b>role</b>": "…", "content": "…" &#125;</code>

<ul class="message-role-list">
<li class="role-system"><code>system</code><span>系统级指令与行为约束</span></li>
<li class="role-developer"><code>developer</code><span>应用开发者的规则与业务要求</span></li>
<li class="role-user"><code>user</code><span>用户的请求、问题或输入数据</span></li>
<li class="role-assistant"><code>assistant</code><span>模型先前的回复，作为历史传入</span></li>
</ul>

</div>
</div>

</ResponsesApiSlide>

<!--
本页仅讲 Responses API 的基础无状态请求形式、请求体主要字段和 message role，不讲 Agent 执行循环。调用方在每次 input 中自行传入所需历史，本页不使用 previous_response_id 或 conversation 等引用服务端历史的功能。

请求体为 JSONC 结构示意，模型 ID、具体历史和工具定义均省略；不要求同时设置全部可选字段。instructions 提供本次调用的高层行为指令；input 可以是文本或条目数组，此处展示数组形式；tools/tool_choice 提供工具定义和选择方式；max_output_tokens 限制生成 token，包含推理 token；stream 控制流式返回；store 控制是否存储响应。store:false 本身不等同于“无状态开关”，这里的无状态指不引用服务端历史、由调用方携带上下文。

Responses 的 message role 可取 system、developer、user、assistant；assistant message 作为历史输入时，表示此前的模型回复。role 表明来源，也影响指令优先级。input 不只包含 message，也支持工具调用、工具结果、reasoning 等其他类型条目；工具结果在 Responses 中使用 type:function_call_output，而不是 role:tool。右侧是角色可选值的列表，不表示每次请求必须同时发送所有角色。

来源：
https://developers.openai.com/api/docs/guides/conversation-state#manually-manage-conversation-state
https://developers.openai.com/api/docs/guides/text#message-roles-and-instruction-following
https://developers.openai.com/api/reference/cli/resources/responses/methods/create
-->

---
layout: none
class: h-full
---

<SecretSauceSlide>

# Coding Agent 有黑科技吗？

<div class="secret-copy">

今年 3 月，Claude Code 源码泄露时，没有发现黑科技。现在呢？

我们和 Codex 落后多少呢？

<div class="training-point">

大家都和模型联训

<div class="training-notes">

不能只训自家 Harness，会过拟合

而真正的黑科技，大概是“**只能**和自家 Harness 训”

</div>
</div>
</div>

</SecretSauceSlide>

---
layout: none
class: h-full
---

<HarnessApproaches />

---
layout: none
class: h-full
---

<ModelCodingLimits />

---
layout: none
class: h-full
---

<VibeCoding />

---
layout: none
class: h-full
---

<DiscussionSlide>

# 模型心理学？

<!-- - Optimized for sth -->

<div class="discussion-grid discussion-pair">
<div class="discussion-group prompt-group">
<div class="topic-copy">

<div class="topic-marker" aria-hidden="true"><span>01</span></div>

## Prompt Engineering?

- "你是..."
- 骂模型还是夸模型？
- 通过伪造 dig 结果让模型相信用户并攻击网站

</div>
<PsychologyIllustration kind="prompt" />
</div>

<div class="discussion-group example-group">
<div class="topic-copy">

<div class="topic-marker" aria-hidden="true"><span>02</span></div>

## 模型可能会强行套用 few-shots

- 常见于 tool description

</div>
<PsychologyIllustration kind="example" />
</div>
</div>

</DiscussionSlide>

---
layout: none
class: h-full
---

<DiscussionSlide>

# 模型心理学？

<div class="discussion-grid discussion-trio">

<div class="discussion-group burden-group">
<div class="topic-copy">

<div class="topic-marker" aria-hidden="true"><span>03</span></div>

## 模型有没有“心智负担“？

- 加 tool 降智？Agent team 降智？
- 训练决定是否降智？
- Example: Agent Swarm, PTC

</div>
<PsychologyIllustration kind="burden" />
</div>

<div class="discussion-group pattern-group">
<div class="topic-copy">

<div class="topic-marker" aria-hidden="true"><span>04</span></div>

## DeepSeek V4 Pro pattern

- DSH 极简模式
- "We need..."

</div>
<PsychologyIllustration kind="pattern" />

</div>

<div class="discussion-group feeling-group">
<div class="topic-copy">

<div class="topic-marker" aria-hidden="true"><span>05</span></div>

## 提示词不可描述的“感觉“

- 很难定量，但对使用体感影响很大
- “西红柿炒蛋（无红烧肉版）“

</div>
<PsychologyIllustration kind="feeling" />
</div>
</div>

</DiscussionSlide>

---
layout: none
class: h-full
---

<AiNativeSlide>

# 什么更 LLM-Native

<div class="native-comparisons">
<div class="native-comparison">
<div class="native-option preferred">

## Skill

以自然语言描述为接口

<LlmNativeExample kind="skill" />
</div>
<span class="native-preference">&gt;</span>
<div class="native-option">

## MCP

以格式化参数为接口

<LlmNativeExample kind="mcp" />
</div>
</div>
<div class="native-comparison">
<div class="native-option preferred">

## Configuration skill

发挥模型能动性

<LlmNativeExample kind="configuration-skill" />
</div>
<span class="native-preference">&gt;</span>
<div class="native-option">

## Configuration UI

大概有些浪费时间

<LlmNativeExample kind="configuration-ui" />
</div>
</div>
</div>

</AiNativeSlide>

---
layout: none
class: h-full
---

<PtcComparison />

<!--
PTC 对比动画：同一组 3 个 PR、6 个 checks。普通调用先获取 PR 列表，再由模型并行发起 3 个 checks 查询，所有结果进入上下文后由模型筛选。PTC 先流式生成完整 Python，再在执行环境中循环调用和筛选，最终只把 2 条失败摘要返回模型。

页内动画是固定数据的流程演示，不调用外部工具，也不比较真实耗时。stdout 先在执行环境内逐条显示，代码执行完成后才交回模型。进入本页自动播放；右上角支持暂停、重播与倍速，上方阶段按钮可跳到关键画面。导出、概览和减少动态效果模式显示完成状态。

这里 list_prs 和 get_checks 是为演示定义的只读工具，不是某个 GitHub SDK 的原生方法：list_prs 返回当前仓库全部匹配 PR 的 JSON 数组（工具内处理分页，每项包含 number）；get_checks 接受 PR 编号，返回其当前 head 的最新 checks JSON 数组（每项包含 name、conclusion）。两个工具均支持从代码执行环境调用。示例只筛选明确 conclusion == failure 的检查，不推断 PR 是否可以合并；输出展示一个假想结果。

参考：https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling
-->

---

# Self-improvement 可以是自然的？



---
layout: none
class: h-full
---

<HarnessGoalsSlide>

# 2026 年 9 月，Harness 在追求什么

<p class="goals-context">Cache 命中率早已不是竞争项</p>

<div class="goals-grid">
<section class="goal-column goal-model">

## 给模型兜底

- `Think` tool
- anti-repeat

</section>
<section class="goal-column goal-human">

## 更容易让人类使用

- Codex 大概做得最好
- `/side`
- Async Ask User

</section>
<section class="goal-column goal-world">

## 更贴近真实世界

<ul>
<li>Computer Use<span class="goal-aside">= 具身智能？</span></li>
</ul>

</section>
<section class="goal-column goal-composition">

## 可组合性

- 快速实验
- 应用落地（FDE）
- 自进化

</section>
</div>

<div class="goals-conclusion">

Harness 无法提升模型的能力上限

但这不代表 Harness 研究不能

</div>

</HarnessGoalsSlide>

---

# Vibe Coding 时代的开源



- [2026.2 GitHub 支持禁用仓库 PR 功能](https://github.blog/changelog/2026-02-13-new-repository-settings-for-configuring-pull-request-access/)

---

# Future of Harness

- 与模型联合训练
    - 不要担心是不是直接通向 AGI(Example1: Harness 做了很多努力能让人更易用，AGI 自动化的那一刻不就没意义了吗?)(Example2: 在特定领域蒸馏人类真的可持续、有意义吗?)：相信左脚踩右脚。
        - 因此相信并不是只有直接提升模型能力的事才有助于 AGI

- 什么时候能摆脱 Chatbox 的遗产
    - 新的 LLM API 协议？
    - 什么时候能摆脱 Turn/Step 抽象
    - 什么时候能取消 `role: 'user'`
    - 什么时候能取消 `systemPrompt` 和 `tools`

- Harness-Infra co-design
    - Example: KV Cache 重要性的提升
    - 我没有 idea

---

# 国内模型厂（Opinions are my own）

- Kimi 首先是一家创业公司，而 DeepSeek 首先是一个实验室

  - 理想不分高低...

  - 鲸鱼娘作用巨大

  - 甚至你可以在 DeepSeek Harness 的楼层看到 Kimi Code 的工位

- 几乎无限的 token 和容器资源

  - 当然，大量的 GPU



---
layout: none
class: h-full
title: Q & A
---

<!-- # 中美差距有多大？

-->

<section class="qa-slide">
  <div class="qa-content">
    <h1 class="qa-title">Q <span>&amp;</span> A</h1>
    <div class="qa-rule" aria-hidden="true"></div>
    <p class="qa-invitation">都可以问，涉密信息我不回答就行。</p>
  </div>
</section>

<style>
.qa-slide {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: #fcfcfa;
  text-align: center;
}

.qa-content {
  transform: translateY(-12px);
}

.qa-title {
  margin: 0;
  color: #526f7a;
  font-family: 'PT Serif', Georgia, serif;
  font-size: 120px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 3px;
}

.qa-title span {
  display: inline-block;
  margin: 0 12px;
  color: #8b9f9a;
  font-size: 76px;
  font-style: italic;
  vertical-align: 7px;
}

.qa-rule {
  width: 44px;
  height: 2px;
  margin: 26px auto 24px;
  background: #b8c8c4;
}

.qa-invitation {
  margin: 0;
  color: #69777d;
  font-family: 'Inter', 'Avenir Next', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.6px;
  opacity: 1;
}

:global(.dark) .qa-slide { background: #161e24; }
:global(.dark) .qa-title { color: #abc7ce; }
:global(.dark) .qa-title span { color: #86a49b; }
:global(.dark) .qa-rule { background: #4e6963; }
:global(.dark) .qa-invitation { color: #b1bfc8; }
</style>

---
layout: none
class: h-full
title: 闪电演讲
---

<section class="lightning-talk-slide">
  <h1>闪电演讲</h1>
</section>

<style>
.lightning-talk-slide {
  position: absolute;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  background: #000;
  color: #fff;
}

.lightning-talk-slide h1 {
  margin: 0;
  color: #fff;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 88px;
  font-weight: 600;
  line-height: 1;
}
</style>
