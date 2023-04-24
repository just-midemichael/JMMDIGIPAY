import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import '../assets/style/navbar.css'

const Navbar = () => {

    const activeStyle = ({isActive}: {isActive: Boolean}) => {
        return {
            backgroundColor: isActive? 'white' : '',
            color: isActive? 'black' : '',
        }
    }
    

  return (
    <>
        <nav>
            <li className='nav-link'>Personal
                <div className='nav-sub-link-container'>
                    <NavLink to='/budget' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/budget'}>
                        <img className='sub-link-icon' src='/src/assets/icon/budget-icon.png'/>Budget
                    </NavLink>
                    <NavLink to='/investment' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/investment'}>
                        <img className='sub-link-icon' src='/src/assets/icon/investment-icon.png'/>Investments
                    </NavLink>
                    <NavLink to='/saving' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/saving'}>
                        <img className='sub-link-icon' src='/src/assets/icon/saving-icon.png'/>Savings
                    </NavLink>
                    <NavLink to='/loan' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/loan'}>
                        <img className='sub-link-icon' src='/src/assets/icon/loan-icon.png'/>Loans
                    </NavLink>
                    <NavLink to='/card' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/card'}>
                        <img className='sub-link-icon' src='/src/assets/icon/card-icon.png'/>Cards
                    </NavLink>

                    <div className='drop-diamond'></div>
                </div>
            </li>
            <li className='nav-link'>Business
                <div className='nav-sub-link-container'>
                    <NavLink to='/business-registration' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/business-registration'}>
                        <img className='sub-link-icon' src='/src/assets/icon/business-registration-icon.png'/>Business Registration
                    </NavLink>
                    <NavLink to='/agent' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/agent'}>
                        <img className='sub-link-icon' src='/src/assets/icon/agent-icon.png'/>Agents
                    </NavLink>
                    <NavLink to='/pos' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/pos'}>
                        <img className='sub-link-icon' src='/src/assets/icon/pos-icon.png'/>POS
                    </NavLink>

                    <div className='drop-diamond'></div>
                </div>
            </li>
            <li className='nav-link'>Company
                <div className='nav-sub-link-container'>
                    <NavLink to='/about' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/about'}>
                        <img className='sub-link-icon' src='/src/assets/icon/about-icon.png'/>About Us
                    </NavLink>
                    <NavLink to='/blog' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/blog'}>
                        <img className='sub-link-icon' src='/src/assets/icon/blog-icon.png'/>Blog
                    </NavLink>
                    <NavLink to='/career' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/career'}>
                        <img className='sub-link-icon' src='/src/assets/icon/career-icon.png'/>Career
                    </NavLink>
                    <NavLink to='/contact' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/contact'}>
                        <img className='sub-link-icon' src='/src/assets/icon/contact-icon.png'/>Contact
                    </NavLink>

                    <div className='drop-diamond'></div>
                </div>
            </li>
            <li className='nav-link'>Help
                <div className='nav-sub-link-container'>
                    <NavLink to='/help' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/help'}>
                        <img className='sub-link-icon' src='/src/assets/icon/help-icon.png'/>Get Help
                    </NavLink>
                    <NavLink to='/scam-awareness' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/scam-awareness'}>
                        <img className='sub-link-icon' src='/src/assets/icon/scam-icon.png'/>Scam Awareness
                    </NavLink>
                    <NavLink to='/faqs' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/faqs'}>
                        <img className='sub-link-icon' src='/src/assets/icon/faq-icon.png'/>FAQs
                    </NavLink>
                    <NavLink to='/report-account' className='nav-sub-link' style={activeStyle} onClick={() => window.location.href='/report-account'}>
                        <img className='sub-link-icon' src='/src/assets/icon/report-account-icon.png'/>Report Accout
                    </NavLink>

                    <div className='drop-diamond'></div>
                </div>
            </li>
        </nav>
    </>
  )
}

export default Navbar