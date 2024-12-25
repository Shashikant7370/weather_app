import React from 'react'
import {useWeather} from "../context/weather"
const Location = () => {
  const state = useWeather();
  console.log(state)
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl text-white font-semibold">
          {state?.location?.current?.temp_c}℃
          <p className="inline text-[16px] ml-3">
            {state?.location?.current?.condition?.text}
          </p>
        </h1>
      </div>
      <h2 className="text-2xl mt-2 text-white">
        {state?.location?.location?.region} ,
        {state?.location?.location?.country}
      </h2>
      <h3 className="text-2xl mt-2 text-purple-300">
        {state?.location?.location?.tz_id}
      </h3>
    </div>
  );
}

export default Location