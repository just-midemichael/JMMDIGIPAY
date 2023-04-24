import React, { ReactNode, useEffect, useState } from 'react'
import '../assets/style/body.css'
import { BodyProps } from '../type/BodyType'



const Body = ({children}: BodyProps) => {

  
  
 
  
  
  const aosHandler = () => {
    const aosElement = document.querySelectorAll('.aos')
    
    window.addEventListener('scroll', aosHandler)
    const triggerAos = window.innerHeight / 5 * 4

    aosElement.forEach((aos) => {
      const aosTop = aos.getBoundingClientRect().top

      if (triggerAos > aosTop) {
        aos.classList.add('aos-show')
      }
      else {
        aos.classList.remove('aos-show')
      }
    }) 
  }
aosHandler()



  return (
    <section id='page-body' className='body-container' >
        {children}
    </section>
  )
}

export default Body

