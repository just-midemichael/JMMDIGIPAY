import React from 'react'
import '../../assets/style/buisnessRegistration.css'
import LoginButton from '../../components/LoginButton';

const BusinessRegistration = () => {
  const docTitle = () => {
    document.title = 'Business Registration'
  }
  docTitle();


  return (
    <div className='body business-registration-body'>
      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Register your business to grow!</span>

            <div className='summary-container'>
              <div className='summary'>
                Get your CAC registration documents and your Tax Identification Number (TIN) easily through your  DigiPay Business account 
              </div>
            </div>

            <div className='register-now'>
              <a href='/joinDigipay'>
                <LoginButton>Register now</LoginButton>
              </a>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='../src/assets/image/business-registration-image-10.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}



      {/* SECTION - 2 */}
      <section className='section-2 features-section'>
        
          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/business-registration-image-8.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Meet the requirements for a full business account</div>

              <div className='text-description '>
                With a registered business, you can upgrade to a full DigiPay Business account and increase your daily transaction limit to ₦250 million.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Give potential customers more confidence in your business</div>

              <div className='text-description '>
                Registering your business with the CAC makes it official and more trustworthy.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/business-registration-image-6.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/business-registration-image-5.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title'>Take advantage of opportunities to upscale your business</div>

              <div className='text-description '>
                Get your CAC documents so you can apply for loans and grants that are exclusive to registered businesses.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Register your business to grow!</div>

              <div className='text-description '>
                Get your CAC registration documents and your Tax Identification Number (TIN) easily through your DigiPay Business account.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/business-registration-image-9.jpg'/>
              </div>  
            </div>
          </article>

          <div className='app-download-container'>
            <div className='download-image-container aos aos-left aos-fade'>
              <img className='image download-image ' src='../src/assets/image/business-registration-image-2.png'/>
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

export default BusinessRegistration