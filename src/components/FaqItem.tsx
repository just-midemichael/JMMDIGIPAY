import React, { useState } from 'react'
import '../assets/style/faqItem.css'


export interface FaqItemProps  {
    id?: number
    question: string
    answer: string
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [accordionArrow, setAccordionArrow] = useState('')

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if(accordionArrow === '') {
        setAccordionArrow('accordion-down-arrow-show')
    }
    else {
        setAccordionArrow('')
    }
  }
  return (
    <div className='accordion-wrapper'>
        <div className='accordion' onClick={toggleOpen}>
            <div className='faq-question'>
                {question}
                <div className={`accordion-down-arrow ${accordionArrow}`}></div>
            </div>
            {isOpen && <div className='faq-answer'>{answer}</div>}
        </div> 
    </div>
  )
}

export default FaqItem