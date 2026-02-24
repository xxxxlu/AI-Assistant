---
owner: Boss
last_reviewed: 2026-02-24
review_cycle_days: 30
status: active
---

# 记忆分层模型（L1/L2/L3）

## 目标

让第二大脑在检索时有明确优先级，减少信息污染和重复决策。

## L1：规则与稳定知识（最高优先级）

- 路由与规则：`/router`、`/rules/`
- 稳定记忆：`/memory/project/`、`/memory/preferences/`、`/memory/decisions/`
- 开发规范：`/dev/skills/` 与已评审模板

特点：可追溯、变化慢、可作为执行基线。

## L2：运行经验层（中优先级）

- 碎片经验：`/snippets/`
- 复盘沉淀：`/retrospectives/`

特点：变化快、上下文强，用于补齐近期经验。

## L3：外部知识层（最低优先级）

- 世界知识：`/world/`
- 外部技能补充：`https://skillsmp.com/zh`

特点：仅在本地不足时使用，且必须标注来源。

## 检索顺序

1. 先查 L1。
2. 再查 L2。
3. 最后才查 L3。

## 冲突处理

1. L1 与 L2 冲突：以 L1 为准。
2. L2 与 L3 冲突：以 L2 为准。
3. 无法判断时：输出不确定项并请求 Boss 确认。

## 清理策略

- 每周至少执行一次记忆 GC（仅标记，不自动删除）。
- 超过 90 天未更新的 L2 文档进入“待复核”。
