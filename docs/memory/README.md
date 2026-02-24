---
owner: Boss
last_reviewed: 2026-02-24
review_cycle_days: 30
status: active
---

# 记忆系统

## 目标

让 AI 在会话之间保持稳定执行：

1. 记住长期有效的项目上下文。
2. 记住 Boss 的可执行偏好。
3. 复用历史决策，减少重复讨论。

## 入口

- 总入口：`/memory/`
- 项目记忆：`/memory/project/`
- 偏好中心：`/memory/preferences/`
- 决策记录：`/memory/decisions/adr/`
- 身份与安全约束：`/memory/auth/`

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
