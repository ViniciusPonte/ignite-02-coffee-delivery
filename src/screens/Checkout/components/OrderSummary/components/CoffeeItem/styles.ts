import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0.25rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ImageAndQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 6.5px 8px;
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: ${(props) => props.theme.colors['base-button']};
  height: 2.375rem;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  span {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizes[12]};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const PriceText = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors['base-text']};
`
