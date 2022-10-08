import styled from 'styled-components'

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const OptionalText = styled.span`
  position: absolute;
`
