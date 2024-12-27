import { create } from 'zustand'

interface CartItem {
  id: number
  name: string
  price: number
  description: string
  restaurantId: number
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: number) => void
  clearCart: () => void
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => {
    console.log('Adding item:', item)
    return { items: [...state.items, item] }
  }),
  removeItem: (itemId) => set((state) => ({
    items: state.items.filter(item => item.id !== itemId)
  })),
  clearCart: () => set({ items: [] })
}))
