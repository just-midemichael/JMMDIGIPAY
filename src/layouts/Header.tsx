import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/style/header.css'
import LoginButton from '../components/LoginButton'
import Logo from '../components/Logo'
import Hamburger from '../components/Hamburger'
import HamburgerMenu from '../components/HamburgerMenu'

const Header = () => {
    const toggleTranslate = () => {
        let box1 = document.getElementById('box-1') as HTMLElement
        let box2 = document.getElementById('box-2') as HTMLElement
        let box3 = document.getElementById('box-3') as HTMLElement
    
        if(box2.style.background != 'transparent') {
          box1.style.transform = 'Rotate(-405deg) translateY(4px) translateX(-20%)'
          box2.style.background = 'transparent'
          box3.style.transform = 'Rotate(405deg) translateY(-4px) translateX(-20%)'
          
        }
        else {
          box1.style.transform = ''
          box2.style.background = ''
          box3.style.transform = ''
        }
      }


    const menuDisplay = () => {
        let menuWrapper = document.getElementById('menu-wrapper') as HTMLElement
        let menuNav = document.getElementById('menu-nav') as HTMLElement
        let blurBackground = document.getElementById('blur-background') as HTMLElement
        let bodyContainer = document.getElementById('page-body') as HTMLElement
        let rootBody = document.getElementById('root-body') as HTMLElement

        if(menuWrapper.style.transform != 'translateX(0%)') {
            menuWrapper.style.transform = 'translateX(0%)'
            menuNav.style.transform = 'translateX(0%)'

            menuWrapper.style.transition = '600ms ease'
            menuNav.style.transition = '900ms ease 300ms'
            blurBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.188)'
            blurBackground.style.transition = '1000ms ease 400ms'
            bodyContainer.style.filter = 'blur(3px)'
            rootBody.style.transition = '1000ms ease 400ms'
            rootBody.style.overflowY = 'hidden'
        }
        else {
            menuWrapper.style.transform = 'translateX(-100%)'
            menuNav.style.transform = 'translateX(-100%)'

            menuWrapper.style.transition = '900ms ease 300ms'
            menuNav.style.transition = '600ms ease'
            blurBackground.style.backgroundColor = ''
            blurBackground.style.transition = ''
            bodyContainer.style.filter = ''
            rootBody.style.transition = '1000ms ease 400ms'
            rootBody.style.overflowY = ''
        }
        toggleTranslate()
    }
    
  return (
    <>
    <header>
        <div className='logo-container'>
            <Logo/>
        </div>
        <div className='navbar-container'>
            <Navbar />
        </div>
        <div className='login-container'>
            <LoginButton>sign-in</LoginButton>
        </div>
        <div className='hamburger-container'>
            <Hamburger menuDisplay={menuDisplay}/>
        </div>
    </header>

    <HamburgerMenu menuDisplay={menuDisplay}/>

    </>
  )
}

export default Header