import { ref } from 'vue'
import { AUTH_STORAGE_KEY, PASSWORD_HASH, TOKEN_TTL } from '../auth-config'

const authenticated = ref(false)
let lockTimer: ReturnType<typeof setTimeout> | null = null

export function getTokenExpiry(raw: string | null, now = Date.now()): number | null {
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw) as { expiry?: unknown }
    if (typeof parsed.expiry !== 'number') return null
    return parsed.expiry > now ? parsed.expiry : null
  } catch {
    return null
  }
}

export function scheduleAutoLock(
  expiry: number,
  onExpire: () => void,
  timer = setTimeout,
): ReturnType<typeof setTimeout> | null {
  const delay = Math.max(0, expiry - Date.now())
  return timer(onExpire, delay)
}

function clearLockTimer() {
  if (!lockTimer) return
  clearTimeout(lockTimer)
  lockTimer = null
}

function setLockTimer(expiry: number) {
  clearLockTimer()
  lockTimer = scheduleAutoLock(expiry, () => {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    authenticated.value = false
    lockTimer = null
  })
}

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
  const expiry = getTokenExpiry(raw)

  if (!expiry) {
    if (raw) localStorage.removeItem(AUTH_STORAGE_KEY)
    return false
  }

  setLockTimer(expiry)
  return true
}

/** 保存 Token 到 localStorage */
function storeToken(): number {
  const expiry = Date.now() + TOKEN_TTL
  const payload = { expiry }
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload))
  return expiry
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
      const expiry = storeToken()
      authenticated.value = true
      setLockTimer(expiry)
      return true
    }
    return false
  }

  /** 退出登录 */
  function logout() {
    clearLockTimer()
    localStorage.removeItem(AUTH_STORAGE_KEY)
    authenticated.value = false
  }

  return { authenticated, init, login, logout }
}
