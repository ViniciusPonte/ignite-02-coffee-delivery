import { ListDashes, MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { AddressContext } from '../../contexts/AddressContext'
import { OrderContext } from '../../contexts/OrderContext'
import { HeaderContainer, Location, StyledButton } from './styles'

export function Header() {
  const { activeOrder } = useContext(OrderContext)
  const { address } = useContext(AddressContext)

  const totalItems = activeOrder.reduce((sum, i) => {
    if (i.quantity) {
      return sum + i.quantity
    } else {
      return sum
    }
  }, 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo Coffee Delivery" />
      </NavLink>

      <div>
        {address && (
          <Location>
            <MapPin weight="fill" size={22} />
            <span>{`${address.city}, ${address.state}`}</span>
          </Location>
        )}

        <StyledButton to="/orders">
          <ListDashes weight="fill" size={22} />
        </StyledButton>

        <StyledButton to="/checkout" disabled={activeOrder.length === 0}>
          {activeOrder.length > 0 && (
            <span className="items-on-card">{totalItems}</span>
          )}
          <ShoppingCart weight="fill" size={22} />
        </StyledButton>
      </div>
    </HeaderContainer>
  )
}
