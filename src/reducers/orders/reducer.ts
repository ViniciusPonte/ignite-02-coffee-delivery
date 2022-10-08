import { ActionTypes } from './actions'
import { produce } from 'immer'
import { ICoffee } from '../../@types/coffee'
import { IOrder, PaymentMethods } from '../../@types/order'
import { coffees } from '../../constants/coffees'

interface IOrderState {
  activeOrder: ICoffee[]
  orders: IOrder[]
  paymentMethod: PaymentMethods | undefined
}

export function ordersReducer(state: IOrderState, action: any) {
  switch (action.type) {
    case ActionTypes.INCREASE_ITEM: {
      const itemExistsOnCart = state.activeOrder.findIndex((item) => {
        return item.id === action.payload.id
      })

      const coffee = coffees.find((item) => item.id === action.payload.id)

      if (itemExistsOnCart < 0 && coffee) {
        return produce(state, (draft) => {
          draft.activeOrder.push({ ...coffee, quantity: 1 })
        })
      } else {
        return produce(state, (draft) => {
          draft.activeOrder[itemExistsOnCart].quantity += 1
        })
      }
    }

    case ActionTypes.DECREASE_ITEM: {
      const itemExistsOnCart = state.activeOrder.findIndex((item) => {
        return item.id === action.payload.id
      })

      const coffee = coffees.find((item) => item.id === action.payload.id)

      if (itemExistsOnCart < 0 && coffee) {
        return state
      } else {
        return produce(state, (draft) => {
          if (draft.activeOrder[itemExistsOnCart].quantity === 0) return
          draft.activeOrder[itemExistsOnCart].quantity -= 1
        })
      }
    }

    case ActionTypes.CUSTOM_QUANTITY_ITEM: {
      const itemExistsOnCart = state.activeOrder.findIndex((item) => {
        return item.id === action.payload.id
      })

      const coffee = coffees.find((item) => item.id === action.payload.id)

      if (itemExistsOnCart < 0 && coffee) {
        return produce(state, (draft) => {
          draft.activeOrder.push({
            ...coffee,
            quantity: action.payload.quantity,
          })
        })
      } else {
        return produce(state, (draft) => {
          draft.activeOrder[itemExistsOnCart].quantity = action.payload.quantity
        })
      }
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const updatedCart = state.activeOrder.filter(
        (item) => item.id !== action.payload.id,
      )

      return produce(state, (draft) => {
        draft.activeOrder = updatedCart
      })
    }

    case ActionTypes.CHANGE_PAYMENT_METHOD: {
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.method
      })
    }

    case ActionTypes.CREATE_NEW_ORDER: {
      const id = String(
        Math.abs(Math.floor(Math.random() * 1000000) - 1),
      ).padStart(7, '0')
      const date = new Date()

      return produce(state, (draft) => {
        draft.orders.push({ ...action.payload.data, id, date })

        localStorage.setItem(
          '@coffee-delivery:orders',
          JSON.stringify([
            ...state.orders,
            { ...action.payload.data, id, date },
          ]),
        )

        draft.activeOrder = []
        draft.paymentMethod = undefined
      })
    }

    case ActionTypes.SAVE_ORDERS: {
      return produce(state, (draft) => {
        draft.orders = action.payload.data
      })
    }

    case ActionTypes.GET_ACTIVE_ORDER: {
      return produce(state, (draft) => {
        draft.activeOrder = action.payload.data
      })
    }

    default:
      return state
  }
}
