import styled from 'styled-components'

export const OrderCompletedContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
`
export const Title = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-size: ${(props) => props.theme.fontSizes[32]};
  line-height: 130%;
`

export const Subtitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.fontSizes[20]};
  line-height: 130%;
`

export const StatusImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const StatusBorder = styled.div`
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.colors['yellow-dark']},
    ${(props) => props.theme.colors.purple}
  );
  width: 40rem;
  height: 17rem;
  border-radius: 6px 36px;
  position: relative;
`

export const StatusWrapper = styled.div`
  position: absolute;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
`

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconWrapper = styled.div<{ background: string }>`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.background};
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`
