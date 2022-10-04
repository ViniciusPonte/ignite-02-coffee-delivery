import { MapPinLine } from 'phosphor-react'
import { FormBase } from '../../../../components/FormBase'
import { Input } from '../../../../components/Input'
import { defaultTheme } from '../../../../styles/themes/default'
import { FormContainer, FormGroup } from './styles'

export function AddressForm() {
  return (
    <FormBase
      icon={<MapPinLine size={22} color={defaultTheme.colors['yellow-dark']} />}
      title="Endereço de Entrega"
      subtitle="Informe o endereço onde deseja receber seu pedido"
    >
      <FormContainer>
        <Input placeholder="CEP" style={{ width: '12.5rem' }} />
        <Input placeholder="Rua" style={{ flex: 1 }} />
        <FormGroup>
          <Input placeholder="Número" style={{ width: '12.5rem' }} />
          <Input placeholder="Complemento" style={{ flex: 1 }} optional />
        </FormGroup>
        <FormGroup>
          <Input placeholder="Bairro" style={{ width: '12.5rem' }} />
          <Input placeholder="Cidade" style={{ flex: 1 }} />
          <Input placeholder="UF" style={{ width: '3.75rem' }} />
        </FormGroup>
      </FormContainer>
    </FormBase>
  )
}
