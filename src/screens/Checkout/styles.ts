import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fontSizes[18]};
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 700;
    margin-bottom: 0.25rem;
  }
`
