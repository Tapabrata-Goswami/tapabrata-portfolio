import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='container my-3'>
        <div className='row justify-content-center ml-100 get-in-touch-contaier'>
            <div className='col-md-6 d-flex align-items-center'>
                <div>
                    <h6 className='contact-heading pb-3'>Get in touch</h6>
                    <p className='get-in-touch-info'><b>Email:</b> tapabratagoswami21@gmail.com</p>
                    <p className='get-in-touch-info'><b>Phone:</b> +91 86378 15595</p>
                </div>

            </div>
            <div className="col-md-6">
                <form action="">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <input 
                                type="text" 
                                placeholder='First Name'
                                className='form-control'
                                />
                        </div>
                        
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                                <input 
                                    type="text" 
                                    placeholder='Last Name'
                                    className='form-control'
                                    />
                            </div>
                    </div>
                </div>
                <div className="from-group mt-2">
                    <input 
                    type="email" 
                    className='form-control'
                    placeholder='Email' 
                    />
                </div>
                <div className='form-group mt-2'>
                <textarea className="form-control" rows="5"></textarea>
                </div>
                <div className='from-group'>
                    <button className='btn btn-primary mt-2 download-resume'>Submit</button>
                </div>
            </form> 
            </div>
        </div>

    </div>
  )
}

export default Form