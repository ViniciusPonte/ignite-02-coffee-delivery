import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ICoffee } from '../../../../../../@types/coffee'
import { QuantityHandler } from '../../../../../../components/QuantityHandler'
import { OrderContext } from '../../../../../../contexts/OrderContext'
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

  const { customQuantity, increaseProduct, decreaseProduct, removeItem } =
    useContext(OrderContext)

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
              quantity={coffee.quantity || 0}
              onChange={(e) =>
                customQuantity(coffee.id, e.target.valueAsNumber)
              }
              handleAdd={() => increaseProduct(coffee.id)}
              handleSubtract={() => decreaseProduct(coffee.id)}
            />
            <ButtonRemove onClick={() => removeItem(coffee.id)}>
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
