import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import { OrderContextProvider } from './contexts/OrderContext'
import { AddressContextProvider } from './contexts/AddressContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AddressContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </AddressContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
