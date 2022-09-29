import coffeeIntroImg from '../../assets/coffe-intro.svg'
import { items } from './constants/items'
import { IntroContainer, Item, ItemsContainer, TitleContainer } from './styles'

export function Home() {
  return (
    <IntroContainer>
      <div className="title-items">
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h4>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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
  )
}
