import React from 'react'
import {useWeather} from "../context/weather"
const Button = () => {
    const state = useWeather();
  return (
    <button onClick={()=>state.fetchData(state.city)} className='px-4 py-1 ml-2 text-xl text-white bg-green-700 rounded-full outline-none shadow-sm shadow-slate-500'>Search</button>
  )
}

export default Button