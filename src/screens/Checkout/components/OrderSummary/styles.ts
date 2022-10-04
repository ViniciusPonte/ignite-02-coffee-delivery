import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px 44px;
  width: 100%;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`

export const PriceRow = styled.div<{ bold?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    color: ${(props) =>
      props.bold
        ? props.theme.colors['base-subtitle']
        : props.theme.colors['base-text']};
    font-size: ${(props) =>
      props.bold ? props.theme.fontSizes[20] : props.theme.fontSizes[14]};
    font-weight: ${(props) => (props.bold ? '700' : ' 400')};
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.yellow};
  text-transform: uppercase;
  padding: 0.75rem;
  margin-top: 1.5rem;
  border: 0;
  border-radius: 6px;
  transition: background 0.2s;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
