import React from 'react'
import {useWeather} from "../context/weather"
const Location = () => {
  const state = useWeather();

  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <h1 className="text-5xl text-white font-semibold">
          {state?.location?.current?.temp_c}℃
        </h1>
      </div>
      <h2 className="text-2xl mt-2 text-white">
        {state?.location?.location?.region} ,
        {state?.location?.location?.country}
      </h2>
    </div>
  );
}

export default Location