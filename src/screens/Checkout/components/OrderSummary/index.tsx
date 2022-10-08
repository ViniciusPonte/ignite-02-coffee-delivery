import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import coffee1 from '../../../../assets/coffees/coffee-1.svg'
import coffee7 from '../../../../assets/coffees/coffee-7.svg'
import { OrderContext } from '../../../../contexts/OrderContext'
import { CoffeeItem } from './components/CoffeeItem'
import {
  ConfirmButton,
  OrderSummaryContainer,
  PriceContainer,
  PriceRow,
} from './styles'

export function OrderSummary() {
  const { orderState } = useContext(OrderContext)

  const totalItems = orderState.reduce((sum, i) => {
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
      {orderState.map((item) => (
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
