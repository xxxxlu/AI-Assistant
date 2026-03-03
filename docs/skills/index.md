---
id: skill-center
title: 技能中心
category: meta
status: active
owner: boss
created_at: 2025-06-01
tags: [索引, 技能, 路由]
---

# 技能中心

## 技能目录结构

本仓库的技能分为两个区域，职责互补：

| 区域 | 路径 | 定位 | 内容 |
|------|------|------|------|
| 通用技能 | `docs/skills/` | 跨领域、非纯开发 | 提示词专家系统、团队协作调度 |
| 研发技能 | `docs/dev/skills/` | 纯工程与编码 | 编程大脑、敏捷快线流程 |

## 通用技能

### 提示词专家系统

入口：[Meta-Prompt Expert](./prompt-expert/index.md)

根据任务领域自动路由到对应子专家：
- [开发领域提示词专家](./prompt-expert/dev-prompt-expert.md)
- [创意/影视提示词专家](./prompt-expert/creative-prompt-expert.md)
- [游戏领域提示词专家](./prompt-expert/game-prompt-expert.md)

### 团队协作调度

- [Agent Teams Orchestrator](./agent-teams.md)：多 Agent 协作，高 Token 消耗，需 Boss 审批

> 本技能属于基础设施级能力，由 `router.md` 直接引用。启动前必须通过 Edith Gate。

## 研发技能（位于 dev/skills/）

- [编程大脑](../dev/skills/programming-brain.md)：端到端技术决策与代码实现的思考模型
- [敏捷快线流程](../dev/skills/agile-dev-workflow.md)：紧急修复与时效优先迭代的最小闭环

## 元/基础设施技能

### 自优化引擎

- [Self-Optimization](./self-optimization.md)：知识审计、模式提炼、记忆层级管理的元认知技能

> 本技能由 `router.md § 4 进化闭环` 驱动，是 Edith 大脑自我进化的核心机制。

## 使用方式

1. 先由 `docs/router.md` 判断任务类型。
2. 先查本地技能文档（`/skills/` 通用技能、`/dev/skills/` 研发技能）。
3. 本地无匹配时，补查 `https://skillsmp.com/zh`。
4. 输出结果需标注来自哪个技能文档。
