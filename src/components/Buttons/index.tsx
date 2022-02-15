import { ButtonHTMLAttributes, ReactNode, useState } from 'react'

import { ButtonPrimary } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  isSecondary?: boolean;
}

function Button({ children, isSecondary, ...props }:ButtonProps) {
  const [active, setActive] = useState(false)

  function buttonSelected() {
    setActive(!active)
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