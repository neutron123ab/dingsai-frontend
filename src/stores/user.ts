import { defineStore } from 'pinia'
import type { UserType } from '@/types/user'

export const useUserStore = defineStore('user', () => {
  let currentUser: UserType

  const setCurrentUser = (user: UserType) => {
    currentUser = user
  }

  const getCurrentUser = (): UserType => {
    return currentUser
  }

  return { setCurrentUser, getCurrentUser } 
})