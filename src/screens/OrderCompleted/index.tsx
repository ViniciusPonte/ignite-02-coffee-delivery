import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveringImg from '../../assets/delivering.svg'
import { defaultTheme } from '../../styles/themes/default'
import {
  IconWrapper,
  OrderCompletedContainer,
  StatusBorder,
  StatusImageWrapper,
  StatusItem,
  StatusWrapper,
  Subtitle,
  Title,
} from './styles'

export function OrderCompleted() {
  return (
    <OrderCompletedContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

      <StatusImageWrapper>
        <StatusBorder>
          <StatusWrapper>
            <StatusItem>
              <IconWrapper background={defaultTheme.colors.purple}>
                <MapPin size={16} />
              </IconWrapper>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </span>
            </StatusItem>

            <StatusItem>
              <IconWrapper background={defaultTheme.colors.yellow}>
                <Timer size={16} />
              </IconWrapper>
              <span>
                Previsão de entrega
                <br />
                <strong>20min - 30min</strong>
              </span>
            </StatusItem>

            <StatusItem>
              <IconWrapper background={defaultTheme.colors['yellow-dark']}>
                <CurrencyDollar size={16} />
              </IconWrapper>
              <span>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </span>
            </StatusItem>
          </StatusWrapper>
        </StatusBorder>
        <img src={deliveringImg} alt="" />
      </StatusImageWrapper>
    </OrderCompletedContainer>
  )
}
