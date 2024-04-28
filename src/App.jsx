import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './pages/About'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/contact-me' element={<ContactMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App