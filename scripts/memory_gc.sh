#!/usr/bin/env bash
set -euo pipefail

DAYS="${1:-90}"
scan_paths=("docs/snippets" "docs/retrospectives")

# shellcheck disable=SC2016
stale_files=$(find "${scan_paths[@]}" -type f -name '*.md' ! -name 'index.md' ! -name 'template.md' ! -name 'README.md' -mtime +"$DAYS" 2>/dev/null || true)
stale_count=$(echo "$stale_files" | sed '/^$/d' | wc -l | tr -d ' ')

now="$(date '+%F %H:%M')"
log_file="docs/logs/memory-gc.md"

if [[ ! -f "$log_file" ]]; then
  cat > "$log_file" <<LOG
# 记忆 GC 日志

## 记录模板

| 时间 | 扫描范围 | 规则 | 待复核数量 | 备注 |
| --- | --- | --- | --- | --- |
LOG
fi

printf '| %s | snippets + retrospectives | >%s 天未更新 | %s | 自动扫描 |\n' "$now" "$DAYS" "$stale_count" >> "$log_file"

echo "GC scanned. stale_count=$stale_count"
if [[ "$stale_count" -gt 0 ]]; then
  echo "Stale files:"
  echo "$stale_files"
fi
