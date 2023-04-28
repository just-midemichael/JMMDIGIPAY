import React from 'react'
import '../../assets/style/agent.css'
import LoginButton from '../../components/LoginButton'

const Agents = () => {
  const docTitle = () => {
    document.title = 'Agents'
  }
  docTitle()

  return (
    <div className='body agent-body'>

      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point'>

            <span className='core-value'>Make more money as DigiPay noney agent</span>

            <div className='summary-container'>
              <div className='summary'>
                Earn high commissions and offer your customers reliable payments as a DigiPay Mobile Money agent.
              </div>
            </div>

            <div className='register-now'>
              <a href='/joinDigipay'>
                <LoginButton>Register now</LoginButton>
              </a>
            </div>
          </div>

          <div className='image-focal-point'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='image/agent-image-1.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}



      {/* SECTION - 2 */}
      <section className='section-2 features-section'>
        
          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/agent-image-4.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>High commissions</div>

              <div className='text-description '>
                Earn more with DigiPay! Enjoy low fees and earn extra incentives for hitting performance milestones.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Quick settlements</div>

              <div className='text-description '>
                With DigiPay, you have the freedom to access your money the moment you make it through instant settlement.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/agent-image-3.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/agent-image-2.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title'>Great support to help you</div>

              <div className='text-description '>
                Every agent is allocated a dedicated sales manager. We also have several support channels for you to reach us anytime you have a question or need assistance.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>24/7 support</div>

              <div className='text-description '>
                You'll have access to a dedicated sales manager and our 24/7 customer care line to support you.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/agent-image-6.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/agent-image-5.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title'>The right business solution for you</div>

              <div className='text-description '>
                Whether you're just getting started or have complex business requirements, we have the solution for you! Financing options available.
              </div>
            </div>
          </article>

          <div className='app-download-container'>
            <div className='download-image-container aos aos-left aos-fade'>
              <img className='image download-image ' src='image/business-registration-image-2.png'/>
            </div>

            <div className='app-download-wrapper aos aos-right'>
              <div className='title'>Download DigiPay</div>
              <p className='description'>
                Get DigiPay Business App from your favorite app store.
              </p>
              <div className='button-container'>
                  <button className='google '></button>
                  <button className='apple '></button>
              </div>
            </div>
          </div>   
      </section>{/***********ENDs************/}

    </div>
  )
}

export default Agents