import { create } from "zustand";

export type CartItem = { id: number; name: string; price: number; quantity: number };
type CartState = { items: CartItem[]; add: (item: Omit<CartItem, "quantity">) => void; remove: (id: number) => void };
export const useCart = create<CartState>((set) => ({
  items: [],
  add: (item) => set(state => {
    const found = state.items.find(x => x.id === item.id);
    return { items: found ? state.items.map(x => x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x) : [...state.items, { ...item, quantity: 1 }] };
  }),
  remove: (id) => set(state => ({ items: state.items.filter(x => x.id !== id) }))
}));
