import React from 'react'
import '../assets/style/hamburgerMenu.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import LoginButton from './LoginButton'
import DropdownIcon from './DropdownIcon'


type HamburgerMenuProps = {
    menuDisplay: React.MouseEventHandler
}
const HamburgerMenu = ({menuDisplay}: HamburgerMenuProps) => {
    //Indicate Active Link
    const activeStyle = ({isActive}: {isActive: Boolean}) => {
        return {
            backgroundColor: isActive? 'rgb(9, 178, 225)' : '',
            color: isActive? 'white' : '',
        }
    }//Ends Here

    //Drop Down for sub nav links Hamburger Menu
    const dropDownDisplayPersonal = () => {
        let dropDownNavPersonal = document.getElementById('sub-nav-personal') as HTMLElement
        let dropArrow = document.getElementById('drop-arrow-personal') as HTMLElement


        if(dropDownNavPersonal.style.height != 'auto') {
            dropDownNavPersonal.style.height = 'auto'
            dropArrow.style.transform = 'rotate(180deg)'
        }
        else {
            dropDownNavPersonal.style.height = '0px'
            dropArrow.style.transform = 'rotate(0deg)'
        }  
    }
    const dropDownDisplayBusiness = () => {
        let dropDownNavBusiness = document.getElementById('sub-nav-business') as HTMLElement
        let dropArrow = document.getElementById('drop-arrow-business') as HTMLElement


        if(dropDownNavBusiness.style.height != 'auto') {
            dropDownNavBusiness.style.height = 'auto'
            dropArrow.style.transform = 'rotate(180deg)'
        }
        else {
            dropDownNavBusiness.style.height = '0px'
            dropArrow.style.transform = 'rotate(0deg)'
        }
    }
    const dropDownDisplayCompany = () => {
        let dropDownNavCompany = document.getElementById('sub-nav-company') as HTMLElement
        let dropArrow = document.getElementById('drop-arrow-company') as HTMLElement
        

        if(dropDownNavCompany.style.height != 'auto') {
            dropDownNavCompany.style.height = 'auto'
            dropArrow.style.transform = 'rotate(180deg)'
        }
        else {
            dropDownNavCompany.style.height = '0px'
            dropArrow.style.transform = 'rotate(0deg)'
        }
    }
    const dropDownDisplayHelp = () => {
        let dropDownNavHelp = document.getElementById('sub-nav-help') as HTMLElement
        let dropArrow = document.getElementById('drop-arrow-help') as HTMLElement


        if(dropDownNavHelp.style.height != 'auto') {
            dropDownNavHelp.style.height = 'auto'
            dropArrow.style.transform = 'rotate(180deg)'
        }
        else {
            dropDownNavHelp.style.height = '0px'
            dropArrow.style.transform = 'rotate(0deg)'
        }
    }//Ends Here


    

  return (
    <div className='menu-wrapper' id='menu-wrapper'>
        <div className='menu-background'>
                
            <nav id='menu-nav'>
                <div className='nav-wrapper'>
                <li className='nav-link'>
                    <div onClick={dropDownDisplayPersonal} className='link-button'>Personal
                        <span className='drop-down-arrow' id='drop-arrow-personal' ><DropdownIcon/></span>
                    </div>
                
                    <div className='nav-sub-link-container' id='sub-nav-personal'>
                    <NavLink to='/budget' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/budget'}>
                        <img className='sub-link-icon' src='icon/budget-icon.png'/>Budget
                    </NavLink >
                    <NavLink to='/investment' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/investment'}>
                        <img className='sub-link-icon' src='icon/investment-icon.png'/>Investments
                    </NavLink>
                    <NavLink to='/saving' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/saving'}>
                        <img className='sub-link-icon' src='icon/saving-icon.png'/>Savings
                    </NavLink>
                    <NavLink to='/loan' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/loan'}>
                        <img className='sub-link-icon' src='icon/loan-icon.png'/>Loans
                    </NavLink>
                    <NavLink to='/card' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/card'}>
                        <img className='sub-link-icon' src='icon/card-icon.png'/>Cards
                    </NavLink>

                    </div>
                </li>

                <li className='nav-link'>
                    <div onClick={dropDownDisplayBusiness} className='link-button'>Business
                        <span className='drop-down-arrow' id='drop-arrow-business'><DropdownIcon/></span>
                    </div>

                    <div className='nav-sub-link-container' id='sub-nav-business'>
                    <NavLink to='/business-registration' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/business-registration'}>
                        <img className='sub-link-icon' src='icon/business-registration-icon.png'/>Business Registration
                    </NavLink>
                    <NavLink to='/agent' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/agent'}>
                        <img className='sub-link-icon' src='icon/agent-icon.png'/>Agents
                    </NavLink>
                    <NavLink to='/pos' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/pos'}>
                        <img className='sub-link-icon' src='icon/pos-icon.png'/>POS
                    </NavLink>
                    </div>
                </li>

                <li className='nav-link'>
                    <div onClick={dropDownDisplayCompany} className='link-button'>Company
                        <span className='drop-down-arrow' id='drop-arrow-company'><DropdownIcon/></span>
                    </div>

                    <div className='nav-sub-link-container' id='sub-nav-company'>
                    <NavLink to='/about' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/about'}>
                        <img className='sub-link-icon' src='icon/about-icon.png'/>About Us
                    </NavLink>
                    <NavLink to='/blog' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/blog'}>
                        <img className='sub-link-icon' src='icon/blog-icon.png'/>Blog
                    </NavLink>
                    <NavLink to='/career' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/career'}>
                        <img className='sub-link-icon' src='icon/career-icon.png'/>Career
                    </NavLink>
                    <NavLink to='/contact' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/contact'}>
                        <img className='sub-link-icon' src='icon/contact-icon.png'/>Contact
                    </NavLink>
                    </div>
                </li>

                <li className='nav-link'>
                    <div onClick={dropDownDisplayHelp} className='link-button'>Help
                        <span className='drop-down-arrow' id='drop-arrow-help'><DropdownIcon/></span>
                    </div>

                    <div className='nav-sub-link-container' id='sub-nav-help'>
                    <NavLink to='/help' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/help'}>
                        <img className='sub-link-icon' src='icon/help-icon.png'/>Get Help
                    </NavLink>
                    <NavLink to='/scam-awareness' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/scam-awareness'}>
                        <img className='sub-link-icon' src='icon/scam-icon.png'/>Scam Awareness
                    </NavLink>
                    <NavLink to='/faqs' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/faqs'}>
                        <img className='sub-link-icon' src='icon/faq-icon.png'/>FAQs
                    </NavLink>
                    <NavLink to='/report-account' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/report-account'}>
                        <img className='sub-link-icon' src='icon/report-account-icon.png'/>Report Accout
                    </NavLink>
                    </div>
                </li>
                
                </div>
            </nav>
            <div className='hamburger-login-container' onClick={menuDisplay}>
                <LoginButton>sign-in</LoginButton>
            </div>
        </div>

        <div className='blur-background' id='blur-background' onClick={menuDisplay}></div>
    </div>
  )
}

export default HamburgerMenu