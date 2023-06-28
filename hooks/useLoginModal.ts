import { create } from "zustand";

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }), // 창을 열면
  onClose: () => set({ isOpen: false }), // 창을 닫으면
}));

export default useLoginModal;
