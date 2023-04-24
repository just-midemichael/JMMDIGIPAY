import React from 'react'
import '../../assets/style/card.css'
import LoginButton from '../../components/LoginButton'
import Box from '../../components/Box'

const Cards = () => {
  const docTitle = () => {
    document.title = 'Cards'
  }
  docTitle()

  return (
    <div className='body card-body'>


      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Power your transaction with DigiPay card</span>
            

            <div className='summary-container'>
              <div className='summary'>
                Request a DidiPay card today and we'll deliver it to you free or pick it up whenever ready.
              </div>
            </div>

            <div className='get-card'>

            <a href='/joinDigipay'>
              <LoginButton>Get card</LoginButton>
            </a>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='../src/assets/image/card-image-1.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>
        <div className='box-wrapper'>
          <Box>
              <div className='icon-container'>
                <img className='icon' src='../src/assets/icon/card-icon.png'/>
              </div>
              <p className='description-container'>
                Pick up your card from us or choose our super fast delivery option.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='../src/assets/icon/card-icon.png'/>
              </div>
              <p className='description-container'>
                Our cards are widely accepted for international and local transactions.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='../src/assets/icon/card-icon.png'/>
              </div>
              <p className='description-container'>
                Zero card maintenance fee again.
              </p>
          </Box>
        </div>

        <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/card-image-5.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Fast payment with DigiPay</div>

              <div className='text-description '>
                Make payments with your DigiPay card on both online and physical channels anywhere.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Delivered to you with no hassle</div>

              <div className='text-description '>
                After applying for your card, we'll send it straight to you at zero cost.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/card-image-2.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/card-image-4.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Secure your card</div>

              <div className='text-description '>
                Your card, your safety rules. From card freezes to setting spending limits, you're completely in charge.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Instant notifications on every transaction</div>

              <div className='text-description '>
                Be the first to know when money leaves your account and when you receive money.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/card-image-3.jpg'/>
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

export default Cards