import React from 'react'
import "../../assets/style/contactUs.css"
import LoginButton from '../../components/LoginButton'

const Contact = () => {
  const docTitle = () => {
    document.title = 'Contact Us'
  }
  docTitle()

  return (
    <div className='body contact-us-body'>
      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point'>

            <span className='core-value'>Contact Us</span>
            
            <div className='summary-container'>
              <div className='summary'>
              We might be a bank in an app but we don't leave our customers hanging. Everything about us is on the app, but if you ever need help (or you just want to chat), we've got you.
              <p className='contact-telephone-number phone-number'>
                <a href='tel:+44-XXX-YY-ZZZ'>Call: +44-XXX-YY-ZZZ</a>
              </p>
              <p className='contact-email email-address'>
                <a href='mailto:custormer-service@digipay.uk'>Email: custormer-service@digipay.uk</a>
              </p>
              </div>
            </div>
          </div>

          <div className='image-focal-point'>
            {/* <div className='image-container'></div> */}
            <img className='image' src='image/contact-image-1.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>

        <div className='content-container aos aos-bottom'>
          <div className='content-title '>Banking Made Easy</div>
          <div className='content-description '>
            Open a DigiPay bank account from your phone or computer and follow the simple on-screen steps to register for an account in minutes
          </div>

          <a href='/joinDigipay'>
            <LoginButton>Join DigiPay</LoginButton>
          </a>
        </div>
      </section>
    </div>
    
  )
}

export default Contact