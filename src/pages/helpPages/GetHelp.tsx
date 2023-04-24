import React from 'react'

const GetHelp = () => {
    const docTitle = () => {
        document.title = 'Help & Support'
    }
    docTitle()

    return (
        <section className='body'>Get Help</section>
    )
}

export default GetHelp