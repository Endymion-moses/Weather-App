import {useState} from 'react';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Hero from "./components/NavBar.jsx";
import CurrentWeather from './components/CurrentWeather.jsx';
import HourlyForecast from './components/HourlyForecast.jsx';
import WeeklyData from './components/WeeklyData.jsx';
import Layouts from './Layouts/Layouts.jsx'
import {CityContext} from './context.jsx'

const App = () => {
  const[city, setCity] = useState("");

      const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layouts/>} >
            <Route index element={<CurrentWeather />} />
            <Route path="current" element={<CurrentWeather />} />
            <Route path="hourly" element={<HourlyForecast/>} />
            <Route path="weekly" element={<WeeklyData/>} />
          </Route>
        )
      )
  
 
  return (
    <CityContext.Provider value={{city, setCity}}>
      <RouterProvider router={router} />
    </CityContext.Provider>
  
    
  )
}

export default App