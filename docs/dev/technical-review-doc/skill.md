---
name: technical-review-doc
description: Generate an API contract and technical review document in Chinese after requirement review. Use when APIs are involved and the team needs contract-level alignment before real integration.
---

# 技能：接口契约与技术评审文档

## Overview

当需求进入“接口依赖”阶段时，输出可评审、可联调、可追责的接口契约文档，作为前后端一致性的基线。

## Workflow

### 1. 收集最小输入

- 版本号与关联技术方案路径
- 前后端负责人
- 涉及接口清单（路径、方法、用途）
- 鉴权、分页、错误码等全局约定

信息不完整时：优先最少追问；无法确认时标注 `TBD`。

### 2. 生成评审文档

1. 使用模板 `tech-doc-template.md`
2. 输出路径建议：`manager-tech-docs/{{version}} 接口契约与技术评审.md`
3. 保留模板章节，不删除关键字段

### 3. Gate 判定

- 无接口依赖：回写为 `Static-first`，不阻塞前端静态开发
- 有接口依赖：必须完成接口字段、错误码、分页、鉴权对齐

### 4. 质量检查

- 所有接口条目具备“用途 + 状态 + 责任人”
- 关键 `TBD` 均有负责人和回填时点
- 可直接用于联调排期

## Resources

- `tech-doc-template.md`：接口契约与技术评审模板
