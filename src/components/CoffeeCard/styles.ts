import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.colors['base-card']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  padding: 1.25rem 1.5rem;
`

export const CoffeeImage = styled.img`
  margin-top: -2.5rem;
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  span {
    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizes[10]};
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 100px;
  }
`

export const Title = styled.h4`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes[20]};
  line-height: 1.625rem;
`

export const Description = styled.h5`
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors['base-label']};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes[14]};
  line-height: 1.1rem;
`

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  .price {
    display: flex;
    align-items: flex-end;
    gap: 4px;

    h6 {
      font-size: ${(props) => props.theme.fontSizes[14]};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 31.2px;
    }

    h4 {
      font-size: ${(props) => props.theme.fontSizes[24]};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    button {
      outline: 0;
      border: 0;
      padding: 0.5rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors['purple-dark']};
      color: ${(props) => props.theme.colors.white};
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.colors.purple};
      }
    }
  }
`
