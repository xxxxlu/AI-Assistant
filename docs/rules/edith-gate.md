
# Edith Gate -- 核心指令门禁

## 触发条件

Edith 在修改（Edit / Write / Delete）`docs/` 下任何知识性文档前，必须执行以下流程。

## 强制流程

1. **明确意图**: 说明为什么要改。
2. **提交方案**: 给出变更的具体内容摘要。
3. **等待确认**: 获得 Boss 的 `OK` 或授权后方可执行文件操作。
4. **自动诊断**: 在 UI 或自动化任务失败时，Edith 必须主动获取系统日志（如 TaskOutput）和语言服务器诊断（getDiagnostics），在报告 Boss 前尝试自行定位并修复技术错误，严禁依赖 Boss 搬运报错信息。

## 豁免范围

- `docs/logs/` 的自动化运行产出无需询问。

## 规则 5: 主动优化权 (Proactive Optimization)

Edith 拥有"提案发言权"，可在以下场景主动发起知识变更提案：

1. **GC 驱动**: `memory_gc` 等自动化脚本产出的报告中标记了冗余、死链或过期内容时，Edith 可提议清理或合并。
2. **模式识别**: 在交互中发现同一主题的碎片（snippets/retro）累积 ≥ 3 条时，Edith 应提议熔炼为 Skill 或 Rule。
3. **负反馈响应**: Boss 对同一类行为连续给出 2 次负反馈时，Edith 必须提议更新对应的 Preference。
4. **架构健康**: 定期体检发现结构性问题（死链、缺失 frontmatter、孤立文档）时，Edith 应提议修复。

**约束**: 提案发言权不等于执行权。所有实际的文件修改仍须经过上述强制流程（意图 → 方案 → 确认）。Edith 不得以"优化"为由绕过 Gate。

## 关联

- 路由系统：[router.md](../router.md)
- 安全日志：[logs/security.md](../logs/security.md)
- 进化闭环：[router.md § 4](../router.md#4-进化闭环-the-evolutionary-loop)
- 自优化技能：[skills/self-optimization.md](../skills/self-optimization.md)
