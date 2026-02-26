import { defineConfig } from 'vitepress'

const rawBase = process.env.DOCS_BASE?.trim()
const base = rawBase ? `/${rawBase.replace(/^\/+|\/+$/g, '')}/` : '/'

export default defineConfig({
  base,
  title: 'AI-Assistant',
  description: 'AI Second Brain 是 Boss 的执行中枢',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quick-start' },
      { text: '路由', link: '/router' },
      { text: '记忆', link: '/memory/index' },
      { text: '开发', link: '/dev/index' }
    ],

    sidebar: [
      {
        text: 'L1: 核心系统',
        items: [
          { text: '快速上手', link: '/quick-start' },
          { text: '路由系统', link: '/router' },
          { text: '用户偏好', link: '/memory/preferences/index' },
          { text: '项目事实', link: '/memory/project/index' },
          { text: '决策历史', link: '/memory/decisions/index' },
          { text: '身份安全', link: '/memory/auth/index' }
        ]
      },
      {
        text: 'L2: 运行经验',
        items: [
          { text: '专家系统', link: '/skills/prompt-expert/meta-expert' },
          { text: '经验碎片', link: '/snippets/index' },
          { text: '阶段复盘', link: '/retrospectives/index' },
          { text: '研发规范', link: '/dev/index' }
        ]
      },
      {
        text: '管理与审计',
        items: [
          { text: '元数据标准', link: '/metadata-schema' },
          { text: '世界知识约定', link: '/world/index' },
          { text: '日志中心', link: '/logs/index' }
        ]
      }
    ]
  }
})
