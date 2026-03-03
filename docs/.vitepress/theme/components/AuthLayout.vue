<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useAuth } from '../composables/useAuth'
import Login from './Login.vue'

const { Layout } = DefaultTheme
const { authenticated, init, logout } = useAuth()

onMounted(() => {
  init()
})
</script>

<template>
  <Login v-if="!authenticated" />
  <template v-else>
    <Layout>
      <template #nav-bar-content-after>
        <button class="logout-button" title="退出登录" @click="logout">
          退出
        </button>
      </template>
    </Layout>
  </template>
</template>

<style scoped>
.logout-button {
  margin-left: 12px;
  padding: 4px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  background: transparent;
  cursor: pointer;
  transition: color 0.25s, border-color 0.25s;
}

.logout-button:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-2);
}
</style>
