
# 元数据规范 (Metadata Schema)

## 用途

定义文档 YAML frontmatter 的核心字段，确保记忆系统可索引、可清理、可追溯。

## 核心字段

```yaml
---
owner: Boss              # 文档所有者
created: 2026-02-09      # 创建日期 (YYYY-MM-DD)
last_reviewed: 2026-02-28 # 最近复核日期 (YYYY-MM-DD)
status: active           # 状态: draft | active | archived | deprecated
---
```

### 字段说明

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `owner` | 是 | string | 文档所有者，通常为 `Boss` |
| `created` | 是 | date | 创建日期，格式 YYYY-MM-DD |
| `last_reviewed` | 推荐 | date | 最近复核日期，用于 GC 判定 |
| `status` | 是 | enum | 文档状态 |

### status 取值

| 值 | 含义 |
|----|------|
| `draft` | 草稿，尚未定稿 |
| `active` | 生效中，可被检索和引用 |
| `archived` | 归档，不再主动检索但保留 |
| `deprecated` | 已废弃，等待清理 |

## 扩展字段

不同类型文档可添加额外字段：

### Snippet 扩展

```yaml
category: general    # 分类标签
source: manual       # 来源: manual | ai | pair
```

### Retrospective 扩展

```yaml
sprint: 2026-Q1      # 所属迭代/周期
```

### ADR 扩展

```yaml
adr_status: Accepted  # Draft | Proposed | Accepted | Superseded | Deprecated
superseded_by: "003"  # 被哪个 ADR 替代
```

## 使用场景

- **GC 清理**: `memory_gc.sh` 通过文件修改时间判定过期，`last_reviewed` 作为人工复核标记
- **冲突消解**: 同层级文档冲突时，`last_reviewed` 较新者优先
- **索引检索**: 通过 `status` 过滤有效文档
