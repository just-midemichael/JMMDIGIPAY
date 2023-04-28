import React from 'react'
import '../../assets/style/budget.css'
import Box from '../../components/Box'
import LoginButton from '../../components/LoginButton'

const Budget = () => {
  const docTitle = () => {
    document.title = 'Budget'
  }
  docTitle();

  return (
    <div className='body budget-body'>

      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point aos aos-left aos-show'>

            <span className='core-value'>Track your budget & spending easily</span>
            

            <div className='summary-container'>
              <div className='summary'>
                Financial freedom is achieved with clarity! Plan your budget and track your spending on DigiPay to make wise money decisions. Analyze your budget easily  
              </div>
            </div>
          </div>

          <div className='image-focal-point aos aos-fade aos-show'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='image/budget-image-2.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>
        <div className='box-wrapper'>
          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/budget-icon.png'/>
              </div>
              <p className='description-container'>
                Dive into your transactions to see where your money is going.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/budget-icon.png'/>
              </div>
              <p className='description-container'>
                Create a budget to track your spending and saving.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/budget-icon.png'/>
              </div>
              <p className='description-container'>
                Get a cystal-clear visual analysis of your finances.
              </p>
          </Box>
        </div>

        <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/budget-image-5.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Keep track of your money at a glance</div>

              <div className='text-description '>
                Save it, spend it, send it. It's up to you. Whatever you choose to do with your money, we ensure it's done at Zero cost.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Priotize your spending</div>

              <div className='text-description '>
                We help you priotize spending. Spend according to your budget and get details of your transactions instantly.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/budget-image-7.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/budget-image-6.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Save on spending</div>

              <div className='text-description '>
                Save as you spend on every transaction. Activate the Spend+Save plan on your dashboard and reserve money while spending to your savings account.
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

export default Budget