import React, { EventHandler } from 'react'
import '../assets/style/hamburger.css'

type HamburgerProps = {
  menuDisplay: React.MouseEventHandler
}
const Hamburger = ({menuDisplay}: HamburgerProps) => {

  
  return (
    <span className='box-wrapper' onClick={menuDisplay}>
        <div className='box box-1 ' id='box-1'></div>
        <div className='box box-2 ' id='box-2'></div>
        <div className='box box-3 ' id='box-3'></div>
    </span>
  )
}

export default Hamburger