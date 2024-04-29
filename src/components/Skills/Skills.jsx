import React from 'react'
import './Skills.css'
import html from '../../assets/icons/html-5.png'
import react from '../../assets/icons/physics.png'
import css from '../../assets/icons/css-3.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import php from '../../assets/icons/php.png'
import node from '../../assets/icons/programing.png'
import tailwind from '../../assets/icons/tailwind-css.png'
import js from '../../assets/icons/js.png'
import laravel from '../../assets/icons/laravel.png'
import mongodb from '../../assets/icons/mongodb.png'
import sql from '../../assets/icons/sql-server.png'
import docker from '../../assets/icons/docker.png'

function Skills() {
    return (
        <div className='container mt-5 mb-80'>
            <div className='row ml-100 d-flex justify-content-center'>
                <div className='col-md-6 d-flex align-items-center'>
                    <h4>Skills</h4>
                </div>
                <div className='col-md-6'>
                    <img
                        src={html}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={css}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={js}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={tailwind}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={mongodb}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={laravel}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={react}
                        alt=""
                        className='skill-icons' />

                    <img
                        src={bootstrap}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={php}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={node}
                        alt=""
                        className='skill-icons' />
                    <img
                        src={sql}
                        alt=""
                        className='skill-icons' />
                        <img
                        src={docker}
                        alt=""
                        className='skill-icons' />

                </div>
            </div>
        </div>
    )
}

export default Skills