# 编码风格偏好

## 编程语言偏好

### 前端开发
- **首选**: TypeScript
- **备选**: JavaScript (ES6+)
- **原因**: 类型安全，提升代码可维护性

### 后端开发
- **首选**: Node.js / Python
- **备选**: 根据项目需求
- **原因**: 生态丰富，开发效率高

## 命名规范

### 文件命名
- **推荐**: `kebab-case`（短横线分隔）
  - 示例: `user-profile.md`, `tech-stack.md`
- **避免**: 空格、特殊字符、中文

### 变量命名
- **JavaScript/TypeScript**: `camelCase`
  ```javascript
  const userName = 'John';
  const getUserProfile = () => {};
  ```

- **常量**: `UPPER_SNAKE_CASE`
  ```javascript
  const MAX_RETRY_COUNT = 3;
  const API_BASE_URL = 'https://api.example.com';
  ```

- **类/组件**: `PascalCase`
  ```javascript
  class UserProfile {}
  const UserCard = () => {};
  ```

### 目录命名
- **小写字母 + 连字符**: `user-management/`, `api-client/`
- **保持简短有意义**: 避免过长的目录名

## 代码格式化

### 缩进
- **空格数**: 2 个空格
- **不使用**: Tab 键

### 引号
- **字符串**: 单引号 `'hello'`
- **JSX**: 双引号 `<div className="container">`
- **模板字符串**: 反引号 `` `Hello ${name}` ``

### 分号
- **使用分号**: 是（明确语句结束）
- **保持一致**: 整个项目统一风格

### 行宽
- **最大字符数**: 80-100 字符
- **过长换行**: 使用合理的换行和缩进

## 注释风格

### 单行注释
```javascript
// 这是单行注释，用于简短说明
const result = calculate(); // 行尾注释
```

### 多行注释
```javascript
/**
 * 函数功能说明
 * @param {string} name - 用户名
 * @param {number} age - 年龄
 * @returns {Object} 用户对象
 */
function createUser(name, age) {
  return { name, age };
}
```

### 文档注释
- 使用 JSDoc 风格
- 重要函数必须有注释
- 复杂逻辑需要解释原因

## 代码组织

### 导入顺序
```javascript
// 1. 第三方库
import React from 'react';
import axios from 'axios';

// 2. 内部模块
import { utils } from '@/utils';
import { config } from '@/config';

// 3. 相对路径
import Header from './Header';
import './styles.css';
```

### 导出方式
- **推荐**: 命名导出（便于重构和搜索）
  ```javascript
  export const UserProfile = () => {};
  export const getUserData = () => {};
  ```

- **默认导出**: 仅用于主组件/入口
  ```javascript
  export default App;
  ```

## Git 提交规范

### 提交信息格式
```
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型 (type)
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具配置

### 示例
```
feat(memory): 添加编码风格偏好文档

- 定义命名规范
- 添加代码格式化规则
- 说明注释风格
```

## 最佳实践

### DRY 原则
- Don't Repeat Yourself
- 复用代码，避免重复

### 单一职责
- 函数/类只做一件事
- 保持简短易读

### 可读性优先
- 优先考虑代码可读性
- 必要时添加注释
- 使用有意义的命名

### 错误处理
```javascript
try {
  const data = await fetchData();
  return processData(data);
} catch (error) {
  console.error('Error fetching data:', error);
  throw new Error('Failed to process data');
}
```

## 工具配置

### ESLint
- 使用推荐配置
- 添加项目特定规则

### Prettier
- 自动格式化代码
- 保持团队风格一致

### EditorConfig
```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

---
*注意: 这些是当前偏好设置，可以根据项目需求和团队协作调整*

*最后更新: 2026-02-09*
