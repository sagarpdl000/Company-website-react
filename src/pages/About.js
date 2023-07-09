import React from 'react'
import '../styles/About.css'
import img1 from '../assets/aboutuscover2.jpg'

function About() {
  return (
    <div className='about'>
        <div className='top'>
            <img src={img1}/>

        </div>
        <div className='bottom'>
            <h1>About Us</h1><hr/>
            <p>Welcome to Code Hit, your trusted partner for digital success! We are a dynamic and innovative IT company dedicated to delivering tailored solutions for businesses. Our skilled professionals leverage cutting-edge technology to empower organizations and drive growth in today's digital landscape.

At Code Hit, collaboration and understanding are at the core of our approach. By closely aligning with your unique needs and goals, we provide customized software solutions, captivating web and mobile applications, expert IT consulting, and ongoing support. Our commitment to quality ensures that our solutions are robust, scalable, and secure, surpassing your expectations.

</p>
        </div>

    </div>
  )
}

export default About