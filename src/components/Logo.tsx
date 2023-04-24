import React from 'react'
import '../assets/style/logo.css'
import { useNavigate } from 'react-router-dom'

const Logo = () => {

  return (
    <span className='logo'>
      <a className='link' href='/'>DigiPay</a>
    </span>
  )
}

export default Logo