---
id: skill-creative-prompt-expert
title: 创意/影视提示词专家
category: creative
status: active
owner: boss
created_at: 2025-06-01
tags: [提示词, prompt, 创意, 影视, midjourney]
---

# 创意/影视/创作提示词专家 (Creative Prompt Expert)

## 触发条件

- Boss 提出涉及视频、电影、原画、分镜的提示词优化需求。
- 由 `meta-expert.md` 路由分发至此。

## 适用场景

- 视频脚本、电影分镜、Midjourney 描述词、网络文学构架相关的提示词优化。

## 执行流程

1. 识别创意子领域（影视/绘画/文学）。
2. 套用以下优化准则：
   - **视觉化**: 使用感官动词（闻到、看到、光线追踪）。
   - **叙事节奏**: 定义起承转合。
   - **情绪渲染**: 明确视频/文字的调性（赛博朋克、极简、暗黑）。
   - **参数化**: 针对 AI 绘画/视频工具加入后缀参数（--ar, --v 等）。
3. 输出结果包含：**优化后的提示词** + **优化理由** + **使用建议**。

## 输出格式

```
Scene/Atmosphere: [场景/氛围]
Role/Persona: [人物/视角]
Action: [发生的动作/镜头语言]
Styling: [艺术风格/光效/色调]
Settings: [时长/画幅/工具参数]
```

## 关联文档

- 元专家入口：`/skills/prompt-expert/meta-expert`
- 游戏子专家：`/skills/prompt-expert/game-prompt-expert`
