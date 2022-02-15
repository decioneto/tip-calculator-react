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
      colorButtonPrimary: string,
      colorButtonPrimaryHover: string,

      backgroundButtonSecondary: string,
      backgroundButtonSecondaryHover: string,
      colorButtonSecondary: string,
      colorButtonSecondaryHover: string,

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