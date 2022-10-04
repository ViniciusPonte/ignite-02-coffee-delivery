import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { FormBase } from '../../../../components/FormBase'
import { defaultTheme } from '../../../../styles/themes/default'
import { FormContainer, PaymentMethodButton } from './styles'

type Methods = 'creditCard' | 'debitCard' | 'money'

export function PaymentMethod() {
  const [method, setMethod] = useState<Methods | undefined>(undefined)

  return (
    <FormBase
      icon={<CurrencyDollar size={22} color={defaultTheme.colors.purple} />}
      title="Pagamento"
      subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
    >
      <FormContainer>
        <PaymentMethodButton
          type="button"
          selected={method === 'creditCard'}
          onClick={() => setMethod('creditCard')}
        >
          <CreditCard size={22} color={defaultTheme.colors.purple} />
          <span>Cartão de crédito</span>
        </PaymentMethodButton>

        <PaymentMethodButton
          type="button"
          selected={method === 'debitCard'}
          onClick={() => setMethod('debitCard')}
        >
          <Bank size={22} color={defaultTheme.colors.purple} />
          <span>Cartão de débito</span>
        </PaymentMethodButton>

        <PaymentMethodButton
          type="button"
          selected={method === 'money'}
          onClick={() => setMethod('money')}
        >
          <Money size={22} color={defaultTheme.colors.purple} />
          <span>Dinheiro</span>
        </PaymentMethodButton>
      </FormContainer>
    </FormBase>
  )
}
