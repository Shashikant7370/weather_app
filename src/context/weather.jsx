import React,{createContext, useContext, useEffect, useState} from "react"
export const weatherContext = createContext(null);

const WEATHER_API_KEY = "16e70219517e4431a6780347240108"

export const useWeather = ()=>{
    return useContext(weatherContext);
}

//getting location using city name
const getWeatherData = async (city) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`
  );
  return await response.json();
};


//getting location using latitude and longitude
const getCurrentLocationWeatherData = async (lat,lon) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&aqi=no`
  );
  return await response.json();
};


//creating provider
export const ContextProvider = (props)=>{
    const [location,setLocation]  = useState(null)
    const [city,setCity] = useState(null);

    const fetchData  = async()=>{
        const response  = await getWeatherData(city)
        setLocation(response)
    }

    //to set the data in location after fetching the location
    const fetchCurrentLocation = ()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
        getCurrentLocationWeatherData(lat,lon).then((data)=>setLocation(data))
      })
    }

    //this is used for fetching the current location when mounting the UI
    useEffect(()=>{
      fetchCurrentLocation()
    },[])
    return (
      <weatherContext.Provider
        value={{
          city,
          setCity,
          location,
          setLocation,
          getWeatherData,
          fetchData,
        }}
      >
        {props.children}
      </weatherContext.Provider>
    );
}