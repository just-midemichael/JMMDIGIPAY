import React, { useState } from 'react'
import '../../components/input/searchInput.css'

const SearchInput = () => {
  const [input, setInput] = useState()

  const handleSearch = () => {
    
  }

  return (
    <>
        <form onSubmit={(e) => e.preventDefault()}>
            <span className='search-wrapper'>
                <input type='text' placeholder='Enter your search term here...' value={input} className='search-input'/>
                <button onClick={handleSearch} className='search-button'>Search</button>
            </span>
        </form>
    </>
  )
}

export default SearchInput