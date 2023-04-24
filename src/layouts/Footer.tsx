import React from 'react'
import '../assets/style/footer.css'
import SocialMediaIcon from '../components/SocialMediaIcon'
import DoubleRightArrow from '../components/DoubleRightArrow'
import Logo from '../components/Logo'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='sections-wrapper'>
          <div className='footer-section-1'>
            <div className='brand-logo-asset'>
              <Logo/>
            </div>
          </div>
          
          <div className='footer-section-2'>
            <div className='community-box boxx'>
              <span className='box-title'>Community</span>
              <a href='' className='box-link'>Community Forum 
                <DoubleRightArrow/>
              </a>
              <a href='' className='box-link'>Community Event 
                <DoubleRightArrow/>
              </a>
              <a href='' className='box-link'>Advocate Program 
                <DoubleRightArrow/>
              </a>
              <a href='' className='box-link'>community Home 
                <DoubleRightArrow/>
              </a>
            </div>

            <div className='legal-box boxx'>
              <span className='box-title'>Legal</span>
              <a href='' className='box-link'>Terms of Use 
                <DoubleRightArrow/>
              </a>
              <a href='' className='box-link'>Terms of Service 
                <DoubleRightArrow/>
              </a>
              <a href='' className='box-link'>Privacy Policy 
                <DoubleRightArrow/>
              </a>
            </div>

            <div className='company-box boxx'>
              <span className='box-title'>Company</span>
              <a href='/about' className='box-link'>About Us
                <DoubleRightArrow/>
              </a>
              <a href='/blog' className='box-link'>Blog
                <DoubleRightArrow/>
              </a>
              <a href='/career' className='box-link'>Career
                <DoubleRightArrow/>
              </a>
              <a href='/contact' className='box-link'>Contact Us
                <DoubleRightArrow/>
              </a>
            </div>

            <div className='support-box boxx'>
              <span className='box-title'>Help</span>
              <a href='/faqs' className='box-link'>Faqs
                <DoubleRightArrow/>
              </a>
              <a href='/help' className='box-link'>Get Help
                <DoubleRightArrow/>
              </a>
              <a href='scam-awareness' className='box-link'>Scam Awareness
                <DoubleRightArrow/>
              </a>
              <a href='report-account' className='box-link'>Report Account
                <DoubleRightArrow/>
              </a>
            </div>

          </div>

          
          <div className='brand-social-media'>
              <SocialMediaIcon />
            </div>

            
            

          <div className='copy-right-container'>
              <p className='copy-right-content title'>DigiPay&copy; 2023 all rights reserved</p>
              <p className='copy-right-content description'>
                Digipay is a financial service provided by JMM Microfinance Bank (RC 1X42XX3), licensed and regulated by the Central Bank of Nigeria (CBN). We empower individuals with credit, simple payments solutions, high-yield investment opportunities, and easy-to-use tools for personal financial management. We are a global company of over 90 employees with a presence in Nigeria, the United Kingdom, United States, Canada, South Africa, and Kenya.
              </p>

              <div className='footer-section-3'>
                <div className='address-container'>
                  <span className='box-title'>Lagos</span>
                  <p className='office-address'>
                    52A XX XX XX, Victorial-Island, Lagos, Nigeria
                  </p>
                  <p className='phone-number'>
                  <a href='tel:+234-XXX-YYYY-ZZZ'>+234-XXX-YYYY-ZZZ</a>
                  </p>
                  <p className='email-address'>
                    <a href='mailto:custormer-service@digipay.ng'>custormer-service@digipay.ng</a>
                  </p>
                </div>

                <div className='address-container'>
                  <span className='box-title'>London</span>
                  <p className='office-address'>
                    5 XYZ Street, London, EC4A 3XX, United Kingdom
                  </p>
                  <p className='phone-number'>
                    <a href='tel:+44-XXX-YY-ZZZ'>+44-XXX-YY-ZZZ</a>
                  </p>
                  <p className='email-address'>
                    <a href='mailto:custormer-service@digipay.uk'>custormer-service@digipay.uk</a>
                  </p>
                </div>
              </div>
          </div>
        </div>

        

        <a className='footer-developer-link' target='_blank' href='https://olumidemichaelojo.netlify.app/index.html' title='browse developer'>
          <pre>Developed by &trade; just_midemichael &copy; 2023</pre>
        </a>
      </div>
    </footer>
  )
}

export default Footer