import { useContext, useEffect } from 'react'
import coffeeIntroImg from '../../assets/coffe-intro.svg'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../constants/coffees'
import { items } from '../../constants/items'
import { AddressContext } from '../../contexts/AddressContext'
import {
  CoffeesContainer,
  IntroContainer,
  Item,
  ItemsContainer,
  TitleContainer,
} from './styles'

export function Home() {
  const { onSaveAddress } = useContext(AddressContext)

  useEffect(() => {
    const storagedAddress = localStorage.getItem('@coffee-delivery:address')
    onSaveAddress(JSON.parse(storagedAddress!!))
  }, [])

  return (
    <>
      <IntroContainer>
        <div className="title-items">
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
          </TitleContainer>

          <ItemsContainer>
            {items.map((item) => (
              <Item key={item.id} bgColor={item.color}>
                <div className="icon">{item.icon}</div>
                <span>{item.title}</span>
              </Item>
            ))}
          </ItemsContainer>
        </div>

        <img src={coffeeIntroImg} alt="" />
      </IntroContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <div className="coffees-list">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeesContainer>
    </>
  )
}
