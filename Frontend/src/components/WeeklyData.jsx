import React from 'react'

 const weeklyData = [
    { day: "Today",  condition: "Partly Cloudy", highTemp: 26, lowTemp: 18 },
    { day: "Friday",  condition: "Sunny", highTemp: 28, lowTemp: 19 },
    { day: "Saturday",  condition: "Sunny", highTemp: 29, lowTemp: 20 },
    { day: "Sunday",  condition: "Partly Cloudy", highTemp: 27, lowTemp: 19 },
    { day: "Monday",  condition: "Rainy", highTemp: 22, lowTemp: 16 },
    { day: "Tuesday",  condition: "Cloudy", highTemp: 23, lowTemp: 17 },
    { day: "Wednesday",  condition: "Sunny", highTemp: 26, lowTemp: 18 }
  ];


const WeeklyData = () => {
  return (
    <div className='p-10 '>
            <div className='border border-blue-600 bg-blue-600 rounded-2xl p-5  '>
        {weeklyData.map((Data, index) => (
           <div className='p-5' key={index}>
               <div className='flex justify-between border border-blue-500
            bg-blue-500 rounded-2xl p-4 hover:scale-105 hover:bg-blue-300'>
                
                <div className='flex text-left'>
                        <h3  className='text-white'>{Data.day}</h3>
                        <h3  className='text-white'>{Data.condition}</h3>
               </div>
                <div className='flex text-right'>
                        <h3  className='text-white'>{Data.highTemp}</h3>
                        <h3   className='text-white'>{Data.lowTemp}</h3>
                </div>
           </div>
           </div>

        ))}

    </div>
    </div>
  )
}

export default WeeklyData