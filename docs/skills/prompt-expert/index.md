---
id: skill-prompt-expert
title: 提示词专家系统
category: meta
status: active
owner: boss
created_at: 2025-06-01
tags: [提示词, prompt, 专家系统, 路由]
---

# 提示词专家系统

## 概述

提示词专家系统是一个分层路由架构：元专家负责识别领域并分发，子专家负责各自领域的深度优化。

## 子专家索引

| 子专家 | 文件 | 适用领域 |
|--------|------|----------|
| [元专家 (Meta)](./meta-expert.md) | `meta-expert.md` | 路由入口，通用优化方法论 |
| [开发领域](./dev-prompt-expert.md) | `dev-prompt-expert.md` | 代码、软件、测试方案 |
| [创意/影视](./creative-prompt-expert.md) | `creative-prompt-expert.md` | 视频、电影、原画、分镜 |
| [游戏领域](./game-prompt-expert.md) | `game-prompt-expert.md` | 数值、剧情、玩法规则 |

## 路由逻辑

```
Boss 提出优化需求
       |
  Meta-Expert 识别领域
       |
  +---------+---------+---------+
  |         |         |         |
 dev    creative    game    通用框架
```

详见 [Meta-Expert 路由决策](./meta-expert.md)。
