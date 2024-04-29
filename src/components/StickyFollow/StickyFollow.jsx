import React from 'react'
import './StickyFollow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'

function StickyFollow() {
  return (
    <div className='sticky-icons'>

        <p className='stickyheading'>Follow Me</p>
        <span className='stert-line'></span>
        <div className='sticky-icn-box'>
            <a href=""><FontAwesomeIcon icon={faGithub} /></a>
            <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>


    </div>
  )
}

export default StickyFollow