import React from 'react'
import '../../assets/style/loan.css'
import LoginButton from '../../components/LoginButton'
import Box from '../../components/Box'

const Loans = () => {
  const docTitle = () => {
    document.title = 'Loans'
  }
  docTitle()

  return (
    <div className='body loan-body'>


      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Instant loans without hassle</span>
            

            <div className='summary-container'>
              <div className='summary'>
                Get instant loan for your small business or personal emergency needs at low interest rate. No collateral, No paper work.  
              </div>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='image/loan-image-1.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>
        <div className='box-wrapper'>
          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/loan-icon.png'/>
              </div>
              <p className='description-container'>
                Sign up on DigiPay and upgrade your account.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/loan-icon.png'/>
              </div>
              <p className='description-container'>
                Use your account regularly, pay bills, and make transactions.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/loan-icon.png'/>
              </div>
              <p className='description-container'>
                Get an overdraft!.
              </p>
          </Box>
        </div>

        <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/loan-image-2.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Apply for loan 24/7, get funded in instantly</div>

              <div className='text-description '>
              Access loans with no collateral or guarantor. Get cashback bonus interest once you repay on time.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Automatic overdraft for active account</div>

              <div className='text-description '>
                DigiPay Overdrafts are short-term loans you can take anytime as you use your account regularly.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/loan-image-4.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/loan-image-3.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Unlock higher amounts</div>

              <div className='text-description '>
                Repay on time to unlock higher loan amounts at lower interest rates.
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

export default Loans