import React from 'react'
import Heading from '../components/Heading/Heading'
import StickyFollow from '../components/StickyFollow/StickyFollow'

function Protfolio() {
  return (
    <div className='container-fluid'>
        <Heading data={{title:'Portfolio'}} />
        <StickyFollow />
    </div>
  )
}

export default Protfolio