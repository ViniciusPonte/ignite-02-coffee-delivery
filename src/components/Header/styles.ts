import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 4px;
  color: ${(props) => props.theme.colors['purple-dark']};
  background-color: ${(props) => props.theme.colors['purple-light']};
  border-radius: 6px;

  span {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const Cart = styled.button`
  border: 0;
  outline: 0;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  .items-on-card {
    position: absolute;
    right: -8.35px;
    top: -8px;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};
    border-radius: 1000px;
    line-height: 130%;
    font-size: ${(props) => props.theme.fontSizes[12]};
    font-weight: 700;
  }
`
