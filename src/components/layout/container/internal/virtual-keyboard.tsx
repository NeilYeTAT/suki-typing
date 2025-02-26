import { useRef, useState } from 'react'
import Keyboard from 'react-simple-keyboard'

// 复制自 node_modules/react-simple-keyboard/build/css/index.css
import './virtual-keyboard.css'

const VirtualKeyboard = () => {
  const [input, setInput] = useState('')
  const [layout, setLayout] = useState('default')
  const keyboard = useRef(null)

  const onChange = (input: string) => {
    setInput(input)
  }

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default'
    setLayout(newLayoutName)
  }

  const onKeyPress = button => {
    console.log('Button pressed', button)

    /**
     * * If you want to handle the shift and caps lock buttons
     * * 之后处理, 先整布局和基本逻辑~
     */
    if (button === '{shift}' || button === '{lock}') handleShift()
  }

  const onChangeInput = event => {
    const input = event.target.value
    setInput(input)
    keyboard.current.setInput(input)
  }

  return (
    <main className="max-w-screen-lg w-full">
      {/* <input
        value={input}
        placeholder={'Tap on the virtual keyboard to start'}
        onChange={onChangeInput}
      /> */}
      <Keyboard
        // theme="hg-theme-default"
        theme={'hg-theme-default hg-layout-default myTheme'}
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        // * 物理键盘按下高亮显示~~~
        physicalKeyboardHighlight={true}
        physicalKeyboardHighlightPress={true}
        // * 已经去内部 CSS 文件修改了
        physicalKeyboardHighlightBgColor={'white'}
        physicalKeyboardHighlightTextColor={'black'}
        layout={{
          default: [
            // 'q w e r t y u i o p',
            // 'a s d f g h j k l',
            // 'z x c v b n m',
            'Q W E R T Y U I O P',
            'A S D F G H J K L',
            'Z X C V B N M',
          ],
          shift: [
            // '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
            'Q W E R T Y U I O P',
            'A S D F G H J K L',
            'Z X C V B N M',
          ],
        }}
      />
    </main>
  )
}

export default VirtualKeyboard
