import create from 'zustand'

export type Product = { id: string; name: string; price: number; description?: string }

type CartState = {
  items: Product[]
  add: (p: Product) => void
  remove: (id: string) => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (p) => set(state => ({ items: [...state.items, p] })),
  remove: (id) => set(state => ({ items: state.items.filter(it => it.id !== id) }))
}))
