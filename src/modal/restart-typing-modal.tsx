'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useModalStore } from '@/hooks/use-modal-store'

const RestartTypingModal = () => {
  const isOpen = useModalStore(state => state.isOpen)
  const onClose = useModalStore(state => state.onClose)
  const modalName = useModalStore(state => state.modalName)

  const isModalOpen = isOpen && modalName === 'restart-typing'

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-96">
        <DialogHeader>
          <DialogTitle className="mx-auto">确认要重新开始吗?</DialogTitle>
          <DialogDescription>{/* 不写报警告, 我强迫症 */}</DialogDescription>
        </DialogHeader>
        {/* 暂停区域~ */}
        <p>确认框...</p>
      </DialogContent>
    </Dialog>
  )
}

export default RestartTypingModal
