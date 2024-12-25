import React from 'react'
import {useWeather} from "../context/weather"

const Input = () => {
    const state = useWeather();
  return (
    <input
        type="text"
        value={state.city}
        onChange={(e)=>state.setCity(e.target.value)}
        className="p-1 placeholder-slate-600 w-[300px] outline-none shadow-md shadow-slate-600 rounded-sm"
        placeholder="Search your city here!"
      />
  );
}

export default Input