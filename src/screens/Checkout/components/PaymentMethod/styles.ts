import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethodButton = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  outline: none;
  border: 0;

  background-color: ${(props) =>
    props.selected
      ? props.theme.colors['purple-light']
      : props.theme.colors['base-button']};

  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme.colors.purple}`
      : `1px solid transparent`};

  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;

  span {
    font-size: ${(props) => props.theme.fontSizes[12]};
    color: ${(props) => props.theme.colors['base-text']};
    text-transform: uppercase;
  }
`
