import { ButtonHTMLAttributes, ReactNode, useState } from 'react'

import { ButtonPrimary } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  isSecondary?: boolean;
  hasFocus?: boolean;
}

function Button({ children, isSecondary, hasFocus, ...props }:ButtonProps) {
  const [active, setActive] = useState(false)

  function buttonSelected() {
    if(hasFocus) {
      setActive(true)
    }

    if(active) {
      setActive(false)
    }
  }

  return (
    <ButtonPrimary 
      className={active ? 'active' : ''} 
      isSecondary={isSecondary}
      onClick={buttonSelected}
      {...props}
    >
      {children}
    </ButtonPrimary>
  )
}

export default Button;