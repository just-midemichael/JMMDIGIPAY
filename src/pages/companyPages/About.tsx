import React from 'react'
import '../../assets/style/aboutUs.css'
import LoginButton from '../../components/LoginButton'
import Box from '../../components/Box'

const About = () => {
  const docTitle = () => {
    document.title = 'About Us'
  }
  docTitle()

  return (
    <div className='body about-us-body'>


      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Banking Made eazy</span>
            

            <div className='summary-container'>
              <div className='summary'>
                Providing Africans with the best digital banking payment solution. At DigiPay, We believe in reliable credit and quality financial services inclusion.
              </div>
            </div>

            <div className='get-stated'>

            <a href='/joinDigipay'>
              <LoginButton>Join DigiPay</LoginButton>
            </a>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='../src/assets/image/hero-picture-3.png' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>
        

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-bottom'>
              <div className='title '>Who we are</div>

              <div className='text-description '>
                <p>
                  We empower individuals with access to credit, simple payments solutions, high-yield investment opportunities and easy-to-use tools for personal financial management.
                </p>
                <p>
                  we're determined and we've built a Central Bank-licensed, digital banking platform to help users get the best out of your money without overcharging you.
                </p>
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-bottom'>
              <div className='title '>Our Mission</div>

              <div className='text-description '>
                <p>
                  Our mission is to empower all africans with the reliable financial access they need in thier day-to-day personal life.
                </p>
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-bottom'>
              <div className='title '>Our Founders</div>
              
              <div className='founders-container'>
                <div className='founder-details-wrapper aos aos-fade'>
                  <div className='founder-image-container'>
                    <img src='../src/assets/image/founder-image-1.png' alt='founder' className='founder-image'/>
                  </div>

                  <div className='founder-description'>
                    <h3 className='founder-name'>Olumide Michael</h3>
                    <p className='founder-designation'>Co-Founder & CEO</p>
                  </div>
                </div>
                
                <div className='founder-details-wrapper aos aos-fade'>
                  <div className='founder-image-container'>
                    <img src='../src/assets/image/founder-image-1.png' alt='founder' className='founder-image'/>
                  </div>

                  <div className='founder-description'>
                    <h3 className='founder-name'>Olumide Michael</h3>
                    <p className='founder-designation'>Co-Founder & CTO</p>
                  </div> 
                </div>
              </div>
            </div>
          </article>

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

export default About