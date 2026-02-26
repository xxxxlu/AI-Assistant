
# Architecture Decision Records (ADR)

## 现有决策

| ID | 标题 | 状态 | 日期 |
|----|------|------|------|
| [001](./001-use-markdown-for-knowledge-base.md) | 使用 Markdown 作为知识库格式 | Accepted | 2026-02-09 |

## 新增 ADR

使用 `pnpm memory:snippet` 或手动创建，格式:

```markdown

# ADR-XXX: <标题>

## Status
Draft | Proposed | Accepted | Superseded | Deprecated

## Context
决策背景

## Decision
决策内容

## Consequences
影响

## Alternatives Considered
其他方案
```

## 维护规则

- 新增 ADR 后更新此 index.md
- Superseded 状态需注明被哪个 ADR 替代
- 每月复核一次活跃 ADR
