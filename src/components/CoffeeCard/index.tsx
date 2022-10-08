import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ICoffee } from '../../@types/coffee'
import { OrderContext } from '../../contexts/OrderContext'
import { QuantityHandler } from '../QuantityHandler'
import {
  CoffeeContainer,
  CoffeeImage,
  Description,
  PriceWrapper,
  Tags,
  Title,
} from './styles'

interface CoffeeCardProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const formattedPrice = coffee.price.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })

  const { increaseProduct, decreaseProduct, activeOrder, customQuantity } =
    useContext(OrderContext)

  const activeCoffee = activeOrder.find((item) => item.id === coffee.id)

  return (
    <CoffeeContainer>
      <CoffeeImage src={coffee.image} alt={coffee.name} />

      <Tags>
        {coffee.category &&
          coffee.category.map((category) => (
            <span key={category}>{category}</span>
          ))}
      </Tags>

      <Title>{coffee.name}</Title>
      <Description>{coffee.description}</Description>

      <PriceWrapper>
        <div className="price">
          <h6>R$</h6>
          <h4>{formattedPrice}</h4>
        </div>

        <div className="quantity">
          <QuantityHandler
            handleAdd={() => increaseProduct(coffee.id)}
            handleSubtract={() => decreaseProduct(coffee.id)}
            quantity={activeCoffee?.quantity || 0}
            onChange={(e) => customQuantity(coffee.id, e.target.valueAsNumber)}
          />

          <button type="button" onClick={() => increaseProduct(coffee.id)}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </PriceWrapper>
    </CoffeeContainer>
  )
}
