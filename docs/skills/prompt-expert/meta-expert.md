---
id: skill-meta-prompt-expert
title: 提示词元专家
category: meta
status: active
owner: boss
created_at: 2025-06-01
tags: [提示词, prompt, 元专家, 路由]
---

# 提示词元专家 (Meta-Prompt Expert)

## 触发条件

- Boss 提出任何提示词优化、改写、生成需求。
- 由 `router.md` 或 `skills/index.md` 路由至此。

## 适用场景

- 跨领域的通用提示词优化（消除歧义、激活能力、控制格式）
- 无法归入特定子专家时的兜底优化
- 子专家的路由分发入口

## 执行流程

### 通用优化方法论：5W1H 模型

1. **Who (Role)**: 定义精准角色（如：具有 10 年经验的架构师）。
2. **What (Task)**: 目标清晰，无模糊动词。
3. **Wait (Context)**: 补充必要背景。
4. **Why (Goal)**: 明确最终价值（如：为了提高转化率）。
5. **How (Constraint)**: 规定输出格式（JSON, Markdown, 长度）。

### 垂直路由决策

当 Boss 提出优化需求时，按以下逻辑路由：
- 涉及代码、软件、测试方案 → `dev-prompt-expert.md`
- 涉及视频、电影、原画、分镜 → `creative-prompt-expert.md`
- 涉及数值、剧情、玩法规则 → `game-prompt-expert.md`
- 暂无明确领域 → 使用本元专家通用框架优化。

### 优化指令流程

1. 识别 Boss 原始意图。
2. 调用对应子专家。
3. 输出结果包含：**优化后的提示词** + **优化理由** + **使用建议**。

## 输出格式

- 优化后的提示词（完整可用）
- 优化理由（逐条说明改动点）
- 使用建议（适用模型、参数推荐）

## 关联文档

- 专家系统总览：`/skills/prompt-expert/index`
- 开发子专家：`/skills/prompt-expert/dev-prompt-expert`
- 创意子专家：`/skills/prompt-expert/creative-prompt-expert`
- 游戏子专家：`/skills/prompt-expert/game-prompt-expert`
