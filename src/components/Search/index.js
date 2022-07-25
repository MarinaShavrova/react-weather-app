import React, { useState, useEffect }  from 'react';
import './style.css';

const Search = ({ onChange }) =>{
    let [value, setValue] = useState('collapse');
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('This field can\'t be empty');
    const [cityDirty, setCityDirty] = useState('');
    const[formValid, setFormValid] = useState(false);


useEffect( () => {
    if(cityError){
setFormValid(false);
    } else{
        setFormValid(true);
    }
} , [cityError]

)

const handleCityChange = (event) => {
    event.preventDefault();
    onChange(city);
}

     const cityHandler = (e) =>{
        setCity(e.target.value)
         if(e.target.value.length < 2){
            setCityError("Name is incorrect");
         }else{
            setCityError("");
         }
    }

  
function clickOnButton () {
    let element = document.querySelector('#navbarToggleExternalContent');

     if (element.className === "collapse" ){
        setValue("collapse show");
     } else if (element.className === "collapse show" ){
         setValue("collapse");
     }
}

const blurHandler = (e) => {
        switch (e.target.city){
            case 'city' :
                setCityDirty(true);
                break
            }
        }

    const handleKeyPress = (e) => {
        if(e.key == 'Enter') {
            onChange(city);
            }
        }

    return(
     <div className="pos-f-t">
        <div className={value} id="navbarToggleExternalContent">
            <div className="navbar navbar-dark bg-dark">
                <div className="col">
                    {(cityDirty && cityError) && <div style={{color:'red'}}>{cityError}</div>}
                    <input onKeyPress={handleKeyPress} value={city} onBlur={e => blurHandler(e)} onChange={e => cityHandler(e)} className="form-control mr-sm-2 bg-dark" type="search" placeholder="Search" aria-label="Search" id="search-input"/>
                </div>
                <div className="col">
                    <button  disabled={!formValid} onClick={handleCityChange} className="btn btn-outline-light my-2 my-sm-0" type="submit" >Search</button>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
            <button onClick={clickOnButton} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon test"></span>
            </button>
        </nav>
    </div>
    )

}

export default Search;