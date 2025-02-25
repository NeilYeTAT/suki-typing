import { create } from 'zustand'

type IModalType = 'create-dictionary'

interface IModalStore {
  isOpen: boolean
  modalName: IModalType | null
  onOpen: (type: IModalType, modalData?: IModalData) => void
  onClose: () => void
  modalData?: IModalData
}

interface IModalData {
  dictionaryName: string
}

export const useModalStore = create<IModalStore>()(set => ({
  isOpen: false,
  modalName: null,
  modalData: undefined,

  onOpen: (modalName, modalData) =>
    set({
      isOpen: true,
      modalName,
      modalData,
    }),
  onClose: () =>
    set({
      isOpen: false,
      modalName: null,
    }),
}))
