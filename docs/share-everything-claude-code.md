# Everything Claude Code：从工程化痛点到 AI 自进化开发体系

> 推荐一个我一直在用的 Claude Code 增强配置集合，Anthropic 黑客马拉松获奖项目，50K+ Stars。这不是一篇安装教程——我想讲的是它**为什么存在**、**怎么运作**、以及**如何改变你用 Claude Code 的方式**。

---

## 一、裸跑 Claude Code 的四个致命痛点

用过 Claude Code 的人都有体感：能力很强，但总差点什么。这个"差点什么"不是模型不行，而是**缺乏工程化的使用方式**。

### 痛点 1：上下文臃肿 — 200K 只能用 70K

Claude Code 的上下文窗口是 200K tokens，但如果你盲目开启一堆 MCP Server（数据库、搜索、文件系统……），光是工具定义就吃掉 50K+。再加上系统提示词、对话历史，实际留给你写代码的有效空间可能只剩 **70K 不到**。

表现：大型项目里聊几轮就开始"失忆"、丢失前面的修改上下文、重复读文件。

### 痛点 2：Token 损耗 — 用 Opus 整理文档

没有模型路由的概念，所有任务都跑同一个模型。让 Opus 4.6 去更新 README、格式化代码、整理日志——这相当于请年薪百万的架构师做 Excel 表格。

**真实成本差距**：

| 模型 | 输入价格 ($/1M tokens) | 输出价格 ($/1M tokens) | 适合任务 |
|------|----------------------|----------------------|---------|
| Opus 4.6 | $15 | $75 | 架构规划、深度推理 |
| Sonnet 4.6 | $3 | $15 | 编码、审查、测试 |
| Haiku 4.5 | $0.80 | $4 | 文档、格式化、简单修复 |

同样一个"更新 README"的任务，用 Opus 花 $0.15，用 Haiku 花 $0.008。差了近 **20 倍**。

### 痛点 3：跨会话失忆 — 退出即重置

Claude Code 没有持久记忆。今天教它"我们项目用 pnpm 不用 npm"，明天新开会话它又跑去 `npm install`。你的纠正、偏好、约定——全部蒸发。

每次新会话都像带一个新实习生，从头交代一遍。

### 痛点 4：缺乏工程规范 — 能跑就行

裸跑的 Claude Code 写代码很快，但：
- 不会自己先写测试（除非你每次提醒）
- 不会自动做代码审查
- 不会检查安全漏洞
- 不会在提交前做格式化和类型检查

结果就是："能跑"但不"能维护"。技术债从第一天就开始累积。

---

## 二、Everything Claude Code 的核心架构

**ECC (Everything Claude Code)** 不是一个"提示词优化"，它是一套完整的 **Orchestrator-Worker 多智能体工程化框架**。

### 2.1 全景概览

| 类别 | 数量 | 干什么用 |
|------|------|----------|
| 专家代理 (Agents) | 13 个 | 代码审查、安全分析、TDD、架构设计等专项任务 |
| 技能 (Skills) | 50+ 个 | 各语言/框架的最佳实践和工作流定义 |
| 斜杠命令 (Commands) | 33 个 | 快速触发特定工作流，如 `/tdd`、`/plan`、`/e2e` |
| 规则 (Rules) | 7 条 | 编码风格、安全、测试等始终遵守的底线 |
| Hooks | 10+ 个 | 自动格式化、类型检查、安全提醒等自动触发 |
| MCP 配置 | 14 组 | 预配置的外部工具服务器方案 |

### 2.2 Orchestrator-Worker 模式

核心思想：**你是 Boss（Orchestrator），ECC 帮你管理一个专家团（Workers）**。

```
你 (Boss/Orchestrator)
  │
  ├─ 🧠 Planner (Opus)       — 出方案，拆任务
  ├─ 🏗️ Architect (Opus)      — 系统设计，技术选型
  ├─ 🧪 TDD Guide (Sonnet)    — 先写测试，后写代码
  ├─ 💻 Code Reviewer (Sonnet) — 代码质量审查
  ├─ 🔒 Security Reviewer (Sonnet) — 安全漏洞扫描
  ├─ 🐛 Build Error Resolver (Sonnet) — 编译错误修复
  ├─ 🎭 E2E Runner (Sonnet)   — Playwright 端到端测试
  ├─ 🗄️ Database Reviewer (Sonnet) — SQL 优化，Schema 设计
  ├─ 🧹 Refactor Cleaner (Sonnet) — 死代码清理
  ├─ 📝 Doc Updater (Haiku)   — 文档维护（极致省钱）
  ├─ 🐍 Python Reviewer (Sonnet) — Python 专项审查
  ├─ 🔵 Go Reviewer (Sonnet)  — Go 专项审查
  └─ 🔵 Go Build Resolver (Sonnet) — Go 编译问题
```

**关键设计**：每个 Agent 都有明确的 `模型分配`、`工具权限`、`触发条件`。不是所有任务都需要最贵的模型——这就是下面要讲的模型路由。

### 2.3 模型路由 — 把钱花在刀刃上

ECC 的精髓之一：**按任务复杂度自动匹配模型档位**。

| 模型档位 | 负责任务 | 理由 |
|---------|---------|------|
| **Opus 4.6** (顶级推理) | 架构规划、系统设计、复杂重构 | 需要极度缜密的逻辑推理 |
| **Sonnet 4.6** (最佳编码) | 日常开发、代码审查、测试、安全扫描 | 编码能力最强，性价比最优 |
| **Haiku 4.5** (极致性价比) | 文档更新、格式化、简单修复 | 90% 的 Sonnet 能力，3 倍成本节约 |

**怎么配**？直接改 Agent 文件：

```bash
# ~/.claude/agents/planner.md 头部
model: opus     # 规划用 Opus

# ~/.claude/agents/doc-updater.md 头部
model: haiku    # 文档用 Haiku
```

### 2.4 质量门禁 — Plan → Test → Code → Review

这是 ECC 最"反人性"也最有价值的设计：**强制执行工程流水线**。

```
/plan "添加用户认证"
    │
    ▼
[Planner Agent - Opus]
  分析项目结构 → 列出依赖风险 → 拆解子任务
  → 等待你确认 ✓
    │
    ▼
[TDD Guide Agent - Sonnet]
  1. RED   — 先写测试，确认失败 ✗
  2. GREEN — 写最少代码让测试通过 ✓
  3. REFACTOR — 重构优化，覆盖率 ≥ 80%
    │
    ▼
[你写完代码]
    │
    ▼
[Code Reviewer Agent - Sonnet]
  安全漏洞 → CRITICAL ❌ (必须修)
  代码质量 → HIGH ⚠️ (建议修)
  命名规范 → MEDIUM 📝 (可选修)
    │
    ▼
[Commit] ← 所有门禁通过后才能提交
```

每一步都有明确的"通过/不通过"标准，不是"能跑就行"。

---

## 三、持续学习系统 — ECC 的"灵魂"

这是 ECC 最让我惊艳的部分：**它不只是工具，它会学习**。

### 3.1 Homunculus — 沉默的观察者

Homunculus 是 ECC 的"黑匣子"系统，通过 Git Hooks 实现 100% 确定性观察：

```
你的每一次操作
    │
    ├── PreToolUse Hook  ─→ 记录你调用了什么工具、传了什么参数
    ├── PostToolUse Hook ─→ 记录工具执行结果、你是否纠正了输出
    └── Session End Hook ─→ 总结本次会话的模式和偏好
    │
    ▼
~/.claude/homunculus/projects/<project-hash>/observations.jsonl
```

**为什么用 Hooks 不用 Skills？**

> v1 用 Skills 观察，但 Skills 是概率性的——Claude 自行判断要不要触发，命中率只有 50-80%。
> Hooks 是确定性的，每次工具调用都会触发，不会遗漏任何模式。

### 3.2 Instinct — 从观察到直觉

观察数据本身没有价值，**提炼出的模式才有**。这就是 Instinct 系统做的事。

每个 Instinct（直觉）是一个原子级的行为单元：

```yaml
---
id: prefer-functional-style
trigger: "when writing new functions"
confidence: 0.7
domain: "code-style"
scope: project            # 只在当前项目生效
project_name: "my-react-app"
---

# Prefer Functional Style
## Action
Use functional patterns over classes when appropriate.

## Evidence
- Observed 5 instances of functional pattern preference
- User corrected class-based approach to functional on 2025-01-15
```

**置信度演进逻辑**：

| 置信度 | 含义 | 系统行为 |
|-------|------|---------|
| **0.3** | 初次观察 | 建议但不执行，等待你确认 |
| **0.5** | 多次观察 | 相关场景下自动应用 |
| **0.7** | 反复验证 | 自动执行，无需确认 |
| **0.9** | 核心行为 | 始终生效的固化模式 |

**置信度增长条件**：
- 模式被重复观察到 → 上升
- 你没有纠正建议的行为 → 上升
- 其他来源的 Instinct 互相印证 → 上升

**置信度衰减条件**：
- 你主动纠正了行为 → 下降
- 长时间未观察到该模式 → 下降
- 出现矛盾证据 → 下降

### 3.3 进化链路 — Instinct → Skill → Command

学到的碎片化模式如何变成真正可用的能力？

```
观察 (Observation)
  → 提炼为 Instinct (0.3 → 0.9)
    → /evolve 聚合相关 Instincts
      → 生成 Skill 文件 (.md)
        → 进一步演化为 Command 或 Agent
```

举例：系统观察到你在 React 项目中：
1. 总是用 `useCallback` 包裹事件处理函数
2. 总是用 `useMemo` 缓存计算结果
3. 总是把 hooks 抽到自定义 hook 文件中

三条独立的 Instinct 经过 `/evolve`，聚合为一个 `react-hooks-optimization` Skill，以后新项目中自动应用。

### 3.4 项目隔离与提升

**隔离（默认行为）**：
- React 项目的 Instinct 不会污染 Go 项目
- 每个项目通过 Git Remote URL 生成唯一 hash ID
- 存储路径：`~/.claude/homunculus/projects/<hash>/instincts/`

**提升（Promotion）**：
- 当同一个 Instinct 在 **2+ 个项目** 中都出现，且平均置信度 ≥ 0.8
- 系统判定这是一个"通用模式"，提升为全局 Instinct
- 例如："永远先验证用户输入"从 React 项目和 Go 项目都学到了 → 提升为全局

```bash
# 查看当前 Instincts（项目级 + 全局）
/instinct-status

# 聚合相关 Instincts 为 Skill
/evolve

# 手动提升项目 Instinct 到全局
/promote prefer-explicit-errors

# 查看所有项目的 Instinct 统计
/projects
```

---

## 四、安装（2 分钟搞定）

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

---

## 五、实战进阶：从入门到硬核

### 5.1 极致 Token 节省

**原则：不该读的别读，不该用的别装**。

1. **按需安装** — 只装你项目需要的语言规则和技能，全装会把上下文撑爆
2. **善用 `/compact`** — 在阶段性任务完成后手动压缩上下文（ECC 会在约 50 次工具调用后提醒你）
3. **模型降级** — 文档任务用 Haiku，日常开发用 Sonnet，只有架构决策才上 Opus

### 5.2 完整开发工作流演示

一个真实的功能开发流程：

```bash
# Step 1: 规划阶段
/plan "给项目添加 JWT 用户认证"
# → Planner (Opus) 分析项目结构，出方案
# → 你审阅后确认

# Step 2: TDD 开发
/tdd
# → TDD Guide 先写测试用例（RED）
# → 你实现代码让测试通过（GREEN）
# → 重构优化（REFACTOR）

# Step 3: 代码审查
/code-review
# → Reviewer 按 CRITICAL/HIGH/MEDIUM/LOW 分级
# → 你修复标记的问题

# Step 4: 提交
# 所有门禁通过后，正常 git commit
```

### 5.3 Hooks 自动化 — 静默护航

装完后你不需要手动触发，它在后台自动干活：

| 触发时机 | 自动做什么 |
|----------|-----------|
| 编辑 .ts/.tsx 文件后 | 自动跑 Prettier 格式化 + TypeScript 类型检查 |
| 编辑文件后 | 检查是否有 `console.log` 残留 |
| `git push` 前 | 提醒你先 review 变更 |
| 启动 dev server | 提醒你在 tmux 里跑，避免阻塞 |
| 每 ~50 次工具调用 | 建议你手动 `/compact` 压缩上下文 |

### 5.4 安全加固：AgentShield

附带安全扫描工具，检查你的 Claude Code 配置是否安全：

```bash
# 快速扫描（不需要安装）
npx ecc-agentshield scan

# 自动修复安全问题
npx ecc-agentshield scan --fix

# 深度扫描（用 3 个 Opus 代理做红蓝对抗分析）
npx ecc-agentshield scan --opus --stream
```

扫描范围：CLAUDE.md、settings.json、MCP 配置、Hooks、Agent 定义，覆盖密钥泄露、权限审计、注入分析等 5 大类。

### 5.5 实战模板：直接抄作业

ECC 提供真实项目的 CLAUDE.md 模板：

| 模板 | 技术栈 | 适合场景 |
|------|--------|----------|
| `saas-nextjs-CLAUDE.md` | Next.js 15 + Supabase + Stripe | SaaS 产品 |
| `go-microservice-CLAUDE.md` | Go + gRPC + PostgreSQL | 微服务后端 |
| `django-api-CLAUDE.md` | Django + DRF + Celery | Python API |
| `rust-api-CLAUDE.md` | Axum + SQLx + PostgreSQL | Rust 后端 |

```bash
# 复制模板到你的项目根目录
cp everything-claude-code/examples/saas-nextjs-CLAUDE.md ./CLAUDE.md
# 然后根据你的项目修改内容
```

---

## 六、使用建议

1. **不要全装** — 按需安装你用得到的语言和技能，全装会增加 token 开销
2. **从 3 个命令开始** — `/plan`、`/tdd`、`/code-review`，覆盖最核心的开发流程
3. **Hooks 可以挑着启用** — 看看 `hooks/hooks.json`，把不需要的注释掉
4. **模板别直接用** — `examples/` 里的模板要根据自己的项目改
5. **持续学习慢慢来** — 先熟悉基本命令，等用熟了再启用 Instinct 系统的 Hooks

---

## 链接

- GitHub: https://github.com/affaan-m/everything-claude-code
- 中文 README: https://github.com/affaan-m/everything-claude-code/blob/main/README.zh-CN.md

---

> 有问题欢迎讨论。这个项目更新很勤快（截至 2026 年 3 月已到 v1.7），社区活跃，30+ 贡献者，中文翻译覆盖了 80+ 文件。
