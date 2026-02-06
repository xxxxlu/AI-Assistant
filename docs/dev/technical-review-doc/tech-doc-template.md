# 接口契约与技术评审 - {{version}}

---

## 1. 基本信息

| 项目 | 内容 |
| --- | --- |
| 项目版本 | {{version}} |
| API 版本 | {{api_version}} |
| 后端负责人 | {{backend_owner}} |
| 前端负责人 | {{frontend_owner}} |
| 评审日期 | {{review_date}} |
| 关联技术方案 | {{tech_doc_link_or_path}} |

---

## 2. 接口状态与 Gate 决策

| 项目 | 说明 |
| --- | --- |
| 是否涉及接口 | 是 / 否 |
| 接口当前状态 | 无接口依赖 / Static-first / 接口已确认 |
| 接口契约状态 | 未开始 / 评审中 / 已评审通过 |
| 接口回切条件 | {{api_ready_condition}} |

---

## 3. 范围与目标

### 3.1 覆盖的需求 / 功能点

| 模块 / 功能 | 描述 | 关联页面 / 入口 | 备注 |
| --- | --- | --- | --- |
| {{module_1}} | {{feature_1}} | {{page_1}} | {{note_1}} |

### 3.2 不在本次范围（Out of Scope）

- {{out_scope_1}}

---

## 4. 接口概览

| 接口名称 | 接口路径 | 请求方式 | 用途描述 | 关联功能 | 状态 |
| --- | --- | --- | --- | --- | --- |
| {{api_name_1}} | {{api_path_1}} | {{api_method_1}} | {{api_desc_1}} | {{feature_ref_1}} | {{api_status_1}} |

---

## 5. 全局接口约定

- 字段命名规范：{{naming_convention}}
- 时间字段格式：{{time_format}}
- 金额单位（如有）：{{money_unit}}
- 分页模式：{{pagination_mode}}
- 鉴权方式：{{auth_method}}

### 5.1 通用响应结构（如有）

```json
{{common_response_schema}}
```

### 5.2 错误码约定

| 错误码 | 含义 | 前端处理策略 |
| --- | --- | --- |
| {{error_code_1}} | {{error_message_1}} | {{error_handle_1}} |

---

## 6. 字段级契约（关键接口必填）

### 6.1 请求字段

| 接口 | 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| {{api_name_1}} | {{req_field_1}} | {{req_type_1}} | Y/N | {{req_desc_1}} |

### 6.2 响应字段

| 接口 | 字段 | 类型 | 可空 | 说明 |
| --- | --- | --- | --- | --- |
| {{api_name_1}} | {{resp_field_1}} | {{resp_type_1}} | Y/N | {{resp_desc_1}} |

---

## 7. 联调与验收

- 联调开始时间：{{joint_start}}
- 联调完成标准：{{joint_done_criteria}}
- 验收人：{{acceptance_owner}}

---

## 8. 风险与待办

| 风险 / TBD | 影响 | 负责人 | 预计解决时间 |
| --- | --- | --- | --- |
| {{risk_or_tbd_1}} | {{impact_1}} | {{owner_1}} | {{eta_1}} |
