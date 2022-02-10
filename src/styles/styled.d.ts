import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      background: string,

      backgroundButtonPrimary: string,
      backgroundButtonPrimaryHover: string,
      backgroundButtonPrimaryFocus: string,
      colorButton: string,
      colorButtonHover: string,

      backgroundSwitch: string,
      title: string,
      titleSecondary: string,
      
      backgroundCalculator: string,
      
      backgroundInput: string,
      placeholdertInput: string,
      iconInput: string
    }
  }
}