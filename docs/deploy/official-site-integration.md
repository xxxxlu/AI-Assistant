---
owner: Boss
last_reviewed: 2026-02-24
review_cycle_days: 30
status: active
---

# 官网接入指南（非 Vue 项目）

## 目标

把当前技能文档站作为静态子站挂到官网，例如：`https://your-domain.com/ai-brain/`。

## 一次性构建

```bash
pnpm docs:build:ai-brain
```

构建产物目录：

`docs/.vitepress/dist/`

## 官网接入方式

### 1. Nginx（推荐）

将构建产物上传到：

`/var/www/official-site/ai-brain/`

Nginx 配置：

```nginx
location /ai-brain/ {
  alias /var/www/official-site/ai-brain/;
  index index.html;
  try_files $uri $uri/ /ai-brain/index.html;
}
```

### 2. Next.js（官网主站是 Next）

方案 A（静态复制）：

1. 把 `docs/.vitepress/dist` 复制到 `public/ai-brain/`
2. 访问路径：`/ai-brain/`

方案 B（Nginx 反向代理）：

- Next.js 继续服务主站
- 由网关层（Nginx）把 `/ai-brain/` 转到静态目录

### 3. Java/Spring Boot

1. 将 `dist` 目录内容复制到：
`src/main/resources/static/ai-brain/`
2. 访问路径：`/ai-brain/`

如果使用网关，请确保 SPA 回退到：

`/ai-brain/index.html`

## 官网导航建议

在官网导航增加：

- 名称：`AI 第二大脑`
- 链接：`/ai-brain/skills/all`

## 发布检查清单

1. `/ai-brain/` 首页可打开
2. `/ai-brain/skills/all` 可打开
3. 刷新子页面不 404（已配置回退）
4. 页面内跳转路径正常
