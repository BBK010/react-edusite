import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Leading The Future, For the Future</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Similique excepturi quas fugit quaerat quia corporis a beatae est molestias nemo 
                enim, laudantium, minima, quod aliquid nostrum laboriosam unde quae necessitatibus.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Similique excepturi quas fugit quaerat quia corporis a beatae est molestias nemo 
                enim, laudantium, minima, quod aliquid nostrum laboriosam unde quae necessitatibus.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Similique excepturi quas fugit quaerat quia corporis a beatae est molestias nemo 
                enim, laudantium, minima, quod aliquid nostrum laboriosam unde quae necessitatibus.</p>
        </div>
    </div>
  )
}

export default About