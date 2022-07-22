import React, { useState }  from 'react';
import Footer from './components/Footer';
import { MainBlock } from './components/MainBlock';
import Search from "./components/Search";
import Video from './components/Video';
import {weatherForFiveDays} from './data.js';
import {
    Window
} from './WindowElements';



const App = () => {

  const [city, setCity] = useState('');

  const handleCityChange = (city) =>{
    setCity(city);
  }

  return (
    <>
        <Video />
        <Search onChange = {handleCityChange} />  
        <Window>
          <MainBlock  city = {city} data = {weatherForFiveDays}/>
          <Footer   city = {city} data = {weatherForFiveDays} />   
        </Window>
    </>
          
  
  );
}

export default App;