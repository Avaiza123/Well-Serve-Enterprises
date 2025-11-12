import React from 'react'
import { useCartStore } from '@/store/cartStore'

export default function Cart(){
  const items = useCartStore(s => s.items)
  const remove = useCartStore(s => s.remove)

  if(items.length === 0) return <div>Your cart is empty</div>

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul className="space-y-3">
        {items.map(it => (
          <li key={it.id} className="p-3 bg-white rounded flex justify-between">
            <div>
              <div className="font-semibold">{it.name}</div>
              <div className="text-sm">${it.price.toFixed(2)}</div>
            </div>
            <button onClick={() => remove(it.id)} className="text-red-600">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
