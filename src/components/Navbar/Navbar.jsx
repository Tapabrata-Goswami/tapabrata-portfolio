import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container-fluid'>
        <div className='container main-menu-container'>
            <div className='row align-items-center main-menu p-2'>
                <div className='col-md-5 d-flex justify-content-center'>
                    <Link to='/' className='px-5 menu-item' >Home</Link>
                    <Link to='/about-me' className='px-5 menu-item'>About me</Link>
                </div>
                <div className='col-md-2 text-center'>
                    <Link to='/'>
                        <h1 className='logo-text'>TG<span className='logo-dot'>.</span></h1>
                    </Link>
                </div>
                <div className='col-md-5 d-flex justify-content-center'>
                   <Link to='/protfolio' className='px-5 menu-item'>Profolio</Link> 
                   <Link to='/contact-me' className='px-5 menu-item'>Contact me</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar