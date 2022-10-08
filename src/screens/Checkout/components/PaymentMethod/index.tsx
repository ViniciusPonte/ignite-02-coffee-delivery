import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { FormBase } from '../../../../components/FormBase'
import { OrderContext } from '../../../../contexts/OrderContext'
import { defaultTheme } from '../../../../styles/themes/default'
import { FormContainer, PaymentMethodButton } from './styles'

export function PaymentMethod() {
  const { paymentMethod, handleChangePaymentMethod } = useContext(OrderContext)

  return (
    <FormBase
      icon={<CurrencyDollar size={22} color={defaultTheme.colors.purple} />}
      title="Pagamento"
      subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
    >
      <FormContainer>
        <PaymentMethodButton
          type="button"
          selected={paymentMethod === 'Cartão de Crédito'}
          onClick={() => handleChangePaymentMethod('Cartão de Crédito')}
        >
          <CreditCard size={22} color={defaultTheme.colors.purple} />
          <span>Cartão de crédito</span>
        </PaymentMethodButton>

        <PaymentMethodButton
          type="button"
          selected={paymentMethod === 'Cartão de Débito'}
          onClick={() => handleChangePaymentMethod('Cartão de Débito')}
        >
          <Bank size={22} color={defaultTheme.colors.purple} />
          <span>Cartão de débito</span>
        </PaymentMethodButton>

        <PaymentMethodButton
          type="button"
          selected={paymentMethod === 'Dinheiro'}
          onClick={() => handleChangePaymentMethod('Dinheiro')}
        >
          <Money size={22} color={defaultTheme.colors.purple} />
          <span>Dinheiro</span>
        </PaymentMethodButton>
      </FormContainer>
    </FormBase>
  )
}
