import { ButtonHTMLAttributes, ReactNode, useState } from 'react'

import { ButtonPrimary } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
}

function Button({ children }:ButtonProps) {
  const [active, setActive] = useState(false)

  function buttonSelected() {
    setActive(!active)
  }

  return (
    <ButtonPrimary className={active ? 'active' : ''} onClick={buttonSelected}>
      {children}
    </ButtonPrimary>
  )
}

export default Button;