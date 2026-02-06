import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI-Assistant',
  description: 'AI Common 是 Boss 的 AI 大脑',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '路由', link: '/router' },
      { text: '规则', link: '/rules/' },
      { text: '记忆', link: '/memory/auth/boss-credentials' },
      { text: '技能', link: '/skills/' },
      { text: '开发', link: '/dev/' }
    ],

    sidebar: [
      {
        text: '核心',
        items: [
          { text: '路由系统', link: '/router' },
          { text: '规则中心', link: '/rules/' },
          { text: '技能中心', link: '/skills/' },
          { text: '开发文档', link: '/dev/' }
        ]
      },
      {
        text: '支持文档',
        items: [
          { text: '世界知识约定', link: '/world/' },
          { text: '错误日志', link: '/logs/errors' },
          { text: '安全日志', link: '/logs/security' },
          { text: '访问日志', link: '/logs/file-access' }
        ]
      }
    ]
  }
})
