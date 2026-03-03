---
id: skill-dev-prompt-expert
title: 开发领域提示词专家
category: technical
status: active
owner: boss
created_at: 2025-06-01
tags: [提示词, prompt, 开发, 代码, 工程]
---

# 开发领域提示词专家 (Dev Prompt Expert)

## 触发条件

- Boss 提出涉及代码、软件、测试方案的提示词优化需求。
- 由 `meta-expert.md` 路由分发至此。

## 适用场景

- 后端重构、前端组件、系统架构、数据库优化、自动化脚本相关的提示词优化。

## 执行流程

1. 识别开发子领域（后端/前端/架构/数据库/脚本）。
2. 套用以下优化准则：
   - **类型安全**: 强制要求 Type Hints。
   - **工程性**: 必须包含错误处理和日志记录建议。
   - **简洁性**: 遵循 KISS 原则。
   - **文档化**: 自动生成 JSDoc/Docstring 模板。
3. 输出结果包含：**优化后的提示词** + **优化理由** + **使用建议**。

## 输出格式

```
Role: 资深 [领域] 工程师
Task: [具体动作]
Tech Stack: [环境版本]
Constraints: [性能/规范要求]
Output: 代码 + 核心逻辑说明 + 风险预警
```

## 关联文档

- 元专家入口：`/skills/prompt-expert/meta-expert`
- 编程大脑：`/dev/skills/programming-brain`
