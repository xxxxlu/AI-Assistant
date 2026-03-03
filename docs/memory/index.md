
# 记忆中心

## 说明

本目录存放长期有效的项目记忆与用户偏好，并作为 L1 稳定层入口。

## 导航

- **L1 项目事实**:
  - 项目概览：`/memory/project/brief`
  - 架构信息：`/memory/project/architecture`
  - 技术栈：`/memory/project/tech-stack`
  - 决策记录：`/memory/decisions/adr/index`
- **L1 用户与安全**:
  - 用户偏好：`/memory/preferences/`
  - 身份与安全：`/memory/auth/`
- **系统指南**:
  - [分层模型](./layers.md) (L1/L2/L3)
  - [自动化工具](./automation.md) (scripts)
- **L2 经验层入口**:
  - 经验碎片：`/snippets/`
  - 复盘沉淀：`/retrospectives/`

## 治理规则

### 1. 检索优先级
按 L1 (稳定层) → L2 (经验层) → L3 (外部层) 顺序检索。同层级冲突时，`last_reviewed` 较新者或文件修改时间较新者优先。

### 2. 写入原则
- 只写长期有效信息，不写临时会话内容。
- 每条记忆必须可执行、可验证。
- 涉及敏感信息仅保留引用，不落地明文。
- 发生架构或流程变化时，同步更新相关记忆。

### 3. 清理与复核
- 超过 90 天未更新的文档（L2层）标记为待复核，详见 [GC 日志](../logs/memory-gc.md)。
- 维护者应定期复核 `docs/metadata-schema.md` 中定义的必填字段。

## 维护分工

- `memory/preferences/*`：偏好与执行风格
- `memory/project/*`：项目事实与架构
- `memory/decisions/adr/*`：关键技术决策
- `docs/dev/skills/*`：流程方法论（由工程师团队维护）
