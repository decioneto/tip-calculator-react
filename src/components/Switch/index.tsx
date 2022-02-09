import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

type SwitchProps = {
  toggleTheme: () => void; 
}
 
const Switch = ({ toggleTheme }:SwitchProps) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <label htmlFor="switch">
        <input 
          type="checkbox" 
          id="switch" 
          onChange={toggleTheme} 
          checked={title === 'dark'} />
        <span className='slider'></span>
      </label>
    </Container>
  );
}

export default Switch;
