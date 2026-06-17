import React from 'react'
import search_icon from "../assets/search.png"
import {useState , useContext} from 'react';
import { CityContext } from "../context.jsx";

const Hero = () => {
    const[input, setInput] = useState("");
    const { setCity } = useContext(CityContext);

           const handleSearch = () => {
            if (input.trim() !== ""){
              setCity(input)
            }
          }       
  return (
    <div>
         <div className='flex gap-3'>
                  <input type="text" 
                  placeholder='Enter city....' 
                  value={input}
                  onChange = {(e) => setInput(e.target.value)}
                 className='border border-white bg-gradient-to-r from-blue-500 to-purple-400 
        [from-blue-500_0%] [from-blue-500_50%] [to-purple-400_50%] [to-purple-500_100%] rounded-full p-3'/>
        
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