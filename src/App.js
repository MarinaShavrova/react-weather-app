import React, { useState }  from 'react';
import DataForFiveDay from './components/DataForFiveDay';
import {DataForToday}  from './components/DataForToday';
import Search from "./components/Search";
import ArrowDate from './components/Slider/ArrowData';
import Video from './components/Assets/';
import {weatherForFiveDays, weatherAllData} from './components/Assets/data.js';
import videoBackgroundFirst from './components/Assets/video/beach.mp4'



const App = () => {

const initialState = []
let [dataWeatherAll, setDataWeatherAll] = useState(initialState);
const [city, setCity] = useState('');

    
   const handleArrayChange = (dataWeatherAll) =>{  
    setDataWeatherAll(dataWeatherAll);
  }


  const handleCityChange = (city) =>{  
    setDataWeatherAll(initialState);
    setCity(city);
  }


  return (
   <div className='main-content'>
    <div className='main-content'>  
    <div className='overlay'></div>  
      <Video type={videoBackgroundFirst}/>   
      <div className='content'>
        <Search onChange = {handleCityChange} />
        <DataForToday  city = {city} />
        <DataForFiveDay   city = {city} data = {weatherForFiveDays} dataAllData = {weatherAllData} onChange = {handleArrayChange} />
        </div>
        <ArrowDate  allArrayWeather = {dataWeatherAll}/> 
      </div>
   </div>  
  );
}

export default App;