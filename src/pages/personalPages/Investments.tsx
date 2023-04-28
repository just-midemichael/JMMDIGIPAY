import React from 'react'
import Box from '../../components/Box'
import '../../assets/style/investment.css'

const Investments = () => {
  const docTitle = () => {
    document.title = 'Investments'
  }
  docTitle()

  return (
    <div className='body investment-body'>
      {/* SECTION - 1 */}
      <section className='section-1 hero-section'>
        <div className='content-container'>
          <div className='text-focal-point'>

            <span className='core-value'>
              Invest in International stocks at best prices
            </span>
            

            <div className='summary-container'>
              <div className='summary'>
                Easy access to both local and international stocks for anyone with a DigiPay account with local currency. 
              </div>
            </div>
          </div>

          <div className='image-focal-point'>
            {/* <div className='image-container'></div> */}
            <img className='image hero-image' src='image/investment-image-2.jpg' />
          </div>
        </div>
      </section>{/***********ENDs************/}


      {/* SECTION - 2 */}
      <section className='section-2'>
        <div className='box-wrapper'>
          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/investment-icon.png'/>
              </div>
              <p className='description-container'>
                Explore a wide range of international stocks.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/investment-icon.png'/>
              </div>
              <p className='description-container'>
                Buy stocks easily with your local currency.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/investment-icon.png'/>
              </div>
              <p className='description-container'>
                Get real-time stock prices and trade notifications.
              </p>
          </Box>

          <Box>
              <div className='icon-container'>
                <img className='icon' src='icon/investment-icon.png'/>
              </div>
              <p className='description-container'>
                Earn dividends on well-performing stocks.
              </p>
          </Box>
        </div>

        <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/investment-image-3.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Easy access to stocks on demand</div>

              <div className='text-description '>
                Create a trading account on your DigiPay, explore stocks and buy whichever you like whenever you want to.
              </div>
            </div>
          </article>

          <article className='features-content-container'>
            <div className='text-focal-point aos aos-left'>
              <div className='title '>Your money-making options</div>

              <div className='text-description '>
                Make a passive income from dividends paid directly into your trading account or sell your stocks at your convenience.
              </div>
            </div>

            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/investment-image-1.jpg'/>
              </div>  
            </div>
          </article>

          <article className='features-content-container'>
            <div className='image-focal-point aos aos-fade'>
              <div className='image-container'>
                <img className='image ' src='image/investment-image-4.jpg'/>
              </div>
            </div>

            <div className='text-focal-point aos aos-right'>
              <div className='title '>Real-time stock prices and trade notifications</div>

              <div className='text-description '>
                See current stock prices on your DigiPay app and get an instant alert for every activity on your trading account.
              </div>
            </div>
          </article>

          <div className='content-container aos aos-bottom'>
            <div className='content-title '>Banking Made Easy</div>
            <div className='content-description '>
              Download DigiPay App from your favorite app store
            </div>

            <div className='button-container'>
                  <button className='google button'></button>
                  <button className='apple button'></button>
            </div>
        </div>

      </section>

    </div>
  )
}

export default Investments