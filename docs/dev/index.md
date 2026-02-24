---
owner: Boss
last_reviewed: 2026-02-24
review_cycle_days: 30
status: active
---

# 开发文档中心

## 目录导航

- 需求评审输出：`/dev/req-review-tech-doc/`
- 接口契约评审：`/dev/technical-review-doc/`
- 技术方案到实现：`/dev/codegen-from-tech-doc/`
- Git/PR 评审模板：`/dev/gitflow-review-doc/`
- 执行技能：`/dev/skills/`

## 建议顺序

1. 先做需求评审与方案输出。
2. 若涉及接口，补齐接口契约评审。
3. 进入实现阶段前确认开发 Gate。
4. 提交 PR 前按 Git/PR 模板自检。

## 治理规则

1. 模板文件保持结构稳定，避免频繁改字段。
2. 流程规则变更后，需同步更新相关索引页。
3. 过期文档按 `last_reviewed` 和 `review_cycle_days` 复核。
