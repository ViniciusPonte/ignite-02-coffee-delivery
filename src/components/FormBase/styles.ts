import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  transition: all 2s;

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;

    .icon-title {
      display: flex;
      align-items: flex-start;
      gap: 8px;

      .title-subtitle {
        display: flex;
        flex-direction: column;

        .title {
          line-height: 130%;
          color: ${(props) => props.theme.colors['base-subtitle']};
        }

        .subtitle {
          line-height: 130%;
          font-size: ${(props) => props.theme.fontSizes[14]};
          color: ${(props) => props.theme.colors['base-text']};
        }
      }
    }
  }
`
