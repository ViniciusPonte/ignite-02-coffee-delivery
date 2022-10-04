type CoffeeType =
  | 'Tradicional'
  | 'Gelado'
  | 'Especial'
  | 'Alcoolico'
  | 'Com leite'

export interface ICoffee {
  id: string
  name: string
  description?: string
  image: string
  category?: CoffeeType[]
  price: number
  quantity?: number
}
