#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <topic>"
  exit 1
fi

topic="$1"
month_dir="docs/retrospectives/$(date +%Y-%m)"
mkdir -p "$month_dir"

slug="$(echo "$topic" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')"
[[ -z "$slug" ]] && slug="retro-$(date +%H%M%S)"

file="$month_dir/$(date +%F)-$slug.md"
if [[ -f "$file" ]]; then
  file="$month_dir/$(date +%F)-${slug}-$(date +%H%M%S).md"
fi

cat > "$file" <<MD
---
owner: Boss
created: $(date +%F)
status: draft
---

# Retrospective: $topic

## 时间范围

- 开始：
- 结束：

## 目标与结果

- 目标：
- 结果：

## 做得好的

1.

## 出现的问题

1.

## 根因分析

1.

## 行动项（必须可执行）

| 行动项 | 负责人 | 截止日期 | 状态 |
| --- | --- | --- | --- |
|  |  |  | TODO |
MD

echo "Created: $file"
