import React from 'react'
import Heading from '../components/Heading/Heading'
import StickyFollow from '../components/StickyFollow/StickyFollow'

function About() {
  return (
    <div>
      <Heading data={{title:'About me'}} />
      <StickyFollow />
    </div>
  )
}

export default About