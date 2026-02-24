#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <title> [category] [source]"
  exit 1
fi

title="$1"
category="${2:-general}"
source="${3:-manual}"

month_dir="docs/snippets/$(date +%Y-%m)"
mkdir -p "$month_dir"

slug="$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')"
[[ -z "$slug" ]] && slug="snippet-$(date +%H%M%S)"

file="$month_dir/$slug.md"
if [[ -f "$file" ]]; then
  file="$month_dir/${slug}-$(date +%H%M%S).md"
fi

cat > "$file" <<MD
---
owner: Boss
created: $(date +%F)
category: $category
source: $source
status: active
---

# Snippet: $title

## 场景

-

## 动作

1.
2.

## 结果

-

## 复用条件

-
MD

echo "Created: $file"
