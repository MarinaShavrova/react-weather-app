import React, { useState }  from 'react';
import Footer from './components/Footer';
import { MainBlock } from './components/MainBlock';
import Search from "./components/Search";
import ArrowDate from './components/Slider/ArrowData';
import Video from './components/Video';
import {weatherForFiveDays, weatherAllData, dataWeatherAll} from './data.js';
import videoBackgroundFirst from './components/Video/video/autumn.mp4'



const App = () => {
   const [city, setCity] = useState('');
   const [dataWeatherAll, setDataWeatherAll] = useState([]);
    
   const handleArrayChange = (dataWeatherAll) =>{  
    setDataWeatherAll(dataWeatherAll);
    console.log("2+ "+dataWeatherAll)
  }


  const handleCityChange = (city) =>{  
    setCity(city);
  }



  return (
    <>
   <div className='main-content'>
    <div className='main-content'>  
    <div className='overlay'></div>  
      <Video type={videoBackgroundFirst}/>   
      <div className='content'>
        <Search onChange = {handleCityChange} />
        <MainBlock  city = {city} />
        <Footer   city = {city} data = {weatherForFiveDays} dataAllData = {weatherAllData} onChange = {handleArrayChange} />
        </div>
        <ArrowDate  allArrayWeather = {dataWeatherAll}/> 
      </div>
   </div>
   
    </>      
  
  );
}

export default App;