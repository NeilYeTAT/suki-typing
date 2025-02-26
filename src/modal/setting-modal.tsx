'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useModalStore } from '@/hooks/use-modal-store'

const SettingModal = () => {
  const isOpen = useModalStore(state => state.isOpen)
  const onClose = useModalStore(state => state.onClose)
  const modalName = useModalStore(state => state.modalName)

  const isModalOpen = isOpen && modalName === 'setting'

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-96">
        <DialogHeader>
          <DialogTitle className="mx-auto">设置界面</DialogTitle>
          <DialogDescription>{/* 不写报警告, 我强迫症 */}</DialogDescription>
        </DialogHeader>
        {/* 暂停区域~ */}
        <p>设置...</p>
      </DialogContent>
    </Dialog>
  )
}

export default SettingModal
