'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useModalStore } from '@/hooks/use-modal-store'
import ToggleDictionaryCard from './components/create-dictionary-modal/toggle-dictionary-card'

const DictionaryModal = () => {
  const isOpen = useModalStore(state => state.isOpen)
  const onClose = useModalStore(state => state.onClose)
  const modalName = useModalStore(state => state.modalName)

  const isModalOpen = isOpen && modalName === 'create-dictionary'

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="min-w-96">
          <DialogHeader>
            <DialogTitle className="mx-auto">切换词典</DialogTitle>
            <DialogDescription>{/* 不写报警告, 我强迫症 */}</DialogDescription>
          </DialogHeader>
          {/* 切换词典 */}
          <ToggleDictionaryCard />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DictionaryModal
