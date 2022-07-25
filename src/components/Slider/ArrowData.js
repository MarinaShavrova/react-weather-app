import {weatherForFiveDays, weatherAllData, icon} from "../../data.js"
import React, {useState, useEffect} from "react";
import videoBackgroundSecond from '../Video/video/second_autumn.mp4'
import Slider from "./index.js";
import Video from "../Video/index.js";

const ArrowDate = ({allArrayWeather}) =>{
    let [state, setState] = useState(false);
     let iconForFront =  null;

     useEffect(() => {
  console.log("TEST!")
  console.log("1 "+weatherForFiveDays.length )
  console.log("2 "+allArrayWeather.length)
  if(allArrayWeather.length != 0 || weatherForFiveDays.length != 0){
    console.log("+++!")
    onClickArray();
  }
        } , [allArrayWeather || weatherForFiveDays])
    
   

    let arraySortByDate = [];


function sortByDate(date, dayOfWeek, icon, temp, humidity, wind, description){
    console.log("foreach")
        console.log(date)
        console.log("other")
        console.log(allArrayWeather)
     allArrayWeather.forEach(element => {
     
     if(element.dt_txt.indexOf(date) !== -1){

       

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
        dayOfWeek :dayOfWeek, 
        icon : icon, 
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
        weatherForFiveDays[index].dayOfWeek,
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
    console.log(weatherAllData)
return(
<> 
    
    <div className='main-content'>  
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