import { Minus, Plus } from 'phosphor-react'
import { InputWrapper } from './styles'

interface QuantityHandlerProps {
  quantity: number
  handleAdd: () => void
  handleSubtract: () => void
  onChange: (e: any) => void
}

export function QuantityHandler({
  quantity,
  handleAdd,
  handleSubtract,
  onChange,
}: QuantityHandlerProps) {
  return (
    <InputWrapper>
      <Minus size={14} weight="bold" onClick={handleSubtract} />
      <input
        type="number"
        min={0}
        max={30}
        value={quantity}
        onChange={onChange}
      />
      <Plus size={14} weight="bold" onClick={handleAdd} />
    </InputWrapper>
  )
}
