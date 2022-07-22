

const Weather = ({dayOfWeek,icon,temp, description, humidity,  wind }) =>{

    console.log(dayOfWeek)
 
     return(
        <>    
         <div className="footer-block" key={Date.now()}>
                    <div className='position-block'>
                    <h2>{dayOfWeek}</h2>
                    <img className="footer-icon"  src={icon} />
                    <div className='footer-text'>{temp}°</div>
                    <div className='footer-text'>{description}</div>
                    <div className='footer-text'>Humidity:{humidity} %</div> 
                    <div className='footer-text'>Wind: {wind} km/h</div> 
                    </div>
            </div>
        </>


        /*

        <>
 <div className="container">
    <div className="footer"> 
    {data.forEach(element => {
        return(
            <div className="footer-block" key={element}>
                    <div className='position-block'>
                    <h2>{element.dayOfWeek}</h2>
                    <img className="footer-icon"  src={element.icon} />
                    <div className='footer-text'>{element.temp}°</div>
                    <div className='footer-text'>{element.description}</div>
                    <div className='footer-text'>Humidity:{element.humidity} %</div> 
                    <div className='footer-text'>Wind: {element.wind} km/h</div> 
                    </div>
                </div>         
            )} )}
     </div>
    </div>

</>
             <div className="footer-block" key={index}>
                    <div className='position-block'>
                    <h2>{dayOfWeek}</h2>
                    <img className="footer-icon"  src={icon} />
                    <div className='footer-text'>{temp}°</div>
                    <div className='footer-text'>{description}</div>
                    <div className='footer-text'>Humidity:{humidity} %</div> 
                    <div className='footer-text'>Wind: {wind} km/h</div> 
                    </div>
                </div>
                */
    )
}

export default Weather;