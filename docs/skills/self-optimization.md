---
id: skill-self-optimization
title: 自优化引擎
category: meta
status: active
owner: boss
created_at: 2025-06-01
tags: [元认知, 知识管理, 自优化, 进化闭环]
---

# 技能：自优化引擎 (Self-Optimization Engine)

## 触发条件

- Boss 明确要求知识体检或大脑优化。
- `memory_gc` 脚本产出报告后的后处理阶段。
- 交互中累积碎片达到熔炼阈值（同主题 ≥ 3 条）。
- Boss 连续 2 次对同类行为给出负反馈。

## 适用场景

### 场景 A: 知识熔炼 (Knowledge Smelting)

同一主题的 L2 碎片（`snippets/`、`retro/`）积累 ≥ 3 条时：
1. 提取共性模式，归纳为一条精炼规则。
2. 提议升级为 L1 层的 Skill 或 Rule。
3. 获批后清理已合并的原始碎片。

### 场景 B: 负反馈响应 (Negative Feedback Response)

Boss 对同类行为连续给出 2 次负反馈时：
1. 识别行为模式（如"语气太生硬"、"不要加注释"）。
2. 检索 `memory/preferences/` 是否已有相关条目。
3. 提议新增或更新 Preference 条目，引用触发上下文。

### 场景 C: 架构健康审计 (Architectural Health Audit)

定期或按需执行：
1. 扫描所有 `docs/` 下的内部链接，标记死链。
2. 检查 Skills/Rules 的 frontmatter 完整性（必须包含 `id`、`title`、`category`、`status`、`owner`、`created_at`、`tags`）。
3. 识别孤立文档（无任何入链的文件）。
4. 输出结构化健康报告。

### 场景 D: 路由效率优化 (Router Efficiency Tuning)

根据 Boss 近期关注点调整路由优先级：
1. 分析近期交互日志中的高频任务类型。
2. 提议调整 `router.md` 中的路由权重或快捷路径。

## 执行流程

```
感知 (Perception)
  ↓ 本次交互是否产生可沉淀的碎片？
反思 (Reflection)
  ↓ 碎片属于哪个层级？是否已有相似记录？
提议 (Proposal)
  ↓ 向 Boss 提交结构化变更提案（遵守 Edith Gate）
同化 (Assimilation)
  ↓ 获批后写入正确层级，清理冗余
```

## 输出格式

### 知识变更提案模板

```markdown
## 优化提案: [标题]

**类型**: 熔炼 / 偏好更新 / 死链修复 / 结构调整
**触发源**: [具体交互/报告/反馈]
**当前状态**: [现有内容或问题描述]
**提议变更**: [具体修改内容]
**影响范围**: [涉及的文件列表]
**风险评估**: 低 / 中 / 高
```

### 健康报告模板

```markdown
## 大脑健康报告

**扫描时间**: YYYY-MM-DD
**检查项目**: 死链 / Frontmatter / 孤立文档 / 碎片密度

| 类别 | 状态 | 详情 |
|------|------|------|
| 死链 | ✅/⚠️ | ... |
| Frontmatter | ✅/⚠️ | ... |
| 孤立文档 | ✅/⚠️ | ... |
| 熔炼候选 | ✅/⚠️ | ... |
```

## 强制约束

1. 所有提案必须通过 [Edith Gate](../rules/edith-gate.md)，不得以"优化"为由绕过审批。
2. 熔炼操作必须保留原始碎片的核心信息，不得丢失上下文。
3. 清理操作必须逐项确认，不得批量静默删除。
4. 健康报告必须基于实际扫描结果，不得编造数据。

## 关联文档

- 路由系统：[router.md § 4 进化闭环](../router.md#4-进化闭环-the-evolutionary-loop)
- 门禁规则：[rules/edith-gate.md](../rules/edith-gate.md)
- 编程大脑：[dev/skills/programming-brain.md](../dev/skills/programming-brain.md)
- 记忆自动化：[memory/automation.md](../memory/automation.md)
- 技能中心：[skills/index.md](./index.md)
