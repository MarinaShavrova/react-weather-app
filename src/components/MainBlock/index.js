import React, {useState, useEffect} from "react";
import axios from "axios";
import './style.css';
import {icon, nameDay, monthArr} from '../../data.js';



export const MainBlock = ({city}) =>{
    const [weatherData, setWeatherData] = useState([{ ready: false }]);
    const now = new Date();
   
    useEffect(() => {
        if(city.length != 0){
            search();
        }
    } , [city])

    function showTemp(response) {
        let iconForFront =  null;
        for (let index = 0; index < icon.length; index++) {
            if(icon[index].key == response.data.weather[0].icon){
                iconForFront = icon[index].value;
                break;       
            }else{
                iconForFront = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
                }
           }

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: iconForFront
    });
    
  }

const search = () => {
    if(city.length != 0){
        // const apiKey = "302194042e30cf68ae215cbabca7559f";
    const apiKey = "02699bc1e4183422d8163f4101d180b1";
    let unitsType = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitsType}`;
    
   axios.get(apiUrl).then(showTemp);
    }
  }


  if (weatherData.ready) {

    return(
        <>
             <div className="container all-background ps-5 pe-5 mt-4 mobile">                
                <div className="row">
                        <div className="col ms-5"> 
                         <img className="main-city-wether-icon" src={weatherData.icon} alt={"logo"} />
                                
                                <h1 className="main-block-h1">{weatherData.temperature}°</h1>
                                <h4  className="main-block-h4">{weatherData.city.toUpperCase()}</h4>
                                <h3 className="main-block-h3">{nameDay[now.getDay()]}, {now.getDate()} {monthArr[now.getMonth()]} {now.getFullYear()}</h3>
                                               
                        </div>
                     
                    <div className="col me-5 pt-1" id="position-right">
                                <h4  className="main-block-h4">{weatherData.description.toUpperCase()}</h4>
                           
                                <h3  className="main-block-h3">Humidity: 
                                <div className="padding-text">{weatherData.humidity} %</div>
                                </h3>
                                <h3  className="main-block-h3">Wind: 
                                <div className="padding-text">{weatherData.wind} km/h</div>
                                     </h3>  

                    </div>
                </div>
            </div>            
        </>         
    )
} else {
    let  minutes;
       if(now.getMinutes()<10){
            minutes = "0"+now.getMinutes();
        }else {
            minutes = now.getMinutes();
        }
 
    return(
        <>
        <div className="container all-background ps-5 pe-5 mt-4"> 
        <div className="beforeInputCity">
            <h1 className="main-block-h1">{now.getHours()}:{minutes}</h1>
            <p>{nameDay[now.getDay()]}, {now.getDate()} {monthArr[now.getMonth()]} {now.getFullYear()}</p>
            <h1  className="main-block-h3">Enter a city to search. Click on icon
            </h1>
        </div>
        </div>
        
        </>
    )
}
}
