import styled from 'styled-components'

export const InputWrapper = styled.div`
  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 0 0.5rem;
  border-radius: 6px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.purple};
  }

  input {
    border: 0;
    background-color: transparent;
    text-align: center;
    color: ${(props) => props.theme.colors['base-title']};
    height: 2.375rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`
