import React from 'react'
import '../assets/style/socialMediaIcon.css'

const SocialMediaIcon = () => {
  return (
    <span className='social-media-icon-wrapper'>
        <a href='' target='_blank'><img className='social-media-icon' src='logo/facebookIcon.png'/> <span className='name'>Facebook</span></a>
        <a href='' target='_blank'><img className='social-media-icon' src='logo/instagramIcon.png' /> <span className='name'>Instagram</span></a>
        <a href='' target='_blank'><img className='social-media-icon' src='logo/linkedinIcon.png' /> <span className='name'>LinkedIn</span></a>
        <a href='' target='_blank'><img className='social-media-icon' src='logo/twitterIcon.png' /><span className='name'>Twitter</span></a>
    </span>
  )
}

export default SocialMediaIcon