import { CaretDown, CaretUp } from 'phosphor-react'
import { FormHTMLAttributes, ReactNode, useState } from 'react'
import { FormContainer } from './styles'

interface IFormBase extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
  icon: ReactNode
  title: string
  subtitle: string
}

export function FormBase({
  children,
  icon,
  title,
  subtitle,
  ...props
}: IFormBase) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <FormContainer {...props}>
      <div className="form-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="icon-title">
          {icon}
          <div className="title-subtitle">
            <span className="title">{title}</span>
            <span className="subtitle">{subtitle}</span>
          </div>
        </div>

        {isOpen ? <CaretUp size={22} /> : <CaretDown size={22} />}
      </div>
      {isOpen && children}
    </FormContainer>
  )
}
