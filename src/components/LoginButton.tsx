import React, { Children, ReactNode } from 'react'
import '../assets/style/loginButton.css'

interface LoginButtonType {
  children: ReactNode,
  className?: string,
}

const LoginButton = ({children, className}: LoginButtonType) => {
  return (
    <button className='button'>{children}</button>
  )
}

export default LoginButton