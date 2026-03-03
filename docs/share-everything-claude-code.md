# Everything Claude Code：让你的 Claude Code 从"能用"到"好用"

> 推荐一个我一直在用的 Claude Code 增强配置集合，Anthropic 黑客马拉松获奖项目，50K+ Stars。这篇分享偏实操，看完就能上手。

## 这东西解决什么问题？

用过 Claude Code 的人都知道，裸跑的 Claude Code 就像一个能力很强但没有工作流的实习生——你得每次告诉他怎么做。

**Everything Claude Code (ECC)** 做的事情就是：给 Claude Code 装上一套成熟的工作规范和工具箱。装完之后你会发现：

- 写代码前它会自己先写测试（TDD）
- 改完代码会自动跑格式化和类型检查
- 提交前会自动做安全扫描
- 跨会话不会失忆（记忆持久化）
- 遇到复杂任务会拆分成子代理并行处理

## 它包含什么？

| 类别 | 数量 | 干什么用 |
|------|------|----------|
| 专业子代理 | 13 个 | 代码审查、安全分析、TDD、架构设计等专项任务 |
| 技能（Skills） | 56 个 | 各语言/框架的最佳实践和工作流定义 |
| 斜杠命令 | 32 个 | 快速触发特定工作流，如 `/tdd`、`/plan`、`/e2e` |
| 规则（Rules） | 7 条 | 编码风格、安全、测试等始终遵守的底线 |
| Hooks | 10+ 个 | 自动格式化、类型检查、安全提醒等自动触发 |

## 安装（2 分钟搞定）

### 方式一：插件安装（推荐）

在 Claude Code 中直接运行：

```bash
# 1. 添加市场源
/plugin marketplace add affaan-m/everything-claude-code

# 2. 安装插件
/plugin install everything-claude-code@everything-claude-code
```

> 插件方式安装后，命令需要加命名空间前缀，比如 `/everything-claude-code:plan`

### 方式二：手动安装（更灵活，推荐进阶用户）

```bash
# 克隆仓库
git clone https://github.com/affaan-m/everything-claude-code.git
cd everything-claude-code

# 用安装脚本按语言安装规则（选你需要的）
./install.sh typescript          # 前端/Node.js 开发者
./install.sh python              # Python 开发者
./install.sh golang              # Go 开发者
./install.sh typescript python   # 多语言项目

# 手动复制其他组件（按需选择）
cp agents/*.md ~/.claude/agents/
cp commands/*.md ~/.claude/commands/
cp -r skills/* ~/.claude/skills/
```

### 配置包管理器（可选但推荐）

```bash
# 自动检测
node scripts/setup-package-manager.js --detect

# 或手动指定
node scripts/setup-package-manager.js --global pnpm
```

## 实操：5 个最值得用的功能

### 1. `/plan` — 写代码前先想清楚

**场景**：要做一个新功能，但不确定怎么下手。

```bash
/plan "给项目添加用户认证功能"
```

**它会做什么**：
- 自动分析你的项目结构和技术栈
- 列出实现步骤、依赖关系、风险点
- 拆分成可执行的子任务
- 你确认后才开始动手

**为什么有用**：避免写了一半才发现方向不对，特别适合复杂功能。

---

### 2. `/tdd` — 测试驱动开发

**场景**：要写新功能或修 Bug。

```bash
/tdd
```

**它会做什么**：
1. 先写测试用例（RED - 测试失败）
2. 写最少的代码让测试通过（GREEN）
3. 重构优化（IMPROVE）
4. 检查覆盖率是否达到 80%+

**为什么有用**：很多人知道 TDD 好但做不到，这个命令帮你**强制执行**这个流程。

---

### 3. `/code-review` — 自动代码审查

**场景**：写完代码，提交前想检查一下质量。

```bash
/code-review
```

**它会做什么**：
- 检查代码质量、安全漏洞、性能问题
- 按严重程度分级：CRITICAL / HIGH / MEDIUM / LOW
- 给出具体的修复建议

**为什么有用**：相当于随时有一个 Senior Engineer 帮你 review，不用等同事。

---

### 4. Hooks 自动化 — 改完代码自动检查

这是我觉得最"润物细无声"的功能。装完之后你不需要手动触发，它自动在后台干活：

| 触发时机 | 自动做什么 |
|----------|-----------|
| 编辑 .ts/.tsx 文件后 | 自动跑 Prettier 格式化 + TypeScript 类型检查 |
| 编辑文件后 | 检查是否有 `console.log` 残留 |
| `git push` 前 | 提醒你先 review 变更 |
| 启动 dev server | 提醒你在 tmux 里跑，避免阻塞 |
| 每 ~50 次工具调用 | 建议你手动 `/compact` 压缩上下文 |

---

### 5. 持续学习 — 越用越懂你

```bash
/instinct-status     # 查看已学到的模式
/evolve              # 把零散模式聚合成技能
/promote             # 把项目级模式提升为全局
```

**原理**：系统通过 Hooks 自动记录你的操作模式（比如你总是用某种错误处理方式），积累到一定程度后提炼为"直觉"(Instinct)，下次自动应用。

**关键设计**：
- 项目隔离 — React 项目的模式不会污染 Go 项目
- 置信度机制 — 模式被重复验证才会逐步提高优先级（0.3 → 0.9）
- 可导出/导入 — 团队成员之间可以共享学到的模式

---

## 进阶：多智能体协作与模型路由

如果你发现开启 ECC 后 Token 消耗变快了，那是因为它在后台为你开启了一套 **"模型路由 (Model Routing)"** 策略。

### 1. 为什么会有多个子代理？
ECC 将复杂任务拆解，不再让一个模型干所有的活，而是：
- **Orchestrator (主代理/你)**：你是 Boss，掌控全局和写权限。
- **Specialized Agents (专家团)**：每个专家有不同的分工和对应的模型档位。

### 2. 默认模型路由表
ECC 在 `~/.claude/agents/*.md` 中默认配置了最佳实践：

| 专家 (Agent) | 默认模型 | 分工 | 理由 |
| :--- | :--- | :--- | :--- |
| **Architect / Planner** | **Opus (4.6)** | 深度重构、系统规划 | 需要极度缜密的逻辑推理 |
| **Code / Security Reviewer** | **Sonnet (4.6)** | 代码审计、漏洞探测 | 编码知识库最全，兼顾成本 |
| **Doc Updater** | **Haiku (4.5)** | 文档维护、格式整理 | 文字处理任务，极致性价比 |

### 3. 专家协作流 (Quality Gating)
ECC 强制执行一个 **Plan → Test → Code → Review** 的质量门禁。当你跑一个任务时，后台其实发生了这些事：
1. **Planner (Opus)** 出方案，**等待你确认**。
2. **TDD Guide (Sonnet)** 先写测试。
3. **Claude (Sonnet)** 把代码写好并让测试跑通。
4. **Code-Reviewer (Sonnet)** 做最后审计。

### 4. 如何自定义路由？
如果你觉得某些任务太简单不值得用 Opus，或者某些审计需要更强的能力，可以直接修改配置：
```bash
# 修改特定代理的模型配置
# 编辑 ~/.claude/agents/planner.md
model: sonnet  # 将规划也降级到 sonnet 以节省费用
```

---

## 实战模板：直接抄作业

ECC 提供了几个真实项目的 CLAUDE.md 模板，可以直接拿来用：

| 模板 | 技术栈 | 适合场景 |
|------|--------|----------|
| `saas-nextjs-CLAUDE.md` | Next.js 15 + Supabase + Stripe | SaaS 产品 |
| `go-microservice-CLAUDE.md` | Go + gRPC + PostgreSQL | 微服务后端 |
| `django-api-CLAUDE.md` | Django + DRF + Celery | Python API |
| `rust-api-CLAUDE.md` | Axum + SQLx + PostgreSQL | Rust 后端 |

使用方式：

```bash
# 复制模板到你的项目根目录
cp everything-claude-code/examples/saas-nextjs-CLAUDE.md ./CLAUDE.md

# 然后根据你的项目修改内容
```

## 安全扫描：AgentShield

附带一个安全扫描工具，专门检查你的 Claude Code 配置是否安全：

```bash
# 快速扫描（不需要安装）
npx ecc-agentshield scan

# 自动修复安全问题
npx ecc-agentshield scan --fix

# 深度扫描（用 3 个 Opus 代理做红蓝对抗分析）
npx ecc-agentshield scan --opus --stream
```

扫描范围：CLAUDE.md、settings.json、MCP 配置、Hooks、Agent 定义，覆盖密钥泄露、权限审计、注入分析等 5 大类。

## 我的使用建议

1. **不要全装** — 按需安装你用得到的语言和技能，全装会增加 token 开销
2. **先从 3 个命令开始** — `/plan`、`/tdd`、`/code-review`，这三个覆盖了最核心的开发流程
3. **Hooks 可以挑着启用** — 看看 `hooks/hooks.json`，把不需要的注释掉
4. **模板别直接用** — `examples/` 里的模板要根据自己的项目改，别原封不动复制
5. **持续学习功能慢慢来** — 先熟悉基本命令，等用熟了再开启 instinct 系统

## 链接

- GitHub: https://github.com/affaan-m/everything-claude-code
- 中文 README: https://github.com/affaan-m/everything-claude-code/blob/main/README.zh-CN.md

---

> 有问题欢迎讨论。这个项目更新很勤快（截至 2026 年 3 月已到 v1.7），社区也比较活跃，30+ 贡献者，中文翻译覆盖了 80+ 文件。
