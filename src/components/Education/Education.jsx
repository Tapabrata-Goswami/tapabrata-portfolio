import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className='container mt-5'>
        <div className='row ml-100 d-flex justify-content-center'>
            <div className='col-md-6 d-flex align-items-center'>
                <h4>Education</h4>
            </div>
            <div className='col-md-6'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h6 className='education-heading'>Future Institute of Technology</h6>
                        <span className='edu-subheading'>Btech in CSE</span>
                    </div>
                    <div className='col-md-4 edu-palce'>
                        Kolkata, India
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <h6 className='education-heading'>Siliguri Netaji School</h6>
                        <span className='edu-subheading'>Higher Secondary</span>
                    </div>
                    <div className='col-md-4 edu-palce'>
                        Siliguri, India
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <h6 className='education-heading'>Siliguri Boys' High School</h6>
                        <span className='edu-subheading'>Madhaymik</span>
                    </div>
                    <div className='col-md-4 edu-palce'>
                        Siliguri, India
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education