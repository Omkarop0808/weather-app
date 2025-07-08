import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";
export default function SearchBox({updateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] =useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY_SECRET;


    let getWeatherInfo = async() =>{
      try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result ={
        city:city,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,

      };
      console.log(result);
      return result;
    }catch(err) {
      console.error(err);
       throw err;
    }

    }
   
    let handleChange = (event)=>{
      setCity(event.target.value);
    }

    let handleSubmit=async(event)=>{
      event.preventDefault();
      console.log(city);
      setCity("");
      try{
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
      } catch (err){
        console.error(err)
          setError(true);
      }
     
    }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-search"
          label="City Name"
          type="search"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        /><br/><br/>
        <Button variant="contained" type="submit"  >
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists</p>}
      </form>
    </div>
  )
}
