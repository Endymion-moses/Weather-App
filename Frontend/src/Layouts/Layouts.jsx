import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'

const Layouts = () => {
  return (
    <div>
        <NavBar/>
        <div className="flex justify-center items-center">
            <Hero/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Layouts
