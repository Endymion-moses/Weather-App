import React, { useEffect , useState, useContext} from 'react'
import cloud_icon from "../assets/cloud.png"
import Hero from './Hero';
import { CityContext } from "../context.jsx";



const CurrentWeather = () => {
   const[weather, setWeather] = useState(null);
   const { city } = useContext(CityContext);
   
  
  useEffect(() => {
    if (!city) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        setWeather(null); // reset state
        alert("City not found. Please enter a valid city name.");
      } else {
        setWeather(data);
      }
    })
    .catch(err => {
      console.error(err);
      alert("Something went wrong fetching weather data.");
    });
}, [city]);

   

   
    if (!weather) {
    return <p className="text-white p-10">Loading weather...</p>;
  }

  const Contents =[
  {name:"Wind speed", speed:`${weather.wind.speed} m/s` },
  {name:"Humidity", speed:`${weather.main.humidity}%` },
  {name:"Visibility", speed:`${weather.visibility / 1000} km`},
  {name:"Pressure", speed:`${weather.main.pressure} mb` }
]
  return (
    <div className='p-10'>
      
        <div className='border border-blue-600 bg-blue-600 justify-center 
        items-center rounded-2xl'>
        <div className='flex justify-between'>
             <div className='flex inline-block text-left pl-5 pt-10'>
                 <h1 className='text-white text-6xl'>{weather ? weather.main.temp : "--"}°C</h1>
                 <h3 className='text-white'>{weather ? weather.weather[0].description : "Loading..."}</h3>
                 <h5 className='text-white'>{weather ? weather.name : city}</h5>
             </div>
             <img className='text-right pr-5'  src={cloud_icon} alt="" />
        </div>
        <div className='flex gap-4 justify-center items-center'>
           { Contents.map((content,index) => (
            <div key={index} className='border border-blue-500 rounded-3xl p-5 bg-blue-500 pr-30 '>
              <div>
                <h3  className='text-white'>{content.name}</h3>
              </div>
              <h2  className='text-white text-3xl'>{content.speed}</h2>
            </div>
            
           ))}

        </div>
       <div className='p-4'>
            <div className='flex border border-blue-500 bg-blue-500 p-4
            justify-center items-center justify-between gap-50 rounded-3xl'>
           
              <h3 className='text-white text-5xl'>Feels like 22</h3>
            
           
             <h3 className='text-white text-5xl'>UV index 6</h3>
           
            </div>
       </div>
    </div>
    </div>
  )
}

export default CurrentWeather