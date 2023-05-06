import React, { ReactNode } from 'react'
import '../headerTitle/headerTitle.css'

const HeaderTitle = ({children}: {children: ReactNode}) => {
  return (
    <h2 className='header-title-h2'>
        {children}
    </h2>
  )
}

export default HeaderTitle