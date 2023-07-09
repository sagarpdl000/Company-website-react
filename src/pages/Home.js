import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>

      <div className='content'>
        <h1>Code Hit Solutions.<br></br>An ultimate destination to your problem.</h1>
        <Link to="#" className="custom-link">Get started</Link>
      </div>
      

    </div>
  )
}

export default Home