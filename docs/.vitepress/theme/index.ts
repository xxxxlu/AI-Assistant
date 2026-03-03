import DefaultTheme from 'vitepress/theme'
import AuthLayout from './components/AuthLayout.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: AuthLayout,
} satisfies Theme
