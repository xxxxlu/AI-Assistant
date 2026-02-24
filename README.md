# AI Assistant Second Brain

一个面向 AI 助手的知识路由与执行规范仓库，用于统一“怎么找信息、按什么规则决策、如何记录痕迹”。

## 当前定位

- 核心路由：`docs/router.md`
- 规则中心：`docs/rules/`
- 记忆中心：`docs/memory/`（L1 稳定层）
- 经验中心：`docs/snippets/`、`docs/retrospectives/`（L2 经验层）
- 技能中心：`docs/skills/` 与 `docs/dev/`
- 日志中心：`docs/logs/`
- 自动化脚本：`scripts/`

## 文档结构

- `docs/router.md`：全局路由、身份与决策流程
- `docs/rules/`：访问规则与约束
- `docs/memory/`：用户偏好、交互历史与身份相关信息
- `docs/snippets/`：短周期可复用经验碎片
- `docs/retrospectives/`：阶段复盘与改进动作
- `docs/skills/`：通用技能导航（技术/创意/学习）
- `docs/dev/`：研发阶段技能、评审模板、流程规范
- `docs/world/`：外部知识使用约定
- `docs/logs/`：错误、安全、文件访问日志
- `scripts/`：经验采集、复盘创建、记忆 GC 工具

## 使用方式

1. 先读 `docs/router.md` 决定信息检索与响应策略。
2. 再按优先级进入 `L1(memory/rules) -> L2(snippets/retrospectives) -> L3(world/external)`。
3. 若发生异常或敏感访问，按 `docs/logs/` 模板记录。

## 站点预览

- 开发：`pnpm docs:dev`
- 构建：`pnpm docs:build`
- 预览：`pnpm docs:preview`

## 自动化命令

- 记录 snippet：`pnpm memory:snippet -- \"标题\" [category] [source]`
- 新建复盘：`pnpm memory:retro -- \"主题\"`
- 记忆 GC 扫描：`pnpm memory:gc -- [days]`
