import React, { ReactNode } from 'react'
import '../card/helpCard.css'

const HelpCard = ({children}: {children: ReactNode}) => {
  return (
    <div className='help-card-box'>
        {/* <img className='help-card-icon' src=''/>
        <div className='card-title'></div> */}
        {children}
    </div>
  )
}

export default HelpCard