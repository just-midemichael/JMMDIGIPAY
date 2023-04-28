import React, { useState } from 'react'
import '../assets/style/home.css'
import LoginButton from '../components/LoginButton'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const docTitle = () => {
    document.title = 'JMM DIGI PAY'
  }
  docTitle()

  const navigate = useNavigate()
  

  return (
    <div className='body'>

      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Providing you with fast and reliable</span>

            <span className='core-service-container'>
            <span className='core-service'>Payment</span>
            <span className='core-service'>Investment</span>
            <span className='core-service'>Loans</span>
            </span>

            <div className='summary-container'>
              <div className='summary'>
                Pay bills, transfer money, get instant loans.
                Save, spend, send and invest money across borders with DigiPay. 
              </div>
            </div>

            <div className='get-started'>
              <a href='/joinDigipay'>
                <LoginButton>Get Started</LoginButton>
              </a>
            </div>

            <div className='license-container'>
              <div className='license-wrapper'>
                <img className='license-icon' src='src/assets/icon/NDIC-ICON.png' alt='ndic icon'/>
                <a href='https://ndic.gov.ng/' target='_blank'>NDIC</a>
              </div>

              <div className='license-wrapper'>
                <img className='license-icon' src='src/assets/icon/CBN-ICON.png' alt='cbn icon'/>
                <a href='https://www.cbn.gov.ng/' target='_blank'>Lincensed by the Central Bank</a>
              </div>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='src/assets/image/hero-picture-3.png' />
          </div>
        </div>
      </section>{/***********ENDs************/}



      {/* SECTION - 2 */}
      <section className='section-2 features-section'>
          <div className='title'>Features</div>
          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/investment.jpg' onClick={() => navigate('/investment')}/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Investments</div>

              <div className='text-description '>
                We're bringing verified global investment options closer to every African with fractional shares on DigiPay, giving anyone with a DigiPay account the opportunity to build wealth on the go.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Savings</div>

              <div className='text-description '>
                Finding a better way to automate your saving? You save and we care of the rest. 
                Earn up to 15.8% annual interest when you save with DigiPay and spend without any withdrawal charges.
                
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/saving.jpg' onClick={() => navigate('/saving')}/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='src/assets/image/loan.jpg' onClick={() => navigate('/loan')}/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Loans</div>

              <div className='text-description '>
                Need money urgently? DigiPay got you covered.
                Apply for loan 24/7 and receive funds in your DigiPay account instantly with low interest rates.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Payment</div>

              <div className='text-description '>
                Make unlimited instant transfers on DigiPay.
                From international transfers to on-the-spot payments at market stalls, we've simplified sending money so you don't need to think too much about it.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='../src/assets/image/payment.jpg'/>
              </div>  
            </div>
          </article>

          <div className='app-download-container'>
            <div className='download-image-container aos aos-left aos-fade'>
              <img className='image download-image ' src='../src/assets/image/download-app.png'/>
              <div className='screen'>
                <iframe src='http://localhost:5173/' className='iframe' ></iframe>
              </div>
              <div className='screen-upper'></div>
            </div>

            <div className='app-download-wrapper aos aos-right'>
              <div className='title'>Download DigiPay</div>
              <p className='description'>
                Get DigiPay App from your favorite app store.
              </p>
              <div className='button-container'>
                  <button className='google '></button>
                  <button className='apple '></button>
              </div>
            </div>
          </div>   
      </section>{/***********ENDs************/}


      {/* SECTION - 3 */}
      <section className='section-3'>
          <span className='title '> Trusted by 4 Million + customers</span>
        <div className='testimony-container aos aos-fade'>
          <div className='testimony-wrapper'>
            <div className='testimony-box '>
              <div className='user-detail-section'>
                <img src='../src/assets/image/saving.jpg' className='user-picture' />
                <p className='user-name '>Akorede Akeroro</p>
              </div>

              <p className='testament '>
                The best payment and fastest loan platform with lower interest rates, very reliable for investment and transact as quick as texting of messages. I recommend you all to join digipay.
              </p>
            </div>
            <div className='testimony-box '>
              <div className='user-detail-section'>
                <img src='../src/assets/image/saving.jpg' className='user-picture' />
                <p className='user-name '>Vivian Omogoye</p>
              </div>

              <p className='testament '>
                If there is anything more than five star I will give to digipay, they are wonderful and unique in every aspect I highly recommend this app for everyone I love you and guys and ur services, this app is just like a mobile Bank its self, kudos to you guys !!!!
              </p>
            </div>
            <div className='testimony-box '>
              <div className='user-detail-section'>
                <img src='../src/assets/image/saving.jpg' className='user-picture' />
                <p className='user-name '>Zainab ahmed</p>
              </div>

              <p className='testament '>
                This is best loan App I have come across. 1. Easy and convenient to register. 2. Loan amount is the highest I have seen so far. 3. The requirements are normal and not out of place. No request for statement of account or bills. 4. The customer care service is top notch.
              </p>
            </div>
            <div className='testimony-box '>
              <div className='user-detail-section'>
                <img src='../src/assets/image/saving.jpg' className='user-picture' />
                <p className='user-name '>Joseph Chijioke</p>
              </div>

              <p className='testament '>
                I have never used a banking platform more reliable than digipay. Some of you complain everyday about other banks, when mobile banks like digipay are 100% more reliable
              </p>
            </div>
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 4 */}
      <section className='section-4'>
        <div className='content-container'>
          <div className='content-title '>Banking Made Easy</div>
          <div className='content-description '>
            Open a DigiPay bank account from your phone or computer and follow the simple on-screen steps to register for an account in minutes
          </div>

          <a href='/joinDigipay'>
            <LoginButton>Join DigiPay</LoginButton>
          </a>
        </div>
      </section>{/***********ENDs************/}
    </div>
  )
}

export default Home