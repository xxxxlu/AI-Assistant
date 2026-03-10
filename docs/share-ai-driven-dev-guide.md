---
id: share-ai-driven-dev-guide
title: AI 驱动开发实战指南
category: share
status: active
owner: boss
created_at: 2025-06-01
updated_at: 2026-03-10
tags: [AI, 开发指南, Go, 团队协作, 从零开始, Claude Code]
---

# AI 驱动开发实战指南：零基础团队从零到生产

> **定位**：写给零基础团队的可落地操作手册。不讲概念，只讲"打开电脑第一步干什么"。

---

## 为什么需要这个指南

全员用 AI 从零写代码，四个坑必踩：

| 问题 | 表现 | 后果 |
|------|------|------|
| **上下文爆炸** | 聊 20 轮后 AI 开始"失忆"，丢字段、漏 import | 返工，越到后期越严重 |
| **架构漂移** | 每次对话风格不同，错误处理三种写法 | 代码库碎片化，无法维护 |
| **知其然不知其所以然** | AI 生成的代码能跑但不懂为什么 | 出 bug 不会排查，改一处崩三处 |
| **隐性技术债** | 漏掉边界检查、并发安全、错误处理 | 积累到某个点集中爆发 |

**核心认知：AI 不是"会自己干活的程序员"，而是"什么都会但没有记忆的实习生"。你给它的规范越清晰、任务越小、检查越勤，它的产出就越可靠。**

---

## 第一层：Day 1 能落地的三件事

### 1. 写一份 CLAUDE.md（最重要的一件事）

`CLAUDE.md` 放在项目根目录，AI 每次对话都会先读它。**这一个文件解决 80% 的"风格不统一"问题。**

它的作用：
- 告诉 AI 项目结构长什么样——不会乱建文件
- 告诉 AI 编码规范是什么——不会每次换风格
- 告诉 AI 已有哪些公共模块——不会重复造轮子

> 完整模板见本文 [附录 A：Go 项目 CLAUDE.md 模板](#附录-a-go-项目-claudemd-模板)，可直接复制到项目根目录修改使用。

### 2. 做一个黄金参考实现

让最懂业务的人（带着 AI 也行）写好一个完整的 CRUD 模块，比如"用户管理"：

```
internal/
  handler/user.go      → HTTP 入口，参数校验 + 响应
  service/user.go      → 业务逻辑
  repo/user.go         → 数据库访问
  model/user.go        → 数据模型
  handler/user_test.go → 测试示范
```

覆盖以下标准写法：
- handler → service → repo 三层调用链
- `fmt.Errorf("xxx: %w", err)` 错误包装
- 统一响应格式 `{"code": 0, "msg": "ok", "data": {}}`
- 请求参数校验（binding tag）
- 单元测试（table-driven）

**之后所有人（包括 AI）都说"参照 user 模块的模式来写"——比说一千条规则有效。**

### 3. 每次只让 AI 做一个小任务

```
// 错误示范
❌ "帮我把整个订单模块写了"

// 正确示范
✅ "参照 user handler 的模式，写一个 CreateOrder 的 handler"
✅ "给 OrderService.Create 方法写单元测试"
✅ "给 order 表写 golang-migrate 的 migration 文件"
```

拆小的好处：
- 上下文不会爆（一次对话只涉及几个文件）
- 代码质量可控（一个函数一个函数地验证）
- Review 容易（小 PR 比大 PR 好审十倍）

---

## 第二层：一周内搭好的三件事

### 4. 安装 Everything Claude Code（团队共用配置）

[Everything Claude Code (ECC)](https://github.com/affaan-m/everything-claude-code) 是一套 Claude Code 的工程化增强配置，包含专家代理、技能、规则和自动化 Hooks。

**最小安装（5 分钟）**：

```bash
# 克隆仓库
git clone https://github.com/affaan-m/everything-claude-code.git
cd everything-claude-code

# 安装 Go 语言规则
./install.sh golang

# 复制核心 Agent（按需选择）
cp agents/code-reviewer.md ~/.claude/agents/    # 代码审查
cp agents/tdd-guide.md ~/.claude/agents/        # 测试驱动开发
cp agents/build-error-resolver.md ~/.claude/agents/  # 修编译错误
```

**或者用插件方式安装**：

```bash
# 在 Claude Code 里运行
/plugin marketplace add affaan-m/everything-claude-code
/plugin install everything-claude-code@everything-claude-code
```

**团队最小启动组合——两个命令就够**：

| 命令 | 干什么 | 什么时候用 |
|------|--------|-----------|
| `/plan` | AI 帮你拆解任务、出实现方案，你确认后再动手 | 拿到需求后的第一步 |
| `/go-review` | Go 专项代码审查，检查并发安全、错误处理、规范 | 写完代码后 |

**进阶组合（熟练后再加）**：

| 命令 | 干什么 | 什么时候用 |
|------|--------|-----------|
| `/tdd` | 先写测试再写代码，保证 80%+ 覆盖率 | 写新功能时 |
| `/go-build` | 自动分析并修复编译错误 | `go build` 失败时 |
| `/compact` | 压缩对话上下文，释放窗口空间 | 对话过长快失忆时 |

> 更多 ECC 的介绍见 [Everything Claude Code 详解](/share-everything-claude-code)。

### 5. 建立 AI Code Review 流程

**每个 PR 在人工 review 之前，先让 AI 过一遍。**

操作方式：在 Claude Code 里直接说——

```
review 这个 PR 的所有改动，重点检查：
1. 是否有 goroutine 泄露风险
2. 错误是否都正确处理了（有没有 _ = err）
3. 是否复用了 pkg/ 里的公共模块
4. SQL 是否有注入风险（是否用了参数化查询）
5. 是否符合 CLAUDE.md 里定义的项目结构
```

**AI Review 不替代人工 Review**，但它能提前过滤 70% 的低级问题。人工 Review 就只需要关注：
- 业务逻辑对不对
- 接口设计合不合理
- 有没有更好的方案

**推荐流程**：

```
开发完成 → AI Review（自动） → 修复问题 → 发 PR → 人工 Review → 合并
```

### 6. 前端同学的 Go 速查卡

前端写 Go 最容易踩的坑，整理成一页纸发给大家：

| 坑 | 前端直觉 | Go 正确做法 |
|----|---------|------------|
| **空值** | `undefined` / `null` 随便用 | Go 是零值系统：`""` / `0` / `false` / `nil`。指针为 nil 时调用方法会 panic |
| **错误处理** | `try { } catch { }` 一包到底 | `if err != nil { return fmt.Errorf("xxx: %w", err) }` 每一层都要处理 |
| **并发** | `Promise.all([...])` | `goroutine` + `channel` 或 `errgroup`。忘记回收 goroutine = 内存泄露 |
| **引用 vs 值** | JS 对象都是引用传递 | Go struct 是值传递。要改原值需要用指针 `*User`。slice 和 map 是引用类型 |
| **包管理** | `npm install axios` | `go get github.com/xxx/yyy`，然后 `go mod tidy` 整理依赖 |
| **类型** | 动态类型，随便赋值 | 静态类型，编译期检查。用 `interface{}` 要做类型断言 |
| **字符串拼接** | 模板字符串 `` `${}` `` | `fmt.Sprintf("hello %s", name)` 或 `strings.Builder` |
| **JSON** | 天然支持 | 需要 struct tag：`` `json:"field_name"` ``，字段必须首字母大写才能序列化 |

---

## 第三层：持续受益的三件事

### 7. 上下文管理策略

**上下文爆炸是 AI 开发的头号杀手。** 不是 AI 变笨了，是它"忘了"前面说的话。

**策略：一个会话只做一件事**

```
// 错误做法：一个会话从建表写到部署
❌ 会话 1：建表 → 写 model → 写 repo → 写 service → 写 handler → 写测试 → 修 bug

// 正确做法：每件事一个干净的会话
✅ 会话 1：建表 + migration
✅ 会话 2：写 model + repo
✅ 会话 3：写 service + 业务逻辑
✅ 会话 4：写 handler + 路由
✅ 会话 5：写测试
```

**对话轮次警戒线**：

| 轮次 | 状态 | 操作 |
|------|------|------|
| < 15 轮 | 正常 | 继续写 |
| 15-25 轮 | 注意 | 用 `/compact` 压缩上下文 |
| > 25 轮 | 危险 | 开新会话，把 CLAUDE.md + 当前文件喂进去 |

**开新会话的启动模板**：

```
我在开发 [模块名]，请先读 CLAUDE.md 了解项目规范。
当前进度：[已完成的部分]。
接下来要做：[具体的小任务]。
参照 internal/handler/user.go 的模式来写。
```

### 8. AI 生成代码的验证清单

**每次 AI 写完代码，过一遍这个清单**：

#### 基础检查（每次必做）

```
□ go build ./... 通过
□ go vet ./... 通过（检查常见错误模式）
□ 有没有 _ = err（错误必须处理）
□ 有没有复用 pkg/ 里已有的模块（不要重复造轮子）
```

#### 进阶检查（涉及对应场景时做）

```
□ 数据库操作是否用了事务（多表写入场景）
□ SQL 是否参数化（防注入）
□ goroutine 是否有退出机制（有 context 控制或 done channel）
□ go test -race ./... 通过（检测竞态条件）
□ 敏感数据是否从环境变量读取（不要硬编码）
```

#### 终极检查（上线前）

```
□ 有单元测试且覆盖核心逻辑
□ 错误信息不泄露内部实现细节
□ API 有限流和认证中间件
□ 日志打了关键操作（但没打敏感数据）
```

### 9. 渐进式技能树

不要一步到位，按阶段来：

**第 1 周：能用 AI 写出能跑的代码**

```
目标：跑通第一个 CRUD
工具：CLAUDE.md + 参考实现 + 拆小任务
验收：go build 通过，接口能用 curl 调通
```

**第 2-3 周：能用 AI 写出能上线的代码**

```
目标：代码有基本质量保障
工具：/go-review + PR Review 流程 + 验证清单
验收：go vet 零警告，错误处理完整，有基础测试
```

**第 4 周+：能用 AI 高效迭代**

```
目标：形成稳定的开发节奏
工具：/plan + /tdd + 上下文管理策略
验收：新需求从规划到上线有清晰流程，测试覆盖率 > 60%
```

**第 8 周+：AI 成为团队加速器**

```
目标：AI 融入日常工作流
工具：全套 ECC + 自定义 Hooks + 团队知识库
验收：开发效率稳定提升，技术债可控
```

---

## 常见问题

### Q：AI 写的代码能直接用于生产吗？

**不能直接用，但 AI + Review 的组合可以。** AI 负责"写"，人负责"审"和"决策"。就像实习生写的代码，你不会不看就合并，但有实习生帮你写初稿，效率确实高很多。

### Q：团队里谁都不懂 Go，能行吗？

**至少需要一个人能读懂 Go 代码**（不需要精通）。这个人负责：
- 写好 CLAUDE.md 和参考实现（可以让 AI 辅助写，但自己要能判断对不对）
- Review AI 生成的代码
- 出了问题能定位到哪个模块

### Q：上下文爆了怎么救？

1. 先试 `/compact` 压缩
2. 不行就开新会话，用启动模板重新给上下文
3. 治本之策：养成"一个会话一件事"的习惯

### Q：ECC 必须装吗？

不必须。**CLAUDE.md + 参考实现 + 拆小任务** 这三件事不依赖任何工具，Day 1 就能用。ECC 是锦上添花，让流程更自动化。建议先裸跑一周，感受到痛点后再装。

---

## 关联文档

- [Everything Claude Code 详解](/share-everything-claude-code) — ECC 的完整介绍与安装指南
- [敏捷快线流程](/dev/skills/agile-dev-workflow) — 紧急修复与快速迭代的流程规范
- [编程大脑](/dev/skills/programming-brain) — AI 辅助编程的执行规范与质量约束

---

## 附录 A：Go 项目 CLAUDE.md 模板

> 复制下面的内容到项目根目录的 `CLAUDE.md`，按实际情况修改。

````markdown
# [项目名称]

## 技术栈
- Go 1.22+
- Web 框架：Gin（或 Echo / Fiber，按实际选择）
- ORM/数据库：GORM（或 sqlx / ent，按实际选择）
- 数据库：PostgreSQL
- 缓存：Redis
- 部署：Docker Compose

## 项目结构

```
cmd/
  server/main.go       → 服务入口
internal/
  handler/             → HTTP 处理层（参数校验 + 调用 service + 返回响应）
  service/             → 业务逻辑层（核心逻辑全部在这里）
  repo/                → 数据访问层（只写数据库操作，不写业务逻辑）
  model/               → 数据模型（数据库模型 + 请求/响应 DTO）
  middleware/           → 中间件（认证、日志、限流、跨域）
  config/              → 配置加载
pkg/
  response/            → 统一响应封装
  errcode/             → 错误码定义
  utils/               → 通用工具函数
migrations/            → 数据库迁移文件
scripts/               → 构建和部署脚本
```

## 编码规范（强制遵守）

### 错误处理
- 永远处理错误，禁止 `_ = err`
- 用 `fmt.Errorf("描述: %w", err)` 逐层包装
- handler 层统一转换为 HTTP 响应，不要把内部错误直接暴露给客户端

### API 响应格式
```json
{
  "code": 0,
  "msg": "success",
  "data": {}
}
```
- code 为 0 表示成功，非 0 表示错误（错误码定义在 pkg/errcode/）
- 分页响应额外包含 total、page、page_size 字段

### 命名规范
- 文件名：snake_case（user_handler.go）
- 变量/函数参数：camelCase
- 导出函数/类型：PascalCase
- 常量：PascalCase 或 ALL_CAPS（按语义）
- 包名：小写单词，不用下划线

### 禁止事项
- 禁止在 handler 层直接写 SQL 或业务逻辑
- 禁止使用 panic（除 init() 或不可恢复错误）
- 禁止硬编码配置（数据库连接串、密钥等从环境变量读）
- 禁止引入未使用的依赖

### 测试
- 测试文件与源文件同目录，命名 xxx_test.go
- 使用 table-driven tests 模式
- 核心业务逻辑必须有单元测试

## 已有公共模块（优先复用，不要重复实现）
- pkg/response   → 统一响应封装，使用 response.OK(c, data) 和 response.Error(c, errcode)
- pkg/errcode    → 错误码定义
- internal/middleware/auth.go  → JWT 认证中间件
- internal/middleware/logger.go → 请求日志中间件

## 参考实现
- 新模块请参照 internal/handler/user.go → service/user.go → repo/user.go 的模式
- 测试请参照 internal/handler/user_test.go 的 table-driven 模式

## 数据库
- 连接串从环境变量 DB_DSN 读取
- 迁移工具：golang-migrate
- 迁移文件放在 migrations/ 目录

## 常用命令
```bash
go build ./...          # 编译
go test ./...           # 运行测试
go test -race ./...     # 带竞态检测的测试
go vet ./...            # 静态分析
go mod tidy             # 整理依赖
```
````
