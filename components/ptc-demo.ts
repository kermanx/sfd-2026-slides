// A deterministic, local demonstration. Durations serve narration, not latency comparisons.
export const DURATION = 20_000
export const CODE_START = 600
export const CODE_END = 6_300
export const EXECUTION_END = 17_200

export const python = `import json

prs = json.loads(await list_prs({"state": "open"}))
for pr in prs:
    checks = json.loads(await get_checks({"pr": pr["number"]}))
    failed = [c["name"] for c in checks
              if c["conclusion"] == "failure"]
    if failed:
        print({"pr": pr["number"], "failed": failed})`

export const samples = [
  { number: 41, checks: [{ name: 'tests', conclusion: 'success' }, { name: 'lint', conclusion: 'success' }] },
  { number: 42, checks: [{ name: 'tests', conclusion: 'success' }, { name: 'typecheck', conclusion: 'failure' }] },
  { number: 43, checks: [{ name: 'tests', conclusion: 'success' }, { name: 'lint', conclusion: 'failure' }] },
] as const

export const stages = [
  { time: 0, preview: 3_300, label: '生成调用 / 代码' },
  { time: 6_500, preview: 7_900, label: '获取数据' },
  { time: 11_200, preview: 13_400, label: '执行与筛选' },
  { time: EXECUTION_END, preview: DURATION, label: '返回模型' },
] as const

export function stream(text: string, time: number, start: number, end: number) {
  const progress = Math.max(0, Math.min(1, (time - start) / (end - start)))
  return text.slice(0, Math.floor(text.length * progress))
}

export const outputs = samples.flatMap(pr => {
  const failed = pr.checks.filter(c => c.conclusion === 'failure').map(c => c.name)
  return failed.length ? [`{'pr': ${pr.number}, 'failed': [${failed.map(name => `'${name}'`).join(', ')}]}`] : []
})

const firstCall = 'list_prs({"state": "open"})'
const batchCalls = samples.map(pr => `get_checks({"pr": ${pr.number}})`).join('\n')

export function frameAt(time: number) {
  const t = Math.max(0, Math.min(DURATION, time))
  const stage = stages.reduce((current, stage, i) => t >= stage.time ? i : current, 0)
  const generating = t >= CODE_START && t < CODE_END
  const executing = t >= 6_500 && t < EXECUTION_END
  const cycle = Math.max(0, Math.min(2, Math.floor((t - 8_200) / 3_000)))
  const cycleTime = t - (8_200 + cycle * 3_000)
  const pr = samples[cycle]
  let activeLines: number[] = []
  let runtimeStatus = '等待代码生成'
  let runtimeEvent = '代码完整生成后开始执行'
  if (t >= CODE_END && t < 6_500) runtimeStatus = '代码就绪'
  if (t >= 6_500 && t < 8_200) {
    activeLines = [3]
    runtimeStatus = '调用 list_prs'
    runtimeEvent = t < 7_800 ? '执行环境 → list_prs({"state": "open"})' : 'list_prs → #41, #42, #43'
  }
  if (t >= 8_200 && t < EXECUTION_END) {
    if (cycleTime < 1_000) {
      activeLines = [5]
      runtimeStatus = `查询 #${pr.number}`
      runtimeEvent = `执行环境 → get_checks({"pr": ${pr.number}})`
    } else if (cycleTime < 1_600) {
      activeLines = [6, 7]
      runtimeStatus = `筛选 #${pr.number}`
      runtimeEvent = `#${pr.number} → ${pr.checks.map(c => `${c.name}: ${c.conclusion}`).join(' · ')}`
    } else if (cycle === 0) {
      activeLines = [8]
      runtimeStatus = '#41 无失败项'
      runtimeEvent = 'failed = [] → 继续下一次循环'
    } else {
      activeLines = [9]
      runtimeStatus = `输出 #${pr.number}`
      runtimeEvent = 'print(...) → stdout；此时尚未返回模型'
    }
  }
  if (t >= EXECUTION_END) {
    runtimeStatus = '执行结束'
    runtimeEvent = 'stdout → 模型上下文'
  }
  return {
    time: t, stage, generating, executing, activeLines, runtimeStatus, runtimeEvent,
    code: stream(python, t, CODE_START, CODE_END),
    firstCall: stream(firstCall, t, 600, 2_100),
    hasPrList: t >= 7_800,
    batchCalls: stream(batchCalls, t, 8_000, 10_800),
    directResults: samples.map((_, i) => t >= 11_300 + i * 700),
    localOutput: [stream(outputs[0], t, 12_800, 13_800), stream(outputs[1], t, 15_800, 16_800)],
    modelOutput: stream(outputs.join('\n'), t, 17_400, 18_700),
    finalAnswer: stream('#42 · typecheck；#43 · lint', t, 17_400, 19_200),
    complete: t >= DURATION,
  }
}

export function tokenize(line: string) {
  return line.split(/("[^"]*"|\b(?:import|for|in|if|await)\b|\b(?:list_prs|get_checks|print)\b)/g)
    .filter(Boolean)
    .map(text => ({ text, kind: text.startsWith('"') ? 'string' : /^(import|for|in|if|await)$/.test(text) ? 'keyword' : /^(list_prs|get_checks|print)$/.test(text) ? 'function' : 'plain' }))
}
let offset = 0
export const codeLines = python.split('\n').map((line, index) => {
  const start = offset
  offset += line.length + 1
  let tokenOffset = start
  const tokens = tokenize(line).map(token => {
    const tokenStart = tokenOffset
    tokenOffset += token.text.length
    return { ...token, start: tokenStart }
  })
  return { number: index + 1, text: line, start, tokens }
})
