import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormBase } from '../../components/FormBase'
import { defaultTheme } from '../../styles/themes/default'
import { AddressForm } from './components/AddressForm'
import { OrderSummary } from './components/OrderSummary'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer, Column } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Column>
        <h2>Complete seu pedido</h2>

        <AddressForm />
        <PaymentMethod />
      </Column>

      <Column>
        <h2>Revise seu pedido</h2>

        <OrderSummary />
      </Column>
    </CheckoutContainer>
  )
}
