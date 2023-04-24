import React from 'react'
import FaqItem, { FaqItemProps } from './FaqItem'

interface FaqAccordionProps {
    faqs: FaqItemProps[]
}
const FaqAccordion: React.FC<FaqAccordionProps> = ({faqs}) => {

  return (
    <>
        {faqs.map((faq) => {
            return(
                <FaqItem question={faq.question} answer={faq.answer} key={faq.id} />
            )
        })}

    </>
  )
}

export default FaqAccordion