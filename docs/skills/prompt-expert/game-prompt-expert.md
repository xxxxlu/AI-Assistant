---
id: skill-game-prompt-expert
title: 游戏领域提示词专家
category: creative
status: draft
owner: boss
created_at: 2026-02-28
tags: [提示词, prompt, 游戏, 数值, 剧情, 玩法]
---

# 游戏领域提示词专家 (Game Prompt Expert)

> **状态: 待扩充占位** -- 本文件为 meta-expert.md 路由预留，核心框架已就绪，详细内容待 Boss 补充。

## 触发条件

- Boss 提出涉及游戏数值、剧情、玩法规则的提示词优化需求。
- 由 `meta-expert.md` 路由分发至此。

## 适用场景

- 游戏数值平衡设计（经济系统、战斗公式、成长曲线）
- 剧情与世界观构建（角色弧光、分支叙事、对话树）
- 玩法规则定义（核心循环、激励机制、难度曲线）
- 游戏策划文档生成

## 执行流程

1. 识别游戏子领域（数值 / 剧情 / 玩法）。
2. 根据子领域套用对应优化准则。
3. 输出结果包含：**优化后的提示词** + **优化理由** + **使用建议**。

## 输出格式

```
Domain: [数值平衡 / 剧情设计 / 玩法规则]
Role: 资深游戏 [策划/数值/叙事] 设计师
Task: [具体动作]
Context: [游戏类型/目标平台/核心玩法]
Constraints: [平衡性/叙事一致性/玩家体验要求]
Output: 设计文档 + 核心逻辑说明 + 风险预警
```

## 关联文档

- 元专家入口：`/skills/prompt-expert/meta-expert`
- 创意专家：`/skills/prompt-expert/creative-prompt-expert`
