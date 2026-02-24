---
owner: Boss
last_reviewed: 2026-02-24
review_cycle_days: 30
status: active
---

# 技术栈与工具链

## 文档技术

### Markdown
**选择原因**:
- 轻量级、可读性强
- Git 友好，便于版本控制
- 跨平台支持好
- 易于维护和扩展

**使用规范**:
- 使用 CommonMark 标准
- 文件名使用小写字母和连字符（kebab-case）
- 统一使用 `.md` 扩展名

### VitePress
**当前状态**:
- 已采用 VitePress 构建文档站点
- 本地命令：`pnpm docs:dev` / `pnpm docs:build` / `pnpm docs:preview`

**选择原因**:
- 基于 Markdown，迁移成本低
- 站点导航与侧边栏配置简单
- 便于后续接入搜索与版本化

## 知识管理方法论

### PARA 方法
- **Projects**: 有明确截止日期的主动项目
- **Areas**: 持续关注的领域
- **Resources**: 参考资料和研究
- **Archives**: 已完成的项目和历史记录

**选择原因**:
- 结构清晰，易于导航
- 符合信息检索的自然思维
- 适合渐进式知识积累

## 开发工具

### 代码编辑器
- VSCode / Cursor
- Markdown 预览插件
- Git 集成

### 版本控制
- Git
- GitHub / GitLab

### AI 辅助
- OpenCode / Claude
- 自动化文档生成
- 代码审查辅助

## 未来可能引入的技术

- [ ] 全文搜索引擎（Algolia / MeiliSearch）
- [ ] 知识图谱可视化工具
- [ ] CI/CD 自动化部署

## 技术决策记录

重要的技术选型决策应该记录在 `/docs/memory/decisions/adr/` 目录下。

---
*最后更新: 2026-02-09*
