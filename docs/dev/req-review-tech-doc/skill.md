---
name: req-review-tech-doc
description: Generate a Chinese front-end technical document from requirement review notes. Use when asked to output versioned "技术文档/前端技术方案" in Markdown with sections for version overview, requirements list, timeline/workflow, and technical design, and when the file must be placed under manager-tech-docs with a version-based filename.
---

# 需求评审输出技术文档

## Overview

把需求评审内容整理为固定结构的中文技术文档，并落地为新的 Markdown 文件，便于评审、联调和发布前对齐。

## Workflow

### 1. 收集输入信息

- 版本号、迭代周期、负责人
- 目标（主要/次要）
- 需求清单（新增功能/优化任务/Bug修复）
- 排期与流程
- 技术方案设计（组件设计/API变更/三方库/风险点）

信息不完整时：优先提出最少问题补齐；若仍缺失，用 `TBD` 标记并保留占位。

### 2. 对齐现有代码习惯（用于“实现注意点”）

- 列表页结构、搜索区、公共组件与列表 render 复用方式：从同模块页面或相似页面抽取
- 变量命名规范：参考同模块已实现的命名风格
- 路由权限：确认路由配置与权限点是否需要新增或调整，是否多国家
- 图表：确认是否需要新增 G2Plot/ECharts，优先复用已有封装
- 全局公共组件：判断是否需要新增到全局组件库
- 确认弹窗规范：是否需要新增弹窗是否需要GoogleVerify
- 模块，文件划分

可用快速检索辅助定位（按实际目录调整）

### 3. 生成技术文档

1. 复制模板 `tech-doc-template.md` 到 `manager-tech-docs/{{version}} 技术文档.md`。
2. 填充所有占位符，保持模板中的中英文标题与表格结构不变。
3. 需求清单与排期使用表格；流程用有序列表。

### 4. 质量检查

- 输出必须为中文内容，文件路径与命名符合 `manager-tech-docs/{{version}} 技术文档.md`
- 无空占位符；缺失项用 `TBD`
- “实现注意点”已结合代码习惯检查并填充

## Resources

### 技术文档资源
- `tech-doc-template.md`: 技术文档模板（包含章节与表格）
