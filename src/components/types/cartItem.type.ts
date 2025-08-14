export interface CartItem {
  id: number
  name: string
  namebn?: string // optional now
  price: number
  originalPrice?: number
  image: string
  category: string
  quantity: number
  sku?: string
  brand?: string
  currency?: string
  url?: string
}