import { AddressFormData } from '../screens/Checkout/validation'
import { ICoffee } from './coffee'

export type PaymentMethods =
  | 'Cartão de Crédito'
  | 'Cartão de Débito'
  | 'Dinheiro'

export interface IOrder extends AddressFormData {
  id: string
  date: Date
  orderItems: ICoffee[]
  paymentMethod: PaymentMethods
}
