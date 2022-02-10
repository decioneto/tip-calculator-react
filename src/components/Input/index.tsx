import React, {InputHTMLAttributes} from 'react'

import { Container } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  icon: React.ComponentType
}

function Input({ title, icon:Icon, ...props }:InputProps) {
  return (
    <Container>
      <label htmlFor="bill">{title}</label>
      <div>
        <input {...props} />
        <Icon />
      </div>
    </Container>
  )
}

export default Input