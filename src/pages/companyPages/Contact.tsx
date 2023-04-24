import React from 'react'

const Contact = () => {
  const docTitle = () => {
    document.title = 'Contact Us'
  }
  docTitle()

  return (
    <section className='body'>Contact</section>
  )
}

export default Contact