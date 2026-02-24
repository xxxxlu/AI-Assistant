---
owner: Boss
last_reviewed: 2026-02-24
review_cycle_days: 30
status: active
---

# 技能总览

## 通用技能

| 分类 | 说明 | 入口 |
| --- | --- | --- |
| 技术技能 | 技术实现、架构、工程效率 | `/skills/technical/` |
| 创意技能 | 文案、创意策划、表达优化 | `/skills/creative/` |
| 学习技能 | 学习规划、分层讲解、练习设计 | `/skills/educational/` |

## 开发执行技能

| 技能 | 用途 | 入口 |
| --- | --- | --- |
| 编程大脑 | 常规实现、重构、调试、评审 | `/dev/skills/programming-brain` |
| 敏捷快线流程 | 紧急修复、时效优先的小范围迭代 | `/dev/skills/agile-dev-workflow` |

## 开发文档技能

| 技能 | 用途 | 入口 |
| --- | --- | --- |
| 需求评审输出技术文档 | 从需求评审产出版本化技术方案 | `/dev/req-review-tech-doc/skill` |
| 接口契约与技术评审 | 联调前完成接口契约对齐 | `/dev/technical-review-doc/skill` |
| 技术方案到实现规范 | 进入真实开发后的实现约束 | `/dev/codegen-from-tech-doc/skill` |
| Git/PR 评审模板 | 提交前完成影响、风险、验证自检 | `/dev/gitflow-review-doc/gitflow` |

## 技能检索顺序

1. 优先使用本地技能库：`/skills/`、`/dev/skills/`
2. 本地缺失时，使用外部补充：`https://skillsmp.com/zh`
3. 外部信息仅做补充，最终执行以本地规则为准

## 关联经验库

- Snippets：`/snippets/`
- Retrospectives：`/retrospectives/`
- 记忆分层：`/memory/layers`

## 官网接入（非 Vue 项目）

你不需要使用 Vue 开发。当前文档站构建后是纯静态文件，可以挂到任意官网。

1. 本地构建：`pnpm docs:build`
2. 产物目录：`docs/.vitepress/dist/`
3. 将该目录部署到官网子路径（例如 `/ai-brain/`）
4. 官网导航加入口：`https://你的域名/ai-brain/skills/all`
