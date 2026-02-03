# 前端技术方案 - {{version}}

## 1. 版本概述 (Version Overview)

| 项目 | 内容 |
| --- | --- |
| 迭代版本号 | {{version}} |
| 迭代周期 | {{iteration_period}} |

本次迭代核心目标：

主要目标：
1. {{primary_goal_1}}

次要目标：
1. {{secondary_goal_1}}

## 2. 需求清单 (Requirements List)

### 2.1 新增功能 (New Features)

| 功能模块 | 需求描述 | 前端负责人 | 备注/UI链接 |
| --- | --- | --- | --- |
| {{module_1}} | {{requirement_1}} | {{owner_1}} | {{note_1}} |

### 2.2 优化任务 (Optimization Tasks)

| 优化内容 | 描述 | 前端负责人 |
| --- | --- | --- |
| {{optimization_1}} | {{optimization_desc_1}} | {{owner_1}} |

### 2.3 Bug修复 (Bug Fixes)

| Bug描述 | 涉及页面/模块 | 前端负责人 |
| --- | --- | --- |
| {{bug_1}} | {{bug_scope_1}} | {{owner_1}} |

## 3. 迭代详细排期与流程 (Timeline & Workflow)

### 3.1 详细排期 (Schedule)

| 阶段 | 开始日期 | 结束日期 | 天数 | 负责人 | 产出物/里程碑 |
| --- | --- | --- | --- | --- | --- |
| 技术方案评审 | {{start_review}} | {{end_review}} | {{days_review}} | {{owner_review}} | 技术方案文档、任务分解 |
| 开发 | {{start_dev}} | {{end_dev}} | {{days_dev}} | {{owner_dev}} | 功能代码、单元测试 |
| 联调 | {{start_joint}} | {{end_joint}} | {{days_joint}} | {{owner_joint}} | 联调通过的功能 |
| 提测 | {{start_test}} | {{end_test}} | {{days_test}} | {{owner_test}} | 提测包 |
| 产品验收 | {{start_uat}} | {{end_uat}} | {{days_uat}} | {{owner_uat}} | 验收报告 |
| 正式发布 | {{start_release}} | {{end_release}} | {{days_release}} | {{owner_release}} | 生产环境部署、发布通知 |

### 3.2 开发流程 (Workflow)

1. 分支策略：基于 `test` 分支创建功能分支 `feature/{{version}}`。
2. 代码审查：开发完成后，在功能分支自测通过后合并到 `test`。
3. 提测：所有功能合并 `test` 后更新版本号，安排测试。
4. Bug修复：在测试周期内及时修复并回归验证。
5. 前端交叉 review：确认大家理解改动与潜在影响。
6. 发布：测试通过后合并至 `master` 分支。
7. 发布后复盘：线上观察用户反馈与接口告警。

## 4. 技术方案设计 (Technical Design) - 复杂功能必填

- 设计版本：{{version}}
- 组件设计：{{component_design}}
- API变更：{{api_changes}}
- 第三方库：{{third_party}}
- 风险点：{{risks}}
- 实现注意点（按现有代码习惯核对）：
  - 列表页结构、搜索区、公共组件与列表 render 函数复用方式
  - 变量命名规范（与现有模块保持一致）
  - 新增路由权限与权限点清单
  - 图表是否需要新增 G2Plot/ECharts，以及已有封装优先复用
  - 是否需要新增全局公共组件
  - 确认弹窗规范（优先使用全局确认组件，避免直接使用 window.confirm）
