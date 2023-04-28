import React from 'react'
import '../../assets/style/saving.css'
import LoginButton from '../../components/LoginButton'
import Box from '../../components/Box'

const Savings = () => {
  const docTitle = () => {
    document.title = 'Savings'
  }
  docTitle()

  return (
    <div className='body saving-body'>
      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Secure future wealth with a DigiPay flexy Save plan</span>
            

            <div className='summary-container'>
              <div className='summary'>
                Looking for a secure and flexible Saving plan?. We've got it cover. Flexible saving plans at your finger tips to cater for your needs. 
              </div>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='image/saving-image-1.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>
        <div className='box-wrapper'>
          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/saving-icon.png'/>
              </div>
              <p className='description-container'>
                Get up to 15.5% annual interest on Fixed Savings.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/saving-icon.png'/>
              </div>
              <p className='description-container'>
              Save every time with the the Save+Spend plan.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/saving-icon.png'/>
              </div>
              <p className='description-container'>
                zero bank charges.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/saving-icon.png'/>
              </div>
              <p className='description-container'>
                Invest spare cash and watch your money grow.
              </p>
          </Box>
        </div>

        <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/saving-image-3.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Best interest rate in the market</div>

              <div className='text-description '>
              Enjoy best interest rates, up to 15.5% on your DigiPay savings account. Save and get analyses report on demand 
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Easy save is the real thing</div>

              <div className='text-description '>
                We help you put money away every time you pay for something. Activate the Spend+Save plan and watch your money grow.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/saving-image-5.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/saving-image-4.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Meet your money goals seamlessly</div>

              <div className='text-description '>
                Our flexible savings plan is tailored to cater for your needs. Save daily, weekly or monthly seamlessly.
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

export default Savings