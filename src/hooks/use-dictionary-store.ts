import { create } from 'zustand'

interface IDictionaryStore {
  currentDictionaryUrl: string
  setCurrentDictionaryUrl: (dictionaryName: string) => void
}

export const useDictionaryStore = create<IDictionaryStore>()(set => ({
  currentDictionaryUrl: `${process.env.NEXT_PUBLIC_API_URL}/dict/jp-test.json`,
  setCurrentDictionaryUrl: url =>
    set({
      currentDictionaryUrl: url,
    }),
}))
