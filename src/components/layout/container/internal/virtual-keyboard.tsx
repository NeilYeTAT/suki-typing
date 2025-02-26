import { useRef } from 'react'
import Keyboard from 'react-simple-keyboard'

// 复制自 node_modules/react-simple-keyboard/build/css/index.css
import './virtual-keyboard.css'

const VirtualKeyboard = () => {
  const keyboard = useRef(null)

  return (
    <main className="max-w-screen-lg w-full">
      <Keyboard
        theme={'hg-theme-default hg-layout-default myTheme'}
        keyboardRef={r => (keyboard.current = r)}
        // * 物理键盘按下高亮显示~~~
        physicalKeyboardHighlight={true}
        physicalKeyboardHighlightPress={true}
        // * 已经去内部 CSS 文件修改了
        physicalKeyboardHighlightBgColor={'white'}
        physicalKeyboardHighlightTextColor={'black'}
        // ! 这里键盘映射是小写, 但是页面展示使用 CSS 全部处理成了大写!!!
        // ! 原因是大写字母看起来更加舒服, 并且也不需要大写功能, 因此删除了 shift 布局~
        layout={{
          default: [
            'q w e r t y u i o p',
            'a s d f g h j k l',
            'z x c v b n m',
          ],
        }}
      />
    </main>
  )
}

export default VirtualKeyboard
