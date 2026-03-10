/**
 * 认证配置
 *
 * 生成密码哈希:
 *   echo -n "your-password" | shasum -a 256
 *
 * 然后将结果填入 PASSWORD_HASH。
 */

/** SHA-256 密码哈希 — 修改为你的实际密码哈希 */
export const PASSWORD_HASH =
  '9e8c9b51726d3f3e44fb8f6849d2cf37694aa3d92244a0b079cfd43253ec572a'

/** localStorage 中存储认证 Token 的 key */
export const AUTH_STORAGE_KEY = 'edith-auth-token'

export const TOKEN_TTL = 5 * 60 * 1000
