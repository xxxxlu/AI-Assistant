
# 快速上手指南

## 对于 Boss（人类用户）

### 核心概念

这是一个 **AI 第二大脑**，帮助 AI 助手（Edith）跨会话记忆和执行。

- **L1（稳定层）**: 长期不变的规则和项目信息
- **L2（经验层）**: 可复用的经验碎片和复盘
- **L3（外部层）**: 外部知识和临时信息

### 快速路由

| 我想要... | 去哪里 |
|-----------|--------|
| 了解系统如何工作 | [router.md](./router.md) |
| 设置我的偏好 | [memory/preferences/](./memory/preferences/) |
| 查看项目信息 | [memory/project/](./memory/project/) |
| 使用技能 | [skills/](./skills/) |
| 查看日志 | [logs/](./logs/) |
| 记录经验 | `pnpm memory:snippet` |
| 创建复盘 | `pnpm memory:retro` |

### 命令速查

```bash
# 启动开发服务器
pnpm docs:dev

# 记录经验片段
pnpm memory:snippet -- "标题" [category] [source]

# 创建复盘文档
pnpm memory:retro -- "主题"

# 清理过期记忆
pnpm memory:gc -- [天数]
```

## 对于 Edith（AI 助手）

### 执行流程

1. **读取路由**: 先读 `docs/router.md` 确定身份和优先级
2. **分层检索**: L1 (rules/memory) → L2 (snippets/retrospectives) → L3 (world)
3. **执行与记录**: 按规则执行，异常记录到 `logs/`

### 关键路径

```
用户请求
  ↓
router.md (身份、优先级)
  ↓
L1: rules/ + memory/
  ↓
L2: snippets/ + retrospectives/
  ↓
L3: world/ (如需要)
  ↓
执行 + 日志
```

### 快速检索 API

| 场景 | 路径 |
|------|------|
| 决策路由 | `docs/router.md` |
| 用户偏好 | `docs/memory/preferences/index.md` |
| 项目架构 | `docs/memory/project/architecture.md` |
| 技术栈 | `docs/memory/project/tech-stack.md` |
| 专家系统 | `docs/skills/prompt-expert/meta-expert.md` |
| 决策记录 | `docs/memory/decisions/index.md` |

### 元数据规范

每个文档必须包含:

```yaml
```

### 日志规范

异常或敏感访问必须记录:

```markdown
## YYYY-MM-DD HH:mm:ss

- **类型**: Error | Warning | Security
- **来源**: <文件/模块>
- **描述**: <详情>
- **处理**: <已采取行动>
```

## 常见问题

**Q: 如何知道该读哪个文件？**
A: 先读 `router.md`，它会告诉你优先级和路由策略。

**Q: 信息冲突怎么办？**
A: 按优先级: 系统规则 > 开发者指令 > 用户指令 > 本仓库文档。同级按 `last_reviewed` 较新者优先。

**Q: 如何维护索引？**
A: 每个目录必须有 `index.md`，变更后手动更新或用自动化脚本。

## 下一步

- 阅读 [router.md](./router.md) 理解路由机制
- 查看 [memory/index.md](./memory/index.md) 了解记忆系统
- 浏览 [skills/](./skills/) 探索可用技能
