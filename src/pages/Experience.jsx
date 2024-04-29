import React from 'react'
import StickyFollow from '../components/StickyFollow/StickyFollow'
import Heading from '../components/Heading/Heading'
import Work from '../components/Work/Work'

function Experience() {
  return (
    <div className='container-fluid'>
        <Heading data={{title:'Experience'}} />
        <Work />
        <StickyFollow />
    </div>
  )
}

export default Experience