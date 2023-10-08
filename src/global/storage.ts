import { UniStorage } from '@mudssky/jsutils'

export type GlobalStorageKey = 'userId'

export const GlobalStorage = new UniStorage<GlobalStorageKey>(uni)
