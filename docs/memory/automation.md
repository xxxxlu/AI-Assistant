---
owner: Boss
last_reviewed: 2026-02-24
review_cycle_days: 30
status: active
---

# 记忆自动化

## 目标

把经验沉淀流程脚本化，降低“知道该记录但没时间记录”的成本。

## 命令

1. 新建 snippet

```bash
pnpm memory:snippet -- "标题" [category] [source]
```

2. 新建 retrospective

```bash
pnpm memory:retro -- "主题"
```

3. 执行记忆 GC（默认 90 天）

```bash
pnpm memory:gc -- [days]
```

## 输出位置

- snippets：`docs/snippets/YYYY-MM/`
- retrospectives：`docs/retrospectives/YYYY-MM/`
- gc 日志：`docs/logs/memory-gc.md`

## 说明

GC 默认只做“待复核标记”，不会自动删除文件。
