import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { FormBase } from '../../../../components/FormBase'
import { Input } from '../../../../components/Input'
import { masks } from '../../../../constants/masks'
import { defaultTheme } from '../../../../styles/themes/default'
import { FormContainer, FormGroup } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <FormBase
      icon={<MapPinLine size={22} color={defaultTheme.colors['yellow-dark']} />}
      title="Endereço de Entrega"
      subtitle="Informe o endereço onde deseja receber seu pedido"
    >
      <FormContainer>
        <Input
          placeholder="CEP"
          style={{ width: '12.5rem' }}
          {...register('postalCode')}
        />
        <Input placeholder="Rua" style={{ flex: 1 }} {...register('street')} />
        <FormGroup>
          <Input
            placeholder="Número"
            style={{ width: '12.5rem' }}
            {...register('number')}
          />
          <Input
            placeholder="Complemento"
            style={{ flex: 1 }}
            {...register('complement')}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Bairro"
            style={{ width: '12.5rem' }}
            {...register('neighborhood')}
          />
          <Input
            placeholder="Cidade"
            style={{ flex: 1 }}
            {...register('city')}
          />
          <Input
            placeholder="UF"
            style={{ width: '3.75rem' }}
            {...register('state')}
          />
        </FormGroup>
      </FormContainer>
    </FormBase>
  )
}
