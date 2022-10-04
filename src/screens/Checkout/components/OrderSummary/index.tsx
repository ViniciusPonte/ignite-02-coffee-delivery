import { NavLink } from 'react-router-dom'
import coffee1 from '../../../../assets/coffees/coffee-1.svg'
import coffee7 from '../../../../assets/coffees/coffee-7.svg'
import { CoffeeItem } from './components/CoffeeItem'
import {
  ConfirmButton,
  OrderSummaryContainer,
  PriceContainer,
  PriceRow,
} from './styles'

export function OrderSummary() {
  const order = [
    {
      id: '1',
      name: 'Expresso Tradicional',
      image: coffee1,
      price: 9.9,
      quantity: 3,
    },
    {
      id: '7',
      name: 'Capuccino',
      image: coffee7,
      price: 11.9,
      quantity: 2,
    },
  ]

  return (
    <OrderSummaryContainer>
      {order.map((item) => (
        <CoffeeItem key={item.id} coffee={item} />
      ))}
      <PriceContainer>
        <PriceRow>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </PriceRow>
        <PriceRow>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </PriceRow>
        <PriceRow bold>
          <span>Total</span>
          <span>R$ 33,20</span>
        </PriceRow>
      </PriceContainer>

      <ConfirmButton>
        <NavLink to="/order-completed">Confirmar Pedido</NavLink>
      </ConfirmButton>
    </OrderSummaryContainer>
  )
}
