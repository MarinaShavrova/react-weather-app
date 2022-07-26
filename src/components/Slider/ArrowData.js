import {weatherForFiveDays, weatherAllData, dataWeatherAll, icon} from "../Assets/data.js"
import React, {useState, useEffect} from "react";
import videoBackgroundSecond from '../Assets/video/waterfall.mp4'
import Slider from "./index.js";
import Video from "../Assets/index.js";

const ArrowDate = ({allArrayWeather}) =>{
    let [state, setState] = useState(false);
    let iconForFront =  null;
    let arraySortByDate = [];

     useEffect(() => {
        if(allArrayWeather.length != 0 || weatherForFiveDays.length != 0){
            onClickArray();
        }else{
            allArrayWeather.splice(0,allArrayWeather.length);
            weatherForFiveDays.splice(0,weatherForFiveDays.length);
            dataWeatherAll.splice(0,dataWeatherAll.length);
            weatherAllData.splice(0,weatherAllData.length);
            setState(false);
  }
        } , [allArrayWeather || weatherForFiveDays])   


function sortByDate(date, dayOfWeekAll, icons, temp, humidity, wind, description){
 console.log(icon)
     allArrayWeather.forEach(element => {
        if(element.dt_txt.indexOf(date) !== -1){  
            
            let iconForFront =  null;          
            for (let index = 0; index < icon.length; index++) {
                    if(icon[index].key == element.weather[0].icon.substring(0,2)+'n'){
                        iconForFront = icon[index].value;
                        break;       
                    }else{
                        iconForFront = `http://openweathermap.org/img/wn/${element.weather[0].icon.substring(0,2)+'n'}@2x.png`;
                    }    
                }


            arraySortByDate.push(
                {
                date :   date, 
                dt_txt :  element.dt_txt,
                temp :  Math.round(element.main.temp),  
                temp_min :Math.round(element.main.temp_min), 
                temp_max :  Math.round(element.main.temp_max), 
                humidity :  element.main.humidity,
                description :  element.weather[0].description,
                icon: iconForFront,
                speed : element.wind.speed
                }
                )
    }
});

   
weatherAllData.push(
    {
        date : date,
        dayOfWeek :dayOfWeekAll, 
        icon : icons, 
        temp : temp, 
        humidity : humidity, 
        wind : wind, 
        description : description,
        value : arraySortByDate
    })
   
    arraySortByDate = [];

}

    function onClickArray(){    

for (let index = 0; index < weatherForFiveDays.length; index++) {

    sortByDate(weatherForFiveDays[index].date, 
        weatherForFiveDays[index].dayOfWeekAll,
        weatherForFiveDays[index].icon,
        weatherForFiveDays[index].temp,
        weatherForFiveDays[index].humidity, 
        weatherForFiveDays[index].wind,  
        weatherForFiveDays[index].description           
        )
    }
setState(true);
}



if(state === true){

return(
<>     
    <div className='second-layout'>  
        <Video type={videoBackgroundSecond}/>   
        <div className='slider-content'>
        <Slider slides = {weatherAllData}/>           
        </div> 
    </div>
</>

)

} 

}

export default ArrowDate;