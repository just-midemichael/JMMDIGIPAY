import React from 'react'
import '../../assets/style/scamAwareness.css'
import LoginButton from '../../components/LoginButton';
import SocialMediaIcon from '../../components/SocialMediaIcon';

const ScamAwareness = () => {
  const docTitle = () => {
    document.title = 'Scam Awareness'
  }
  docTitle();
  
  return (
    <div className='body scam-awareness-body'>
      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Scam And Fraud Awareness</span>
            
            <div className='summary-container'>
              <div className='summary'>
              Awareness helps you protect your identity and your money, and stay safe online. Keep reading to learn how to spot scams and what to do if you suspect that you've been scammed 
              </div>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            <img className='image hero-image' src='image/scam-image-1.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>
        <div className='scam-awareness-container'>
          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/scam-image-3.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='information-title '>Personal information you must never share</div>

              <div className='text-description '>
                <li>Your DigiPay password, passcode and transaction PIN.</li>
                <li>Your card PIN and CVV (the three-digit number on the back of your debit card).</li>
                <li>Your Pay ID.</li>
              </div>
            </div>
          </article>
        </div>
       
        <div className='scam-information'>
          <div className='information-title aos aos-bottom'>How we may contact you off your DigiPay app</div>

          <span>
            <div className='information-sub-title aos aos-bottom'>Emails</div>
            <p className='aos aos-bottom'>
              All emails from us will always come from addresses that end in DigiPay.com e.g. DigiPay.com, news.DigiPay.com and alerts.DigiPay.com. We may send the following messages to the email address linked to your DigiPay profile:
            </p>

            <li className='aos aos-bottom'>Transaction alerts</li>
            <p className='aos aos-bottom'>
              These include debit and credit alerts, savings alerts, gift card codes, electricity meter tokens and stock trading alerts
            </p>
            <li className='aos aos-bottom'>Announcements</li>
            <p className='aos aos-bottom'>
              These include app update announcements, promotional messages, new feature alerts, downtime updates and maintenance updates
            </p>
            <li className='aos aos-bottom'>Device change</li>
            <p className='aos aos-bottom'>
              We sent you this message as an update whenever you sign in to your DigiPay account on a new device.
            </p>
            <li className='aos aos-bottom'>Password change</li>
            <p className='aos aos-bottom'>
              We send you this when you request a password change on your DigiPay app or app.digiPay.com.
            </p>
            <li className='aos aos-bottom'>Account statement</li>
            <p className='aos aos-bottom'>
              We send you your account statement as a spreadsheet or a PDF document whenever you request it on your DigiPay app.
            </p>
          </span>



          <span>
            <div className='information-sub-title aos aos-bottom'>SMS</div>
            <li className='aos aos-bottom'>Phone number confirmation</li>
            <p className='aos aos-bottom'>
              We send you a code to confirm that the phone number you're adding to your DigiPay profile is yours.
            </p>
            <li className='aos aos-bottom'>BVN confirmation</li>
            <p className='aos aos-bottom'>
              We send you a code to confirm that the BVN (Bank Verification Number) you're linking to your DigiPay profile is yours.
            </p>
            <li className='aos aos-bottom'>Card payment confirmation</li>
            <p className='aos aos-bottom'>
              We send you a code to confirm any card payment you're trying to make.
            </p>
          </span>
          
          <div className='information-sub-title aos aos-bottom'>Phone Calls</div>
          <p className='aos aos-bottom'>
            We may call you to follow up on a complaint or transaction dispute, to give you important information about your DigiPay account, to share a survey with you, or just to check up on you.
          </p>
          <p className='aos aos-bottom'>
            If you receive a call from us, we'll tell you who is calling and why we're calling, and we'll never ask you for confidential account details like your password, passcode, transaction PIN, card CVV (the three-digit number on the back of your debit card) or your Pay ID.
          </p>

          <div className='information-sub-title aos aos-bottom'>Social media</div>
          <p className='aos aos-bottom'>
            We may send you a message on social media to follow up on a question, complaint or transaction dispute. These are our official social media accounts:
          </p>
          <SocialMediaIcon/>

          <div className='information-sub-title aos aos-bottom'>WhatsApp Messages</div>
          <p className='aos aos-bottom'>
          We sometimes send overdraft repayment reminders through WhatsApp, but we never use WhatsApp for customer support. There is no public DigiPay WhatsApp number.
          </p>
        </div>

        <div className='scam-awareness-container'>
          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='information-title'>Common payment scams</div>

              <div className='text-description '>
                <li>
                  A text or WhatsApp message, a tweet or an email warning that your account will be closed unless you click or tap a link to update your account information.
                </li>
                <li>
                  A text or WhatsApp message, an email or a phone call asks you to pay to get a DigiPay Overdraft.
                </li>
                <li>
                  A text or WhatsApp message, a tweet, an email or a phone call asks you to share confidential account details like your password, passcode, card PIN, CVV or Pay ID.
                </li>
                <li>
                  A merchant or vendor you've never done business with asks you to pay before receiving your order.
                </li>
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/scam-image-2.jpg'/>
              </div>
            </div>
          </article>
        </div>

          <div className='scam-information'>
            <div className='information-title aos aos-bottom'>How to spot a scam email</div>

            <p className='aos aos-bottom'>
              Generally, any text message, email or phone call about your DigiPay account that you cannot confirm is from us is definitely dangerous and must be ignored.
            </p>
            <p className='aos aos-bottom'>
              If you are in doubt about any text message, email or phone call, please call 0700022555832 or send an email to fraud@digipay.com or help@digipay.com before taking any other action
            </p>
          </div>

          


            
          <div className='scam-awareness-container'>
            <article className='features-content-container'>
              <div className='image-focal-point aos aos-fade'>
                  <div className='image-container'>
                    <img className='image ' src='image/scam-image-2.jpg'/>
                  </div>
              </div>
              <div className='text-focal-point aos aos-right'>
                <div className='information-title'>How to identify a scam</div>

                <div className='text-description '>
                  <li>
                    Spelling errors in a text or WhatsApp message or email claiming to be from your bank.
                  </li>
                  <li>
                    A strange link in a text or WhatsApp message or email eg. nameofbank.agent.direct-link.com.
                  </li>
                  <li>
                    The sender ID of a text message is a random phone number (instead of your bank's name).
                  </li>
                  <li>
                    A text or WhatsApp message, email, phone call or social media post urging you to make a payment or investment quickly.
                  </li>
                </div>
              </div>
            </article>
          </div>

          <div className='scam-information'>
            <div className='information-title aos aos-bottom'>What to do if you suspect that you've been scammed</div>
              <p className='aos aos-bottom'>
                If you're not sure about any transaction on your account or you suspect you have been scammed, please call 0700022555832 or send an email to fraud@digipay.com or help@digipay.com immediately
              </p>
              <p className='aos aos-bottom'>
                Don't post details of suspected scams or suspicious transactions on social media because we will not be able to respond to you there for security reasons. Instead of posting on social media, reach out to us directly by phone or email, or chat with us on your digipay app.
              </p>
              <p className='aos aos-bottom'>
                If you report a suspicious transaction or a suspected scam, we may restrict your account temporarily to protect your money while we investigate your report
              </p>
            </div>
      </section>
    </div>
  )
}

export default ScamAwareness