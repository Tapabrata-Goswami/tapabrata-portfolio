import React from 'react'

function Form() {
  return (
    <div className='container'>
        <form action="">
            <div className='row'>
                <div className='col-md-6'>
                    <input 
                        type="text" 
                        placeholder='First Name'/>
                </div>
                <div className='col-md-6'>
                    <input 
                        type="text"
                        placeholder='Last Name' />
                </div>
            </div>

        </form> 
    </div>
  )
}

export default Form