import React from 'react'
import '../../../assets/style/gethelpHome.css'
import HeaderTitle from '../../../components/headerTitle/HeaderTitle'
import HelpCard from '../../../components/card/HelpCard'

const Home = () => {
  return (
    <main className='body get-help-home-body'>
      <HeaderTitle>Advice and answers from the DigiPay Team</HeaderTitle>

      <section>
        <div className='help-card-wrapper'>
          <HelpCard>
            <img className='help-card-icon' src="/icon/card-icon.png"/>
            <div className='help-card-title'>Cards</div>
          </HelpCard>
          <HelpCard>
            <img className='help-card-icon' src="/icon/agent-icon.png"/>
            <div className='help-card-title'>Payments</div>
          </HelpCard>
          <HelpCard>
            <img className='help-card-icon' src="/icon/loan-icon.png"/>
            <div className='help-card-title'>Loans</div>
          </HelpCard>
          <HelpCard>
            <img className='help-card-icon' src="/icon/saving-icon.png"/>
            <div className='help-card-title'>Savings</div>
          </HelpCard>
          <HelpCard>
            <img className='help-card-icon' src="/icon/investment-icon.png"/>
            <div className='help-card-title'>Investment</div>
          </HelpCard>
          <HelpCard>
            <img className='help-card-icon' src="/icon/business-registration-icon.png"/>
            <div className='help-card-title'>Accounts</div>
          </HelpCard>
          <HelpCard>
            <img className='help-card-icon' src="/icon/pos-icon.png"/>
            <div className='help-card-title'>App</div>
          </HelpCard>
          <HelpCard>
            <img className='help-card-icon' src="/icon/budget-icon.png"/>
            <div className='help-card-title'>Overdrafts</div>
          </HelpCard>
          <HelpCard>
            <img className='help-card-icon' src="/icon/scam-icon.png"/>
            <div className='help-card-title'>Security</div>
          </HelpCard>
        </div>
      </section>
    </main>
  )
}

export default Home