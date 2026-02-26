
# 身份与权限约束

## 作用

本目录存储身份验证与访问控制相关信息:

- `boss-credentials.md`: Boss 的授权凭证引用
- `boss-tone.md`: Boss 专属语气与称呼规范
- `local-secrets.md`: 本地敏感信息（已 gitignore，不提交）

## 安全要求

1. 敏感信息仅存储引用，不存储明文
2. 所有访问记录至 `docs/logs/security.md`
3. 定期复核权限范围（每 90 天）

## 访问控制

- 仅 Boss 可修改此目录内容
- AI 执行时仅可读取，不可修改
