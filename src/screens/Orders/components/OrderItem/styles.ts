import styled from 'styled-components'

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
`

export const CoffeeRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.background};
  gap: 2rem;
  text-align: left;

  img {
    width: 50px;
    height: 50px;
  }

  .coffee-name {
    width: 15ch;
  }

  span:not(.coffee-name) {
    font-weight: bold;
  }
`
