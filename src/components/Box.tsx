import React, { ReactNode } from 'react'
import '../assets/style/box.css'

const Box = ({children}: {children: ReactNode}) => {
  return (
    <div className='box-container aos aos-bottom'>
        {children}
    </div>
  )
}

export default Box