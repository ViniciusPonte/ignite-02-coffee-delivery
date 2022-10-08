import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { StyledInput } from './styles'
import { Mask } from 'react-text-mask'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: Mask | ((value: string) => Mask)
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...props },
  ref,
) => {
  return <StyledInput {...props} ref={ref} />
}

export const Input = forwardRef(InputBase)
