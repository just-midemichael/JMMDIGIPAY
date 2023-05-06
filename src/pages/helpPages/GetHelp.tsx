import React from 'react'
import SearchInput from '../../components/input/SearchInput'
import { NavLink, Outlet } from 'react-router-dom'
import '../../assets/style/getHelp.css'

const GetHelp = () => {
    const docTitle = () => {
        document.title = 'Help & Support'
    }
    docTitle()

    const activeStyle = ({isActive}: {isActive: boolean}) => {
        return {
            color: isActive? "navy" : "",
            textDecoration: isActive? "2px underline navy" : "",
        }
    }

    return (
        <div className='body get-help-body'>
            <div className='search-nav-container'>
                <div className='search-container'>
                    <SearchInput/>
                </div>
                <nav className='nav-container'>
                    <NavLink to='/help/home' style={activeStyle}onClick={() => window.location.href='/help/home'}>Home</NavLink>
                    <NavLink to='/help/ticket' style={activeStyle}onClick={() => window.location.href='/help/ticket'}>Ticket</NavLink>
                </nav>
            </div>
            
            <section><Outlet/></section>
        </div>
    )
}

export default GetHelp