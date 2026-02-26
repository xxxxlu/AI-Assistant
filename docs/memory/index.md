
# 记忆中心

## 说明

本目录存放长期有效的项目记忆与用户偏好，并作为 L1 稳定层入口。

## 导航

- 项目概览：`/memory/project/brief`
- 架构信息：`/memory/project/architecture`
- 技术栈：`/memory/project/tech-stack`
- 用户偏好：`/memory/preferences/`
- 决策记录：`/memory/decisions/adr/001-use-markdown-for-knowledge-base`
- 身份与安全约束：`/memory/auth/boss-credentials`
- 分层模型：`/memory/layers`
- 自动化：`/memory/automation`
- L2 经验碎片：`/snippets/`
- L2 复盘沉淀：`/retrospectives/`

## 治理规则

1. 优先维护真实生效的规则，避免模板化空文档。
2. 文档冲突按 `last_reviewed` 新者优先。
3. 每次重大流程变更后更新相关记忆文档。

# 记忆系统

## 目标

让 AI 在会话之间保持稳定执行：

1. 记住长期有效的项目上下文。
2. 记住 Boss 的可执行偏好。
3. 复用历史决策，减少重复讨论。

## 入口

- 总入口：`/memory/`
- 项目事实：`/memory/project/`
- 用户偏好：`/memory/preferences/index.md`
- 决策记录：`/memory/decisions/`
- 身份安全：`/memory/auth/`
- 经验碎片（L2）：`/snippets/`
- 复盘沉淀（L2）：`/retrospectives/`

## 检索分层 (L1/L2/L3)

1. **L1（稳定层）**: rules/, memory/project/, memory/preferences/, memory/decisions/。
2. **L2（经验层）**: snippets/, retrospectives/, skills/。
3. **L3（外部层）**: world/ 与外部搜索。

检索顺序：L1 → L2 → L3。冲突时层级高者优先。

## 写入规则

1. 只写长期有效信息，不写临时会话内容。
2. 每条记忆必须可执行、可验证。
3. 涉及敏感信息仅保留引用，不落地明文。
4. 发生架构或流程变化时，同步更新相关记忆。

## 清理规则

1. 超过 `review_cycle_days` 未复核的文档，标记待复核。
2. 冲突内容按 `last_reviewed` 较新者优先。
3. 重复规则保留一份主文档，其他文档只留链接。

## 维护分工

- `memory/preferences/*`：偏好与执行风格
- `memory/project/*`：项目事实与架构
- `memory/decisions/adr/*`：关键技术决策

## 说明

本文件只定义记忆系统治理规则，不承载具体流程方法论。
流程方法论统一维护在 `docs/dev/skills/`。
