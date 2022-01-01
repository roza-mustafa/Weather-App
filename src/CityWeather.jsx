import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const API_key="f9ded781b4af46f99a8175030212912";


const CityWeather= props =>
{  
    
    const {Name}= useParams();
    const [location, SetLocation ]=useState(Name);
      const [weatherr,setWeatherr]=useState({
         name : location,
     
      });
   
        const newloc =() =>
        {
            return({});
        }
    const update= async () =>
    {
        const waitres= await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${location}&aqi=no`)
         const data= await waitres.json();
         const newweather= 
         {
             name : data.location.name ,
             icon : data.current.condition.icon ,
             tempreture : data.current.temp_c
             
         }
         setWeatherr(newweather);
    }
    useEffect(update, [Location]);
   return(

<div className='CityWeather-page'>
    <h1>WEATHER FORECAST</h1>
    <h4>{weatherr.name}</h4>
    <h2>{weatherr.tempreture} C°</h2>
    <img src={weatherr.icon} alt='help'/>
    </div>
    )
}









export default CityWeather