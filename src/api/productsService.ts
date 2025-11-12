import axios from 'axios'

const mock = [
  { id: 'p1', name: 'Surgical Scalpel', description: 'Stainless steel scalpel', price: 12.5 },
  { id: 'p2', name: 'Surgical Mask', description: 'Disposable mask', price: 0.5 },
  { id: 'p3', name: 'Surgical Gloves', description: 'Latex gloves', price: 5.0 }
]

export async function fetchProducts(){
  // simulate API
  await new Promise(r => setTimeout(r, 200))
  return mock
}

export async function fetchProduct(id: string){
  await new Promise(r => setTimeout(r, 100))
  return mock.find(m => m.id === id)
}
