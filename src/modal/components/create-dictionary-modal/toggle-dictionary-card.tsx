import { Button } from '@/components/ui/button'
import { useDictionaryStore } from '@/hooks/use-dictionary-store'
import { dictionaryUrlMap } from '@/config/dict'

const ToggleDictionaryCard = () => {
  const setCurrentDictionaryName = useDictionaryStore(
    state => state.setCurrentDictionaryName,
  )

  const dictionaryArray = Array.from(dictionaryUrlMap)

  return (
    <main className="flex gap-4">
      {/* 点击后切换词典名, 全局状态修改, 触发 home-typing 里面的 useEffect 重新发送请求渲染~ */}
      {dictionaryArray.map(([urlName, url]) => (
        <Button key={url} onClick={() => setCurrentDictionaryName(urlName)}>
          {urlName}
        </Button>
      ))}
    </main>
  )
}

export default ToggleDictionaryCard
