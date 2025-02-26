import { create } from 'zustand'
import { dictionaryUrlMap } from '@/config/dict'

type IDictionaryName = typeof dictionaryUrlMap extends Map<infer K, unknown>
  ? K
  : never

interface IDictionaryStore {
  currentDictionaryName: IDictionaryName
  setCurrentDictionaryName: (currentDictionaryName: IDictionaryName) => void
}

const dictionaryName = Array.from(dictionaryUrlMap.keys())

// * 使用 map 类型, 这里修改名字后就直接使用 map 获取对应的值
export const useDictionaryStore = create<IDictionaryStore>()(set => ({
  currentDictionaryName: dictionaryName[0],
  setCurrentDictionaryName: dictionaryUrlMap =>
    set({
      currentDictionaryName: dictionaryUrlMap,
    }),
}))
