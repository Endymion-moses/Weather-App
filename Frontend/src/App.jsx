import {useState} from 'react';
import React from 'react';
import Hero from "./components/Hero.jsx";
import CurrentWeather from './components/CurrentWeather.jsx';
import HourlyForecast from './components/HourlyForecast.jsx';
import WeeklyData from './components/WeeklyData.jsx';

const App = () => {
  const[city, setCity] = useState("");
  return (
    <div>
       <Hero setCity = {setCity}/>
       <CurrentWeather city = {city}/>
       <HourlyForecast city = {city}/>
       <WeeklyData/>
    </div>
  )
}

export default App