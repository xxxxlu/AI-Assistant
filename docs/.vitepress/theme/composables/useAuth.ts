import { ref } from 'vue'
import { AUTH_STORAGE_KEY, PASSWORD_HASH, TOKEN_TTL } from '../auth-config'

const authenticated = ref(false)

/** 将字符串转为 SHA-256 hex */
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

/** 检查 localStorage 中的 Token 是否有效 */
function checkStoredToken(): boolean {
  if (typeof window === 'undefined') return false
  const raw = localStorage.getItem(AUTH_STORAGE_KEY)
  if (!raw) return false
  try {
    const { expiry } = JSON.parse(raw) as { expiry: number }
    if (Date.now() < expiry) return true
    localStorage.removeItem(AUTH_STORAGE_KEY)
    return false
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    return false
  }
}

/** 保存 Token 到 localStorage */
function storeToken(): void {
  const payload = { expiry: Date.now() + TOKEN_TTL }
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload))
}

export function useAuth() {
  /** 初始化：从 localStorage 恢复状态 */
  function init() {
    authenticated.value = checkStoredToken()
  }

  /** 登录：校验密码哈希 */
  async function login(password: string): Promise<boolean> {
    const hash = await sha256(password)
    if (hash === PASSWORD_HASH) {
      storeToken()
      authenticated.value = true
      return true
    }
    return false
  }

  /** 退出登录 */
  function logout() {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    authenticated.value = false
  }

  return { authenticated, init, login, logout }
}
