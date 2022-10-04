import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { ICoffee } from '../../@types/coffee'
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

  const [quantity, setQuantity] = useState(0)

  function handleChangeQuantity(type: 'add' | 'remove') {
    switch (type) {
      case 'add':
        if (quantity >= 30) return
        setQuantity((state) => state + 1)
        break
      case 'remove':
        if (quantity === 0) return
        setQuantity((state) => state - 1)
        break
    }
  }

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
            handleAdd={() => handleChangeQuantity('add')}
            handleSubtract={() => handleChangeQuantity('remove')}
            quantity={quantity}
            onChange={(e) => setQuantity(e.target.valueAsNumber)}
          />

          <button type="button" onClick={() => handleChangeQuantity('add')}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </PriceWrapper>
    </CoffeeContainer>
  )
}
