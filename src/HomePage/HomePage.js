import React from 'react'
import './style.css'

function HomePage() {
  return (
    <div>

      <div className='main'>
      <input type="email" placeholder='Enter username' className="form-control txt" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <input type="email" placeholder='Enter password' className="form-control txt" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <button style={{marginLeft:150}} type="button" className="btn btn-success">Login Here</button>
      </div>
    </div>
  )
}

export default HomePage;
