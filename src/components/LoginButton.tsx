import React, { ReactNode } from 'react'
import '../assets/style/loginButton.css'

const LoginButton = ({children}: {children: ReactNode}) => {
  return (
    <button className='button'>{children}</button>
  )
}

export default LoginButton