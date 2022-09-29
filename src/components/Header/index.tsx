import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { Cart, HeaderContainer, Location } from './styles'

export function Header() {
  const itemsOnCard = [1, 2]
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Coffee Delivery" />

      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>Guarulhos, SP</span>
        </Location>

        <Cart>
          {itemsOnCard.length > 0 && <span className="items-on-card">2</span>}
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
