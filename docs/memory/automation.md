
# 自动化脚本

## 概览

`scripts/` 目录下的脚本用于记忆系统的日常维护，通过 `package.json` 注册为 pnpm 命令。

## 脚本清单

| 命令 | 脚本 | 用途 |
|------|------|------|
| `pnpm memory:snippet` | `scripts/capture_snippet.sh` | 创建经验碎片 |
| `pnpm memory:retro` | `scripts/new_retro.sh` | 创建复盘文档 |
| `pnpm memory:gc` | `scripts/memory_gc.sh` | 清理过期记忆 |

## capture_snippet.sh

创建一条新的经验碎片，自动归档到按月分类的目录。

```bash
pnpm memory:snippet -- "标题" [category] [source]
```

- **输出路径**: `docs/snippets/YYYY-MM/<slug>.md`
- **自动生成 frontmatter**: owner, created, category, source, status
- **默认值**: category=general, source=manual

## new_retro.sh

创建一份复盘文档，自动归档到按月分类的目录。

```bash
pnpm memory:retro -- "主题"
```

- **输出路径**: `docs/retrospectives/YYYY-MM/YYYY-MM-DD-<slug>.md`
- **自动生成 frontmatter**: owner, created, status(draft)

## memory_gc.sh

扫描 snippets/ 和 retrospectives/ 下超过指定天数未修改的文件，记录到 GC 日志。

```bash
pnpm memory:gc -- [天数]
```

- **默认阈值**: 90 天
- **判定方式**: 基于文件系统修改时间（mtime）
- **日志输出**: `docs/logs/memory-gc.md`
- **行为**: 仅扫描和报告，不自动删除文件
