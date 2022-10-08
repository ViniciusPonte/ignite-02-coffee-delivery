import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { CoffeeItem } from './components/CoffeeItem'
import {
  ConfirmButton,
  OrderSummaryContainer,
  PriceContainer,
  PriceRow,
} from './styles'

export function OrderSummary() {
  const { activeOrder } = useContext(OrderContext)

  const totalItems = activeOrder.reduce((sum, i) => {
    if (i.quantity) {
      return sum + i.price * i.quantity
    } else {
      return sum
    }
  }, 0)

  const taxDelivery = 3.5

  const total = totalItems + taxDelivery

  return (
    <OrderSummaryContainer>
      {activeOrder.map((item) => (
        <CoffeeItem key={item.id} coffee={item} />
      ))}
      <PriceContainer>
        <PriceRow>
          <span>Total de itens</span>
          <span>
            {totalItems.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </PriceRow>
        <PriceRow>
          <span>Entrega</span>
          <span>
            {taxDelivery.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </PriceRow>
        <PriceRow bold>
          <span>Total</span>
          <span>
            {total.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </PriceRow>
      </PriceContainer>

      <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
    </OrderSummaryContainer>
  )
}
