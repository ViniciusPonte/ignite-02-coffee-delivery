import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICoffee } from '../@types/coffee'
import { IOrder, PaymentMethods } from '../@types/order'
import { coffees } from '../constants/coffees'
import { AddressFormData } from '../screens/Checkout/validation'

interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  orderState: ICoffee[]
  paymentMethod: PaymentMethods | undefined
  orderList: IOrder[]
  increaseItem: (id: string) => void
  decreaseItem: (id: string) => void
  handleChangeQuantity: (
    type: 'add' | 'remove' | 'custom',
    id: string,
    quantity: number,
  ) => void
  handleChangePaymentMethod: (method: PaymentMethods) => void
  createNewOrder: (data: IOrder) => void
  onSaveOrders: (data: IOrder[]) => void
  removeItemFromCart: (id: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const navigate = useNavigate()
  const [orderList, setOrderList] = useState<IOrder[]>([])
  const [orderState, setOrderState] = useState<ICoffee[]>([])
  const [paymentMethod, setPaymentMethod] = useState<
    PaymentMethods | undefined
  >(undefined)

  function increaseItem(id: string) {
    const itemOnCart = orderState.find((item) => item.id === id)
    const coffee = coffees.find((item) => item.id === id)
    let newState: ICoffee[] = []

    if (itemOnCart) {
      newState = orderState.map((item) => {
        if (item.id === id && item.quantity) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        } else {
          return item
        }
      })

      setOrderState(newState)
    } else {
      if (coffee) {
        setOrderState((state) => [...state, { ...coffee, quantity: 1 }])
      }
    }
  }

  function decreaseItem(id: string) {
    const itemOnCart = orderState.find((item) => item.id === id)
    let newState: ICoffee[] = []

    if (itemOnCart) {
      newState = orderState.map((item) => {
        if (item.id === id && item.quantity) {
          if (item.quantity === 0) return item
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        } else {
          return item
        }
      })

      if (itemOnCart.quantity === 1) {
        setOrderState(orderState.filter((item) => item.id !== id))
      } else {
        setOrderState(newState)
      }
    }
  }

  function customQuantity(id: string, quantity: number) {
    const itemOnCart = orderState.find((item) => item.id === id)
    const coffee = coffees.find((item) => item.id === id)
    let newState: ICoffee[] = []

    if (itemOnCart) {
      newState = orderState.map((item) => {
        if (item.id === id && item.quantity) {
          return {
            ...item,
            quantity,
          }
        } else {
          return item
        }
      })

      setOrderState(newState)
    } else {
      if (coffee) {
        setOrderState((state) => [...state, { ...coffee, quantity }])
      }
    }
  }

  function handleChangeQuantity(
    type: 'add' | 'remove' | 'custom',
    id: string,
    quantity: number,
  ) {
    switch (type) {
      case 'add':
        increaseItem(id)
        break
      case 'remove':
        decreaseItem(id)
        break
      case 'custom':
        customQuantity(id, quantity)
        break
    }
  }

  function handleChangePaymentMethod(method: PaymentMethods) {
    setPaymentMethod(method)
  }

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
  }

  function onSaveOrders(data: IOrder[]) {
    setOrderList(data)
  }

  function removeItemFromCart(id: string) {
    const updatedCart = orderState.filter((item) => item.id !== id)

    setOrderState(updatedCart)
  }

  return (
    <OrderContext.Provider
      value={{
        increaseItem,
        decreaseItem,
        orderState,
        handleChangeQuantity,
        paymentMethod,
        handleChangePaymentMethod,
        createNewOrder,
        onSaveOrders,
        orderList,
        removeItemFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
