import { ListDashes, MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { HeaderContainer, Location, StyledButton } from './styles'

export function Header() {
  const itemsOnCard = [1, 2]
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo Coffee Delivery" />
      </NavLink>

      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>Guarulhos, SP</span>
        </Location>

        <StyledButton to="/orders">
          <ListDashes weight="fill" size={22} />
        </StyledButton>

        <StyledButton to="/checkout">
          {itemsOnCard.length > 0 && <span className="items-on-card">2</span>}
          <ShoppingCart weight="fill" size={22} />
        </StyledButton>
      </div>
    </HeaderContainer>
  )
}
