import { ButtonHTMLAttributes, useState } from 'react'

import { ButtonPrimary } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  isSecondary?: boolean;
  hasFocus?: boolean;
}

function Button({ children, isSecondary, hasFocus, ...props }:ButtonProps) {

  return (
    <ButtonPrimary 
      isSecondary={isSecondary}
      {...props}
    >
      {children}
    </ButtonPrimary>
  )
}

export default Button;