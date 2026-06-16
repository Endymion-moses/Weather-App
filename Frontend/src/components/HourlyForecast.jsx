import React from 'react'
import {useEffect, useState} from 'react';




const HourlyForecast = ({city}) => {
    const[forecast, setForecast] = useState([])

    useEffect(() => {
        if (!city) return;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`)
    .then(res => res.json())
    .then(data => { 
         const { lat, lon } = data.coord;
     return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APP_ID}`);
    })
            .then(res => res.json())
            .then(data => {
            const hourlyData = data.list.slice(0, 8).map(item => ({
      time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      temp: Math.round(item.main.temp)
    }));
    setForecast(hourlyData);
  })
   .catch(err => console.error("Error fetching forecast:", err));
  }, [city]);

    

  return (
   <div className='p-10'>
        <div className='flex inline-block border border-blue-600 bg-blue-600 
        rounded-2xl justify-center items-center w-full  pr-10 p-5 '>

        <h1 className='text-white text-4xl p-4 pl-8'>Hourly Forecast</h1>

        <div className='p-5 flex gap-4 justify-center items-center  '> 
            {forecast.map((f, index) => (
               <div className='flex inline-block border border-blue-500 bg-blue-500 
               rounded-2xl p-3 justify-center items-center p-10 flex-l ' key={index}>
                    <h3 className='text-white  text- '>{f.time}</h3>
                   
                   <h2  className='text-white text-2xl '>{ f.temp}</h2> 
               </div>
            ))}
        </div>
        
    </div>
   </div>
  )
}

export default HourlyForecast