import React from 'react'
import Heading from '../components/Heading/Heading'
import StickyFollow from '../components/StickyFollow/StickyFollow'
import Card from '../components/Card/Card'

function Protfolio() {
  return (
    <div className='container-fluid'>
        <Heading data={{title:'Portfolio'}} />
        <Card />
        <StickyFollow />
    </div>
  )
}

export default Protfolio