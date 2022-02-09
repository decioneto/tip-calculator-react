import React, {InputHTMLAttributes} from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  icon: React.ComponentType
}

import { Container } from './styles'

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