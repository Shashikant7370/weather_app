import React from 'react'
import {useWeather} from "../context/weather"
const WeatherImage = () => {
  const state = useWeather();

  return (
        <img className='mt-6 mb-4' src={state?.location?.current?.condition?.icon} width={"200px"} height={"150px"} alt="" />
  )
}

export default WeatherImage