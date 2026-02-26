# AI Second Brain

一个面向 AI 助手的知识路由与执行规范仓库，用于统一“怎么找信息、按什么规则决策、如何记录痕迹”。

## 核心定位

- **路由大脑**：通过 `docs/router.md` 统一决策流程。
- **纯净大脑**：去行政化，仅保留核心指令与偏好。
- **增量记忆**：自动沉淀 Snippets 和复盘。

## 快速入口

- [🚀 快速上手](./quick-start.md)
- [🤖 路由总纲](./router.md)
- [👤 用户偏好](./memory/preferences/index.md)
- [⚙️ 开发规范](./dev/index.md)

## 自动化指令

- `pnpm docs:dev`: 启动预览
- `pnpm memory:snippet`: 采集经验
- `pnpm memory:retro`: 开启复盘
- `pnpm memory:gc`: 清理冗余
