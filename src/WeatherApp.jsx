import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";
import "./WeatherApp.css";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] =useState({
        city:"Mumbai",
        feelsLike:37.11,
        humidity:78,
        temp: 30.11,
        tempMax: 30.11,
        tempMin: 30.11,
        weather: "scattered",
    })

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="App" >
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}