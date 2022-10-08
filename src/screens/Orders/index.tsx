import { useContext, useEffect, useState } from 'react'
import { IOrder } from '../../@types/order'
import { OrderContext } from '../../contexts/OrderContext'
import { OrdersContainer, OrdersList } from './styles'
import { OrderItem } from './components/OrderItem'

export function Orders() {
  const { onSaveOrders, orderList } = useContext(OrderContext)

  useEffect(() => {
    const storagedOrders = localStorage.getItem('@coffee-delivery:orders')
    onSaveOrders(JSON.parse(storagedOrders!!))
  }, [])

  return (
    <OrdersContainer>
      <h1>Meus pedidos</h1>

      <OrdersList>
        <table>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Data</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orderList.map((order: IOrder) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </OrdersList>
    </OrdersContainer>
  )
}
