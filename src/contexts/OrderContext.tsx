import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { ICoffee } from '../@types/coffee'
import { IOrder, PaymentMethods } from '../@types/order'
import { coffees } from '../constants/coffees'
import {
  changePaymentMethod,
  createNewOrder,
  customQuantityItem,
  decreaseItem,
  getActiveOrder,
  increaseItem,
  removeItemFromCart,
  saveOrders,
} from '../reducers/orders/actions'
import { ordersReducer } from '../reducers/orders/reducer'
import { AddressFormData } from '../screens/Checkout/validation'

interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  activeOrder: ICoffee[]
  paymentMethod: PaymentMethods | undefined
  orders: IOrder[]
  increaseProduct: (id: string) => void
  decreaseProduct: (id: string) => void
  customQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  handleChangePaymentMethod: (method: PaymentMethods) => void
  createOrder: (data: IOrder) => void
  onSaveOrders: (data: IOrder[]) => void
  /*   decreaseItem: (id: string) => void
  handleChangeQuantity: (
    type: 'add' | 'remove' | 'custom',
    id: string,
    quantity: number,
  ) => void
  handleChangePaymentMethod: (method: PaymentMethods) => void
  createNewOrder: (data: IOrder) => void
  onSaveOrders: (data: IOrder[]) => void
  removeItemFromCart: (id: string) => void */
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const navigate = useNavigate()

  const [orderState, dispatch] = useReducer(ordersReducer, {
    activeOrder: [],
    orders: [],
    paymentMethod: undefined,
  })

  const { activeOrder, orders, paymentMethod } = orderState

  useEffect(() => {
    if (activeOrder.length > 0) {
      localStorage.setItem(
        '@coffee-delivery:activeOrder',
        JSON.stringify(activeOrder),
      )
    }
  }, [activeOrder])

  useEffect(() => {
    const data = localStorage.getItem('@coffee-delivery:activeOrder')

    if (data) dispatch(getActiveOrder(JSON.parse(data)))
  }, [])

  function increaseProduct(id: string) {
    dispatch(increaseItem(id))
  }

  function decreaseProduct(id: string) {
    dispatch(decreaseItem(id))
  }

  function customQuantity(id: string, quantity: number) {
    dispatch(customQuantityItem(id, quantity))
  }

  function removeItem(id: string) {
    dispatch(removeItemFromCart(id))
  }

  function handleChangePaymentMethod(method: PaymentMethods) {
    dispatch(changePaymentMethod(method))
  }

  function createOrder(data: IOrder) {
    dispatch(createNewOrder(data))
    navigate('/order-completed')
  }

  function onSaveOrders(data: IOrder[]) {
    dispatch(saveOrders(data))
  }

  /* 

  function createNewOrder(data: IOrder) {
    const id = String(
      Math.abs(Math.floor(Math.random() * 1000000) - 1),
    ).padStart(7, '0')
    const date = new Date()

    setOrderList((state) => [...state, { ...data, id, date }])
    localStorage.setItem(
      '@coffee-delivery:orders',
      JSON.stringify([...orderList, { ...data, id, date }]),
    )

    setOrderState([])
    setPaymentMethod(undefined)

    navigate('order-completed')
  } */

  return (
    <OrderContext.Provider
      value={{
        activeOrder,
        paymentMethod,
        orders,
        increaseProduct,
        decreaseProduct,
        customQuantity,
        removeItem,
        handleChangePaymentMethod,
        createOrder,
        onSaveOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
