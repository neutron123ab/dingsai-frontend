import {defineStore} from "pinia";
import type {ItemType} from "@/types/item";

export const useItemStore = defineStore('item', () => {
  let currentItem: ItemType
  
  const setCurrentItem = (item: ItemType) => {
    currentItem = item
  }
  
  const getCurrentItem = (): ItemType => {
    return currentItem
  }
  
  return { setCurrentItem, getCurrentItem }
})