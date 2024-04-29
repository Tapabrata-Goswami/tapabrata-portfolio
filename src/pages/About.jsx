import React from 'react'
import Heading from '../components/Heading/Heading'
import StickyFollow from '../components/StickyFollow/StickyFollow'
import AboutContent from '../components/AboutContent/AboutContent'
import Skills from '../components/Skills/Skills'
import Education from '../components/Education/Education'

function About() {
  return (
    <div className='container-fluid'>
      <Heading data={{title:'About me'}} />
      <AboutContent />
      <Skills />
      <Education />
      <StickyFollow />
    </div>
  )
}

export default About