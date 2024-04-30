import React from 'react'
import './Hero.css'
import ProfileImage from '../../assets/Tapabrata.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import Resume from '../../assets/Tapabrata_Goswami.pdf'

function Hero() {
  return (
    <div className='container'>
        <div className='row justify-content-center align-items-center hero-row'>
            <div className='col-md-6 d-flex justify-content-center'>
                <img src={ProfileImage} alt="" className='profile-image' />
            </div>
            <div className='col-md-6'>
                <h1 className='hero-heading'>Hi, I'm <span className='heading-color'>Tapabrata</span><span>🤚</span></h1>
                <h4 className='hero-subheadign'>I'm a MERN Stack Developer.</h4>
                <p className='short-heading pl-3 pt-3'>☕ Fueled by Coffee</p>
                <p className='short-heading pl-3'>🌎 Based in India</p>
                <p className='short-heading pl-3'>💼 SDE at Dream</p>
                <a href={Resume} target="_blank" className='btn btn-primary mt-4 download-resume'><FontAwesomeIcon icon={faDownload} /> Download Resume</a>
            </div>
        </div>
    </div>

  )
}

export default Hero