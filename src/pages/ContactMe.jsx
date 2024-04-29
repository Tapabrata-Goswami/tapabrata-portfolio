import React from 'react'
import Form from '../components/Form/Form'
import StickyFollow from '../components/StickyFollow/StickyFollow'
import Heading from '../components/Heading/Heading'

function ContactMe() {
  return (
    <div className='container-fluid'>
      <Heading data={{title:'Contact me'}} />
        <Form />
        <StickyFollow />
    </div>
  )
}

export default ContactMe