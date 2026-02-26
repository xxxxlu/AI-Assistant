
# 决策记录中心

## 目标

维护关键技术与架构决策的历史记录，确保:

1. 决策可追溯
2. 理由可复现
3. 替代方案可对比

## 目录结构

- `adr/`: Architecture Decision Records（ADR）
  - 格式: `XXX-<kebab-case-title>.md`
  - 编号从 001 开始递增

## ADR 必含字段

每个 ADR 必须包含:

- **Status**: Draft | Proposed | Accepted | Superseded | Deprecated
- **Context**: 决策背景
- **Decision**: 做了什么决定
- **Consequences**: 影响与后果
- **Alternatives Considered**: 考虑过的其他方案

## 使用场景

- 选型决策（框架、数据库、工具）
- 架构模式变更（从 REST 到 Event-driven）
- 流程约定（Git workflow、Code review）

## 参考

- [ADR 最佳实践](https://adr.github.io/)
