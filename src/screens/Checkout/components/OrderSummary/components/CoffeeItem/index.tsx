import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { ICoffee } from '../../../../../../@types/coffee'
import { QuantityHandler } from '../../../../../../components/QuantityHandler'
import { defaultTheme } from '../../../../../../styles/themes/default'
import {
  ButtonRemove,
  CoffeeContainer,
  ImageAndQuantityContainer,
  PriceText,
} from './styles'

interface CoffeeItemProps {
  coffee: ICoffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const total = coffee.quantity && coffee.price * coffee.quantity
  const totalFormatted =
    total &&
    total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

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
      <ImageAndQuantityContainer>
        <img src={coffee.image} alt={coffee.name} />
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <span>{coffee.name}</span>
          <div style={{ gap: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <QuantityHandler
              quantity={quantity}
              onChange={(e) => setQuantity(e.target.valueAsNumber)}
              handleAdd={() => handleChangeQuantity('add')}
              handleSubtract={() => handleChangeQuantity('remove')}
            />
            <ButtonRemove>
              <Trash size={16} color={defaultTheme.colors.purple} />
              <span>Remover</span>
            </ButtonRemove>
          </div>
        </div>
      </ImageAndQuantityContainer>
      <PriceText>{totalFormatted}</PriceText>
    </CoffeeContainer>
  )
}
