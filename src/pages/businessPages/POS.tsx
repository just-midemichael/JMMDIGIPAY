import React from 'react'
import '../../assets/style/pos.css'
import LoginButton from '../../components/LoginButton'

const POS = () => {
  const docTitle = () => {
    document.title = 'POS'
  }
  docTitle()

  return (
    <div className='body pos-body'>

      
      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point'>

            <span className='core-value'>Turn any smartphone into a POS with DigiPay POS Business</span>

            <div className='summary-container'>
              <div className='summary'>
                Turn any smartphone into a POS with DigiPay POS for Business
              </div>
            </div>

            <div className='apply-now'>
              <a href='/joinDigipay'>
                <LoginButton>Apply now</LoginButton>
              </a>
            </div>
          </div>

          <div className='image-focal-point'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='image/pos-image-5.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}



      {/* SECTION - 2 */}
      <section className='section-2 features-section'>
        
          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/pos-image-6.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Move your business forward with DigiPay POS</div>

              <div className='text-description '>
                Business can find you anywhere. DigiPay POS from helps you receive payments on the move with any smartphone connected to the internet.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Keep an eye on your revenue</div>

              <div className='text-description '>
                You can track all POS transactions in real-time on your DigiPay Business mobile app for Android and iOS.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/pos-image-3.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/pos-image-2.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title'>Give your customers more flexible payment option</div>

              <div className='text-description '>
                DigiPay POS gives you several payment options including transfers, Pay with QR codes, USSD and cards.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Supercharge your sales with Sales Mode</div>

              <div className='text-description '>
                Assign devices with DigiPay POS to your staff and track sales easily wherever you are.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/pos-image-4.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/pos-image-1.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title'>Receive payments on the move with DigiPay POS</div>

              <div className='text-description '>
                Open a DigiPay Business account and turn your phone into a POS.
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

export default POS