import { useState } from 'react'
import '../../assets/style/faq.css'
import LoginButton from '../../components/LoginButton'
import FaqAccordion from '../../components/FaqAccordion'

const FAQs = () => {
  const docTitle = () => {
    document.title = 'FAQs'
  }
  docTitle() 
  
  

const faqs = [
  {
    id: 1,
    question: 'What is DigiPay?',
    answer: 'DigiPay is a credit-led digital bank offering modern banking services to ambitious, youthful, unrelenting Africans looking for value and control over their finances.'
  },
  {
    id: 2,
    question: 'Is DigiPay a registered bank?',
    answer: 'Yes, DigiPay is a Microfinance Bank licensed by the Central Bank of Nigeria (CBN) with deposits insured by the Nigerian Deposit Insurance Corporation (NDIC). Our registration number is RC 16X22XX.'
  },
  {
    id: 3,
    question: 'What makes DigiPay different from other digital banks?',
    answer: 'We provide a better ecosystem of services, including outstanding customer support, the best pricing on banking transactions, the highest savings interest rates, and attractive credit rates.'
  },
  {
    id: 4,
    question: 'What do I need to open a DigiPay account?',
    answer: 'To open a DigiPay account, you must be at least 18 years old, have a valid mobile number, a functioning email address, a valid ID, and BVN.'
  },
  {
    id: 5,
    question: 'Do you have a physical office?',
    answer: 'We have an office at 52A XX XX XX, Victorial-Island, Lagos, Nigeria.'
  },
  {
    id: 6,
    question: 'Why request my BVN?',
    answer: "We need this to confirm you are the one registering on DigiPay and not someone else. That's why you need to register with your correct name, date of birth, and phone number as you have it on your BVN."
  },
  {
    id: 7,
    question: 'Are my funds safe with DigiPay?',
    answer: "The CBN has fully licensed DigiPay as a microfinance bank, and we can confirm with authority that it complies with all capitalization and ratio requirements. We can assure you and all our customers that we do not just have the CBN license, we are also covered by NDIC. Our customers' deposits are insured and covered."
  },
  {
    id: 8,
    question: 'Unable to sign in, BVN registered to another user.',
    answer: 'This indicates that you have previously registered a DigiPay account from our app or from the web application. Kindly sign in (not register) in the app and ensure that all the details provided now are the same as those provided previously. Information such as your date of birth and phone number must be the same to access your account. If the problem persists, kindly send a screenshot of the details entered (phone number and date of birth) for verification here.'
  },
  {
    id: 9,
    question: 'Can I use a USSD code?',
    answer: 'You can access DigiPay without the internet using the code: *1303# to fund your DigiPay account, buy airtime, or send money.'
  },
  {
    id: 10,
    question: 'What is my maximum account limit?',
    answer: 'Your account limit is determined by your KYC level.',
  },
  {
    id: 11,
    question: 'Why am i being charged ₦50 for Stamp Duty?',
    answer: 'In line with the federal government directives, a stamp duty of ₦50 will be charged for every account top up of ₦10,000 and above. This is based on the Finance Act which requires all financial institutions to charge the sum of ₦50 on all debit card deposits and online transfers of ₦10,000 or more on your DigiPay account.'
  },
  {
    id: 12,
    question: 'What should I do if I need more help?',
    answer: 'Please contact us by raising a support ticket from the app by clicking the ? icon on the homepage of your mobile app or you can reach out to us via the support option on the app'
  },
]


  return (
    <div className='body faq-body'>
      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Frequently Asked Questions</span>
            
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            <img className='image hero-image' src='../src/assets/image/faq-image.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>
        

        <div className='faq-container'>
          <FaqAccordion faqs={faqs}/>
        </div>

        
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

export default FAQs