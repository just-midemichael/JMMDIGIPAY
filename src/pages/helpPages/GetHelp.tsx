import React from 'react'
import SearchInput from '../../components/input/SearchInput'

const GetHelp = () => {
    const docTitle = () => {
        document.title = 'Help & Support'
    }
    docTitle()

    return (
        <div className='body get-help-body'>
            <SearchInput/>
        </div>
    )
}

export default GetHelp