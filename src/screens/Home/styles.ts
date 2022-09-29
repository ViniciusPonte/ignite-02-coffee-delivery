import styled from 'styled-components'

export const IntroContainer = styled.div`
  padding: 5.875rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  .title-items {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 37.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    font-size: ${(props) => props.theme.fontSizes[48]};
    font-weight: 800;
    color: ${(props) => props.theme.colors['base-title']};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes[20]};
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.25rem;
`

export const Item = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    background-color: ${(props) => props.bgColor};
    padding: 0.5rem;
    border-radius: 1000px;
    width: 2rem;
    height: 2rem;
  }
`
