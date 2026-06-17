
import React from 'react'

import {Link} from "react-router-dom";

const NavBar = () => {
       
       
       
  return (
    <div className='flex justify-between p-3'>
        <h1 className='text-3xl text-left text-white'>San Francisco, CA</h1>

      <div className='flex  gap-5 text-white border border-blue-400 
      p-3 rounded-full justify-center items-center bg-gradient-to-r from-blue-500 to-purple-400 
[from-blue-500_0%] [from-blue-500_50%] [to-purple-400_50%] [to-purple-500_100%]'>
        
        <Link to="/" className='text-white hover:text-blue-200'>Home</Link>
        <Link to="/current" className='text-white hover:text-blue-200'>Current</Link>
        <Link to="/hourly" className='text-white hover:text-blue-200'>Hourly</Link>
        <Link to="/weekly" className='text-white hover:text-blue-200'>Weekly</Link>
      </div>

      
    </div>
  )
}

export default NavBar