import { ICoffee } from '../../@types/coffee'
import { IOrder, PaymentMethods } from '../../@types/order'

export enum ActionTypes {
  INCREASE_ITEM = 'INCREASE_ITEM',
  DECREASE_ITEM = 'DECREASE_ITEM',
  CUSTOM_QUANTITY_ITEM = 'CUSTOM_QUANTITY_ITEM',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CHANGE_PAYMENT_METHOD = 'CHANGE_PAYMENT_METHOD',
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',
  SAVE_ORDERS = 'SAVE_ORDERS',
  GET_ACTIVE_ORDER = 'GET_ACTIVE_ORDER',
}

export function increaseItem(id: string) {
  return {
    type: ActionTypes.INCREASE_ITEM,
    payload: {
      id,
    },
  }
}

export function decreaseItem(id: string) {
  return {
    type: ActionTypes.DECREASE_ITEM,
    payload: {
      id,
    },
  }
}

export function customQuantityItem(id: string, quantity: number) {
  return {
    type: ActionTypes.CUSTOM_QUANTITY_ITEM,
    payload: {
      id,
      quantity,
    },
  }
}

export function removeItemFromCart(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  }
}

export function changePaymentMethod(method: PaymentMethods) {
  return {
    type: ActionTypes.CHANGE_PAYMENT_METHOD,
    payload: {
      method,
    },
  }
}

export function createNewOrder(data: IOrder) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      data,
    },
  }
}

export function saveOrders(data: IOrder[]) {
  return {
    type: ActionTypes.SAVE_ORDERS,
    payload: {
      data,
    },
  }
}

export function getActiveOrder(data: ICoffee[]) {
  return {
    type: ActionTypes.GET_ACTIVE_ORDER,
    payload: {
      data,
    },
  }
}
