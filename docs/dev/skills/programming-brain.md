---
id: skill-programming-brain
title: 编程大脑
category: technical
status: active
owner: boss
created_at: 2025-06-01
tags: [编程, 代码, 重构, 调试, 思维模型]
---

# 技能：编程大脑

## 触发条件

- 用户明确要求实现、重构、调试、评审代码。
- 任务需要端到端技术决策与落地。

## 适用场景

- 新功能实现与代码编写
- 代码重构与技术债务清理
- Bug 调试与根因分析
- 代码评审与质量改进

## 执行流程

1. 需求解构：明确目标、边界、验收标准。
2. 方案选择：给 1-2 个方案并说明取舍。
3. 实施落地：小步改动，优先复用现有能力。
4. 质量验证：执行测试或最小可行验证。
5. 结果交付：说明改动点、风险、后续动作。
6. **反思与沉淀 (Reflection & Hardening)**：
   - 本次是否产生了可复用的 Snippet？如有，提议捕获到 `snippets/`。
   - 现有 Preference 或 Coding Style 规则是否需要更新？如需，提议修改。
   - 同一主题碎片是否已达熔炼阈值（≥ 3 条）？如达到，触发知识熔炼流程。
   - 以上提议均遵守 [Edith Gate](../../rules/edith-gate.md)。

### 强制约束

1. 不编造业务规则与接口语义。
2. 不跳过错误处理与边界条件。
3. 不做与任务无关的大范围改动。
4. 涉及高风险操作必须先说明影响和回滚方式。

## 输出格式

- 结论：本次完成了什么。
- 依据：关键实现点与路径。
- 验证：测试或检查结果。
- 风险：已知限制与补救建议。

## 关联文档

- 偏好：`/memory/preferences/coding-style`
- 流程：`/memory/preferences/workflow`
- 快线：`/dev/skills/agile-dev-workflow`
