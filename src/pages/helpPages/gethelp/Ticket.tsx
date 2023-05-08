import React, { useState } from 'react'
import '../../../assets/style/gethelpTicket.css'
import HeaderTitle from '../../../components/headerTitle/HeaderTitle'
import LoginButton from '../../../components/LoginButton'

const Ticket = () => {
  const docTitle = () => {
    document.title = 'Help & Support | Ticket'
  }
  docTitle()

  const [inputValue, setInputValue] = useState()
  return (
    <main className='body get-help-ticket-body'>
      <HeaderTitle>Submit a ticket</HeaderTitle>

      <section>
        <form onSubmit={(e) => e.preventDefault()} className='ticket-form'>
          <label>Email</label>
          <input className='ticket-email' type='email' name='ticket-email' id='ticket-email' placeholder='Email' value={inputValue} required/>
          <label>Subject</label>
          <input className='ticket-subject' type='text' name='ticket-subject' id='ticket-subject' placeholder='' value={inputValue} required/>
          <label>Description</label>
          <textarea className='ticket-description' name='ticket-description' id='ticket-description' placeholder='' value={inputValue} required/>
          <div className='button-container'>
            <LoginButton className='submit-ticket-button'>SUBMIT</LoginButton>
            <LoginButton className='cancle-ticket-button'>CANCLE</LoginButton>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Ticket