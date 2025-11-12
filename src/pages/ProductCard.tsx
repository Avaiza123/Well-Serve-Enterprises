// src/components/ProductCard.tsx
import React from 'react'
import { Product } from './Products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-teal-700 font-bold">${product.price.toFixed(2)}</p>
    </div>
  )
}
