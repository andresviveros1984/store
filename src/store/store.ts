import { create } from 'zustand'

const useStore = create((set) => ({
  cartModalOpen: false,
  openCartModal: () => set(() => ({ cartModalOpen: true })),
  closeCartModal: () => set(() => ({ cartModalOpen: false })),
  toggleCartModal: () => set((state) => ({ cartModalOpen: !state.cartModalOpen })),
}))

export default useStore
