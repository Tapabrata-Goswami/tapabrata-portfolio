import React from 'react'
import './AboutContent.css'

function AboutContent() {
  return (
    <div className='container mt-5'>
        <div className='row ml-100 d-flex justify-content-center'>
            <div className='col-md-6 d-flex align-items-center'>
                <h4>About my self</h4>
            </div>
            <div className='col-md-6'>
                <p className='about-me-content-p'>🚀 MERN stack maestro with over 3 years of coding excellence! 💻 Seamlessly blending expertise in React, Express, Node.js, and MongoDB to craft dynamic web solutions. 🌟 Fluent in the art of Laravel PHP, delivering robust backend magic. Let's turn your digital dreams into reality! 🌐 <span className='hashtag '>#MERNStack</span><span className='hashtag'>#Laravel</span><span className='hashtag'>#PHP</span><span className='hashtag'>#WebDevelopment</span></p>
            </div>
        </div>
    </div>
  )
}

export default AboutContent