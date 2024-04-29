import React from 'react'
import StickyFollow from '../components/StickyFollow/StickyFollow'
import Heading from '../components/Heading/Heading'

function Experience() {
  return (
    <div className='container-fluid'>
        <Heading data={{title:'Experience'}} />
        <StickyFollow />
    </div>
  )
}

export default Experience