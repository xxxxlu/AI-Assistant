import { describe, expect, it, vi } from 'vitest'
import { getTokenExpiry, scheduleAutoLock } from './useAuth'

describe('getTokenExpiry', () => {
  it('returns null when raw value is empty or invalid', () => {
    expect(getTokenExpiry(null)).toBeNull()
    expect(getTokenExpiry('')).toBeNull()
    expect(getTokenExpiry('{invalid')).toBeNull()
    expect(getTokenExpiry(JSON.stringify({}))).toBeNull()
    expect(getTokenExpiry(JSON.stringify({ expiry: '100' }))).toBeNull()
  })

  it('returns null when expiry is not in the future', () => {
    expect(getTokenExpiry(JSON.stringify({ expiry: 100 }), 100)).toBeNull()
    expect(getTokenExpiry(JSON.stringify({ expiry: 99 }), 100)).toBeNull()
  })

  it('returns expiry when it is in the future', () => {
    expect(getTokenExpiry(JSON.stringify({ expiry: 101 }), 100)).toBe(101)
  })
})

describe('scheduleAutoLock', () => {
  it('schedules callback using remaining time to expiry', () => {
    const timer = vi.fn<
      [cb: () => void, delay: number],
      ReturnType<typeof setTimeout>
    >(() => 123 as unknown as ReturnType<typeof setTimeout>)
    const callback = vi.fn()

    vi.spyOn(Date, 'now').mockReturnValue(1000)
    const id = scheduleAutoLock(1800, callback, timer)

    expect(timer).toHaveBeenCalledTimes(1)
    expect(timer).toHaveBeenCalledWith(callback, 800)
    expect(id).toBe(123)
  })

  it('never schedules with negative delay', () => {
    const timer = vi.fn<
      [cb: () => void, delay: number],
      ReturnType<typeof setTimeout>
    >(() => 456 as unknown as ReturnType<typeof setTimeout>)
    const callback = vi.fn()

    vi.spyOn(Date, 'now').mockReturnValue(3000)
    scheduleAutoLock(2000, callback, timer)

    expect(timer).toHaveBeenCalledWith(callback, 0)
  })
})
