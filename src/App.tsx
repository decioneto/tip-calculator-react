import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import usePesistedState from './hooks/usePersistedState'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { CalculateContextProvider } from './context/CalculateContext'

import Calculator from './components/Calculator'
import Switch from './components/Switch'
import LogoLight from './assets/images/logo-light.svg'
import LogoDark from './assets/images/logo-dark.svg'

import { Container } from './styles/appStyles'

function App() {
  const [theme, setTheme] = usePesistedState('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <CalculateContextProvider>
        <Container>
          
          <div className="img">
            {theme.title === 'light' ? (
              <img src={LogoLight} alt="Logo" />
            ) : (
              <img src={LogoDark} alt="Logo" />
            )}
          </div>

          <Calculator />

          <Switch toggleTheme ={toggleTheme} />

        </Container>
        <GlobalStyle />
      </CalculateContextProvider>
    </ThemeProvider>
  )
}

export default App
