import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { OrderContext } from '../../contexts/OrderContext'
import { defaultTheme } from '../../styles/themes/default'
import { AddressForm } from './components/AddressForm'
import { OrderSummary } from './components/OrderSummary'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer, Column } from './styles'
import { AddressFormData, AddressFormSchema } from './validation'
import { AddressContext } from '../../contexts/AddressContext'

export function Checkout() {
  const { activeOrder, createOrder, paymentMethod } = useContext(OrderContext)
  const { onSaveAddress } = useContext(AddressContext)

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      postalCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, reset } = addressForm

  function handleCreateNewOrder(data: any) {
    createOrder({ ...data, paymentMethod, orderItems: activeOrder })
    onSaveAddress(data)

    localStorage.setItem('@coffee-delivery:activeOrder', JSON.stringify([]))
  }

  useEffect(() => {
    const storagedAddress = localStorage.getItem('@coffee-delivery:address')
    reset(JSON.parse(storagedAddress!!))
  }, [])

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <FormProvider {...addressForm}>
        <Column>
          <h2>Complete seu pedido</h2>
          <AddressForm />
          <PaymentMethod />
        </Column>

        {activeOrder.length > 0 && (
          <Column>
            <h2>Revise seu pedido</h2>

            <OrderSummary />
          </Column>
        )}
      </FormProvider>
    </CheckoutContainer>
  )
}
