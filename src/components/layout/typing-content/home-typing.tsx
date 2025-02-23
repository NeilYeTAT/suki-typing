'use client'

import dict from '@dict/jp-test.json'
import { useEffect, useState } from 'react'
import axios from 'axios'

const questionsArray = dict

const HomeTyping = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const query = questionsArray[currentQuestionIndex].kana

  useEffect(() => {
    axios
      .post('/api/youdao', {
        q: query,
      })
      .then(r => {
        console.log(r)
      })
  }, [currentQuestionIndex])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== ' ') {
      setInputValue(e.target.value)
    }
  }

  const submitAnswer = () => {
    const ok = questionsArray[currentQuestionIndex].romaji === inputValue.trim()
    if (ok) {
      setCurrentQuestionIndex(pre => pre + 1)
    }
    setInputValue('')
  }

  const handleSubmitShortcut = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      submitAnswer()
    }
  }

  return (
    <main className="bg-slate-800 w-full h-full flex flex-col border border-dashed items-center gap-16 py-12">
      <h2 className="text-6xl border-b border-dashed border-white">
        {currentQuestionIndex < questionsArray.length ? (
          questionsArray[currentQuestionIndex].hiragana
        ) : (
          <p>Over~</p>
        )}
      </h2>
      {/* 输入框 */}
      <main className="flex flex-col">
        <section className="relative border-b border-dashed w-36 h-16">
          <input
            type="text"
            value={inputValue}
            className="appearance-none size-full text-3xl outline-none absolute top-0 left-0 px-2 bg-transparent border-b border-pink-300"
            onChange={handleInputChange}
            onKeyDown={handleSubmitShortcut}
          />
        </section>

        <button onClick={() => setCurrentQuestionIndex(pre => pre + 1)}>
          next
        </button>
      </main>
      {/* 键盘显示区域提示 */}
      <section>
        <div>键盘显示区域</div>
      </section>
    </main>
  )
}

export default HomeTyping
