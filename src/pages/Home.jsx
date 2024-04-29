import React from 'react'
import Hero from '../components/Hero/Hero'
import StickyFollow from '../components/StickyFollow/StickyFollow'

function Home() {
  return (
    <div className='container-fluid'>
      <Hero />
      <StickyFollow />
    </div>
  )
}

export default Home