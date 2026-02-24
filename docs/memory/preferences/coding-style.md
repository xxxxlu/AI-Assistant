---
owner: Boss
last_reviewed: 2026-02-24
review_cycle_days: 30
status: active
---

# 编码风格偏好

## 生效范围

- 默认适用于所有编码类任务。
- 若目标项目已有明确规范，优先遵循项目规范。

## 强偏好（默认生效）

1. 语言选择
- 前端优先 TypeScript。
- 后端优先 Python / Node.js（按项目现状选）。

2. 命名规范
- 文件名：`kebab-case`
- 变量/函数：`camelCase`
- 常量：`UPPER_SNAKE_CASE`
- 类/组件：`PascalCase`

3. 格式规范
- 缩进：2 空格
- 字符串：JS/TS 默认单引号
- 分号：使用分号
- 行宽：尽量控制在 100 字符以内

4. 导出规范
- 默认优先命名导出。
- 默认导出仅用于入口组件或框架约定场景。

5. 注释规范
- 仅在复杂逻辑、边界处理、权衡决策处写注释。
- 不写“变量赋值”这类低价值注释。

6. 错误处理
- 外部 I/O、网络、文件、数据库调用必须显式错误处理。
- 错误信息要可定位，避免吞错。

7. 提交规范
- 使用 Conventional Commits：`feat/fix/docs/refactor/test/chore`。
- 单次提交保持单一意图，避免夹带无关改动。

## 禁止项

- 无关文件的全量格式化。
- 在代码或文档中写入密钥、密码、Token 明文。
- 未确认接口字段时直接硬编码业务含义。

## 关联文档

- 开发技能：`/dev/skills/programming-brain`
- 快线流程：`/dev/skills/agile-dev-workflow`
