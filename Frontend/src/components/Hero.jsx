import {useState} from 'react';
import React from 'react'
import search_icon from "../assets/search.png"

const Hero = ({setCity}) => {
       const[input, setInput] = useState("");

       const handleSearch = () => {
        if (input.trim() != ""){
          setCity(input)
        }
       }
  return (
    <div className='flex justify-between p-3'>
        <h1 className='text-3xl text-left text-white'>San Francisco, CA</h1>

      <div className='flex  gap-5 text-white'>
        
         <a href="">Home</a>
         <a href="">HourlyForecast</a>
         <a href="">Details</a>
         <a href="">About</a>
      </div>

       <div className='flex gap-3'>
          <input type="text" 
          placeholder='Enter city....' 
          value={input}
          onChange = {(e) => setInput(e.target.value)}
         className='border border-white bg-white rounded-full p-3'/>

        <button onClick = {handleSearch}>
          <img  className='border border-white p-3 rounded-full text-right bg-white
        hover:scale-105' 
        src={search_icon} alt="" />
        </button>
       </div>
    </div>
  )
}

export default Hero