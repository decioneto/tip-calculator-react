import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'

import Switch from './components/Switch'
import LogoLight from './assets/images/logo-light.svg'
import LogoDark from './assets/images/logo-dark.svg'

import { Container } from './styles/appStyles'

function App() {

  return (
    <ThemeProvider theme={light}>
      <Container>
        
        <div className="img">
          {light ? (
            <img src={LogoLight} alt="Logo" />
          ) : (
            <img src={LogoDark} alt="Logo" />
          )}
        </div>

        {/* <Calculator /> */}

        <Switch />

      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
