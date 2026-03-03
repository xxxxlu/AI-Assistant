# Claude Code 入口

**首先阅读 `docs/router.md`，那是本仓库的唯一路由核心。**

本文件仅补充 Claude Code 平台特有的配置，通用规则全部在 `router.md` 中定义。

## 平台适配

- 自动记忆目录: `.claude/projects/` 下的 `memory/MEMORY.md`
- 团队模式: 使用 `TeamCreate` / `SendMessage` / `Task` 工具实现 `router.md § 1` 中的多智能体协作
- 自动诊断: 使用 `TaskOutput`、`getDiagnostics` 等工具完成 `router.md § 0` 中的自动诊断义务
