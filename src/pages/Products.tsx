// src/components/Products.tsx
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { fetchProducts } from '@/api/productsService'
// import ProductCard from '@/pages/ProductCard'
import ProductCard from './ProductCard'
// Define Product type
export interface Product {
  id: string
  name: string
  price: number
  image?: string
  // Add other fields from your API if needed
}

export default function Products() {
  const { data = [], isLoading } = useQuery<Product[]>('products', fetchProducts)
  const [query, setQuery] = useState('')
  const [minPrice, setMinPrice] = useState<number | ''>('')
  const [maxPrice, setMaxPrice] = useState<number | ''>('')

  // Filter products based on search and price
  const filtered = data.filter(p => {
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false
    if (minPrice !== '' && p.price < minPrice) return false
    if (maxPrice !== '' && p.price > maxPrice) return false
    return true
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {/* Sidebar Filters */}
      <aside className="md:col-span-1 bg-white p-4 rounded shadow h-fit">
        <h4 className="font-semibold mb-3">Filter Products</h4>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full mb-3 input"
        />
        <div className="flex gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value ? +e.target.value : '')}
            placeholder="Min"
            className="input w-1/2"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value ? +e.target.value : '')}
            placeholder="Max"
            className="input w-1/2"
          />
        </div>
        <button
          onClick={() => {
            setQuery('')
            setMinPrice('')
            setMaxPrice('')
          }}
          className="mt-3 text-sm text-teal-700"
        >
          Clear
        </button>
      </aside>

      {/* Products List */}
      <section className="md:col-span-3">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Surgical Equipment</h2>
          <div className="text-sm text-gray-600">{filtered.length} items</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
