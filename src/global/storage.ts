import { UniStorage } from '@mudssky/jsutils'

export type GlobalStorageKey = 'userId'

export const GlobalStorage = new UniStorage<GlobalStorageKey>({
  getStorageSync: uni.getStorageSync,
  setStorageSync: uni.setStorageSync,
  clearStorageSync: uni.clearStorageSync,
  removeStorageSync: uni.removeStorageSync,
  getStorageInfoSync: uni.getStorageInfoSync,
})
