import React from 'react'
import '../styles/Contact.css'


function Contact() {
  return (
    <div className='contact'>
        <div className='left-img'>
           

        </div>

        <div className='right-form'>
            <h1>Contact Us</h1>
            <form>
                <h3>Full name</h3>
                <input type='text' placeholder='Enter full name..'></input>
                <hr/>

                <h3>Email</h3>
                <input type='text' placeholder='Enter email..'></input>
                <hr/>


                <h3>Message</h3>
                <textarea></textarea>
                


                <button>SUBMIT</button>

            </form>

        </div>

    </div>

  )
}

export default Contact