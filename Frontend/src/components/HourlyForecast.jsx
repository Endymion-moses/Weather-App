import React from 'react'


const Forecasts = [
    {name:"Now" ,degree:"24"},
    {name:"2 PM ", degree:"25"},
    {name:"3 PM" , degree: "26"},
    {name:"4 PM" , degree: "25"},
    {name:"5 PM" , degree: "23"},
    {name:"6 PM" , degree: "21"},
    {name:"7 PM" , degree: "19"},
    {name:"8 PM" , degree: "18"}
]

const HourlyForecast = () => {
  return (
   <div className='p-10'>
        <div className='flex inline-block border border-blue-600 bg-blue-600 
        rounded-2xl justify-center items-center w-full  pr-10 p-5 '>

        <h1 className='text-white text-4xl p-4 pl-8'>Hourly Forecast</h1>

        <div className='p-5 flex gap-4 justify-center items-center  '> 
            {Forecasts.map((Forecast, index) => (
               <div className='flex inline-block border border-blue-500 bg-blue-500 
               rounded-2xl p-3 justify-center items-center p-10 flex-l '>
                    <h3 key = {index} className='text-white  text- '>{Forecast.name}</h3>
                   
                   <h2 key = {index} className='text-white text-2xl '>{ Forecast.degree}</h2> 
               </div>
            ))}
        </div>
        
    </div>
   </div>
  )
}

export default HourlyForecast