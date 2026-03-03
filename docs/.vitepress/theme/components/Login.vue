<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

const { login } = useAuth()

const password = ref('')
const error = ref('')
const loading = ref(false)

async function handleSubmit() {
  error.value = ''
  loading.value = true
  try {
    const ok = await login(password.value)
    if (!ok) {
      error.value = '密码错误，请重试'
      password.value = ''
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-overlay">
    <div class="login-card">
      <div class="login-icon">🔐</div>
      <h1 class="login-title">Edith Second Brain</h1>
      <p class="login-subtitle">请输入密码以继续</p>

      <form class="login-form" @submit.prevent="handleSubmit">
        <input
          v-model="password"
          type="password"
          placeholder="输入访问密码"
          class="login-input"
          autofocus
          :disabled="loading"
        />
        <button type="submit" class="login-button" :disabled="loading">
          {{ loading ? '验证中...' : '进入系统' }}
        </button>
      </form>

      <p v-if="error" class="login-error">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.login-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  z-index: 9999;
}

.login-card {
  width: 100%;
  max-width: 360px;
  padding: 40px 32px;
  text-align: center;
}

.login-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.login-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
}

.login-subtitle {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 32px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.login-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 15px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.25s;
  box-sizing: border-box;
}

.login-input:focus {
  border-color: var(--vp-c-brand-1);
}

.login-button {
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: var(--vp-c-brand-1);
  cursor: pointer;
  transition: opacity 0.25s;
}

.login-button:hover:not(:disabled) {
  opacity: 0.85;
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-error {
  margin-top: 16px;
  font-size: 14px;
  color: var(--vp-c-danger-1);
}
</style>
