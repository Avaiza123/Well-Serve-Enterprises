import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchProduct } from '@/api/productsService'
import { useCartStore } from '@/store/cartStore'

export default function ProductDetail(){
  const { id } = useParams()
  const { data } = useQuery(['product', id], () => fetchProduct(id!))
  const add = useCartStore(s => s.add)

  if(!data) return <div>Not found</div>

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded">Image placeholder</div>
      <div>
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <p className="my-4">{data.description}</p>
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold">${data.price.toFixed(2)}</span>
          <button onClick={() => add(data)} className="px-4 py-2 bg-indigo-600 text-white rounded">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
