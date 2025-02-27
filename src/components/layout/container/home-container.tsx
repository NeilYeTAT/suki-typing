'use client'

import { useDictionaryStore } from '@/hooks/use-dictionary-store'
import { useEffect, useState } from 'react'
import { dictionaryUrlMap } from '@/config/dict'
import VirtualKeyboard from './internal/virtual-keyboard'
import { useKeyPress, useLocalStorageState } from 'ahooks'
// import axios from 'axios'

interface IDictionary {
  romaji: string
  kana: string
  hiragana: string
  katakana: string
}

const HomeContainer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [questionsArray, setQuestionArray] = useState<IDictionary[]>([])
  const currentDictionaryName = useDictionaryStore(
    state => state.currentDictionaryName,
  )
  const [localDictionary, setLocalDictionary] = useLocalStorageState<
    IDictionary[]
  >(`${currentDictionaryName}_dict_local`)

  // 键盘事件 keyCode 别名 https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useKeyPress/index.ts#L21
  useKeyPress('space', () => {
    submitAnswer()
  })
  useKeyPress('enter', () => {
    submitAnswer()
  })

  // TODO: 应该有加载骨架屏
  useEffect(() => {
    const fetchDictionaryArray = async (url: string) => {
      // * 先从本地加载
      if (localDictionary) {
        setQuestionArray(pre => pre)
      } else {
        // * 从网络获取
        const dict = await fetch(url)
        const dictionary = await dict.json()
        setQuestionArray(dictionary)
        setLocalDictionary(dictionary)
      }
    }

    fetchDictionaryArray(dictionaryUrlMap.get(currentDictionaryName)!)
  }, [currentDictionaryName, localDictionary])

  // !!! 暂时先不接入语音服务, 后序再接入, 省点成本
  // TODO: 语音功能接入并且缓存降低成本?

  // useEffect(() => {
  //   const query = questionsArray[currentQuestionIndex]?.kana ?? 'か'
  //   axios
  //     .post('/api/youdao', {
  //       q: query,
  //     })
  //     .then(r => {
  //       console.log(r.data.speakUrl, 'log speak url')
  //     })
  // }, [currentQuestionIndex, questionsArray])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const submitAnswer = () => {
    const ok = questionsArray[currentQuestionIndex].romaji === inputValue.trim()
    if (ok) {
      setCurrentQuestionIndex(pre => pre + 1)
    }
    setInputValue('')
  }

  return (
    <main className="w-full h-full flex flex-col border border-dashed items-center gap-16 pt-52 rounded-lg">
      <h2 className="text-8xl border-b border-dashed border-white">
        {currentQuestionIndex < questionsArray.length ? (
          questionsArray[currentQuestionIndex].hiragana
        ) : (
          // TODO: 完成之后完结撒花, 并且设置指针的状态
          <p>Over~</p>
        )}
      </h2>
      {/* 输入框 */}
      <main className="flex flex-col">
        <section className="relative border-b border-dashed w-36 h-16">
          <input
            type="text"
            value={inputValue}
            className="appearance-none size-full text-3xl outline-none absolute top-0 left-0 px-2 bg-transparent border-b-2 border-pink-100 text-center"
            onChange={handleInputChange}
          />
        </section>
      </main>
      {/* 键盘显示区域提示 */}
      <VirtualKeyboard />
    </main>
  )
}

export default HomeContainer
