import './style.css';
import {icon, nameDayShort} from '../../data.js';
import React, {useState, useEffect} from "react";
import axios from "axios";


const Footer  = ({city, data, dataAllData, onChange}) => {
    const [weatherDataDays, setWeatherDataDays] = useState(false);
    
    let str = "";
    let count = 0;
    let dayOfWeekForArr = "";

          useEffect(() => {
        if(city.length != 0){
            data.splice(0,data.length);        
            getWeather();           
        }
        } , [city, data])

        
        const handleArrayChange = (dataWeatherAll) => {
            onChange(dataWeatherAll);
            }
    

        function getWeather(){
          const apiKey = "302194042e30cf68ae215cbabca7559f";
   // const apiKey = "02699bc1e4183422d8163f4101d180b1";
    let unitsType = "metric";
       let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unitsType}`;    
        axios.get(apiUrl).then(showWeather);
    }

    function showWeather(response){     
        const now = new Date();
        const year = now.getFullYear();
        let month = now.getMonth()+1;
        let day = now.getDate();
        let dayOfWeek = now.getDay();
        dataAllData = response.data.list.slice(0);
        handleArrayChange(dataAllData);


    for(let i=0; i<response.data.list.length; i++){
    str = response.data.list[i].dt_txt;
    
    if(month<10) month = '0'+month;
    if(day<10) day = '0'+day;    
    
    if(!str.includes(`${year}-${month}-${day}`)){
      if (str.includes('12:00:00')){
 
            if(dayOfWeek === 6 || (Number(dayOfWeek)+count) === 6){
                dayOfWeek = 0;
                count = 0;
                dayOfWeekForArr = nameDayShort[0];             
            }  else {
                count++;
                dayOfWeekForArr = nameDayShort[Number(dayOfWeek)+count];                              
            }

            let iconForFront =  null;

                for (let index = 0; index < icon.length; index++) {
                    if(icon[index].key == response.data.list[i].weather[0].icon.substring(0,2)+'n'){
                        iconForFront = icon[index].value;
                        break;       
                    }else{
                        iconForFront = `http://openweathermap.org/img/wn/${response.data.list[i].weather[0].icon.substring(0,2)+'n'}@2x.png`;
                    }    
                }


addedDataToArr (dayOfWeekForArr, 
    response.data.list[i].dt_txt.replace(' 12:00:00', ""),
    Math.round(response.data.list[i].main.temp),  
    response.data.list[i].main.humidity,
    response.data.list[i].weather[0].description,
    iconForFront,
    response.data.list[i].wind.speed
    );

}
}
     }
      
    }

    function addedDataToArr(dayOfWeek, date, temp,humidity, description,icon, wind  ){
		 console.log(data)
			data.push({
            ready: true,
            id : new Date(),
            "dayOfWeek": dayOfWeek,
            "date":date,
            "temp":temp,
            "humidity":humidity,
            "description":description,
            "icon": icon,
            "wind":wind
        }); 
       
        setWeatherDataDays(true)
	}

  if (weatherDataDays == true) {
    
     const weather = data.map(product => 
		<>
		   <div className="footer-block" key={Math.floor(Math.random() * 1000)}>
                    <div className='position-block'>
                    <h2>{product.dayOfWeek}</h2>
                    <img className="footer-icon"  src={product.icon} />
                    <div className='footer-text'>{product.temp}°</div>
                    <div className='footer-text'>{product.description.toUpperCase()}</div>
                    <div className='footer-text'>Humidity: {product.humidity}%</div> 
                    <div className='footer-text'>Wind: {product.wind}km/h</div> 
                    </div>
            </div>
               
            </>
        )
    

    return (
        <>
            <div className="width-footer">
                <div className="footer"> 
                    {weather}               
                </div>                
            </div>
           
        </>
    );
  } 
}
export default Footer;