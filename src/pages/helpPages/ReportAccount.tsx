import React, { useState } from 'react'
import '../../assets/style/reportAccount.css'

const ReportAccount = () => {
  const docTitle = () => {
    document.title = 'Report Account'
  }
  docTitle()

  const [commentInput, setCommentInput] = useState()
  const [phoneNumberInput, setPhoneNumberInput] = useState()
  const [buttonColor, setButtonColor] = useState('')

  const phoneValue = document.getElementById('report-phone-number') as HTMLInputElement

  const commentValue = document.getElementById('report-comment') as HTMLInputElement

  const handlePhoneNumberChange = (event: any) => {
    const result = event.target.value.replace(/\D/g, '');
    setPhoneNumberInput(result);

    if(phoneValue.value.charAt(0) != '' && commentValue.value.charAt(0) != '' && phoneValue.value.length === 11 && commentValue.value.charAt(0) != ' ') 
    {
      setButtonColor('button-active-color')
      
    }
    else 
    {
      setButtonColor('')
    }
  }

  const handleCommentChange = (event: any) => {
    if(phoneValue.value.charAt(0) != '' && commentValue.value.charAt(0) != '' && phoneValue.value.length === 11 && commentValue.value.charAt(0) != ' ') 
    {
      setButtonColor('button-active-color')  
    }
    else 
    {
      setButtonColor('')
    }
  }

  const handleSubmit = (event: any) => {
    alert('you can report an account at the moment')
  }




  return (
    <div className='body report-account-body'>
      <section className='main-section'>

          <form className='report-account-form' onSubmit={handleSubmit}>
              <h2>Report Suspicious Activity</h2>
              <p className='call-to-action'>Block Account by entering your phone number</p>

              <div>
                <input 
                  type='tel' maxLength={11} minLength={11} placeholder='Phone number' 
                  value={phoneNumberInput} 
                  name='user-phone-number' className='report-phone-number'
                  id='report-phone-number'
                  onChange={handlePhoneNumberChange} 
                required/>
              </div>
              <div>
                <textarea 
                  placeholder='State reasons' 
                  value={commentInput} 
                  name='report-comment' 
                  className='report-comment'
                  id='report-comment' 
                  autoCorrect=''
                  onChange={handleCommentChange}
                required/>
              </div>

              <button className={`submit-report-button ${buttonColor}`} id='submit-report-button'>
                Submit
              </button>
          </form>
      </section>
    </div>
  )
}

export default ReportAccount