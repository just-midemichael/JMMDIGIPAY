import React from 'react'
import '../assets/style/joinDigipay.css'
import Box from '../components/Box'

const JoinDigipay = () => {
  return (
    <div className='body join-digipay-body'>

        {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Download DigiPay, open an account!</span>
            

            <div className='summary-container'>
              <div className='summary'>
              We're here to help you get the best out of your money, no strings attached. Welcome to your freedom!
              </div>
            </div>

            <div className='button-container'>
                <button className='google .button'></button>
                <button className='apple .button'></button>
            </div>

            <div className='qr-code-container'>
                <div className='qr-code'>

                </div>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='image/hero-picture-3.png' />
          </div>
        </div>
      </section>{/***********ENDs************/}

      {/* SECTION - 2 */}
      <section className='section-2'>
        <div className='box-wrapper'>
          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/download-prompt-icon.png'/>
              </div>
              <p className='description-container'>
                Download DigiPay on Google Play or the App Store.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/download-prompt-icon.png'/>
              </div>
              <p className='description-container'>
                Open the app and follow the prompts on the screen.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/download-prompt-icon.png'/>
              </div>
              <p className='description-container'>
                Add money to your account to get the best out of DigiPay.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/download-prompt-icon.png'/>
              </div>
              <p className='description-container'>
                Start making transactions.
              </p>
          </Box>
        </div>
        </section>{/***********ENDs************/}

    </div>
  )
}

export default JoinDigipay