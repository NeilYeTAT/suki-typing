import DictionaryModal from '@/modal/create-dictionary-modal'
import PauseTypingModal from '@/modal/pause-typing-modal'
import RestartTypingModal from '@/modal/restart-typing-modal'
import SettingModal from '@/modal/setting-modal'

const ModalProvider = () => {
  return (
    <>
      <DictionaryModal />
      <PauseTypingModal />
      <RestartTypingModal />
      <SettingModal />
    </>
  )
}

export default ModalProvider
