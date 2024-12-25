import Button from './components/Button';
import Input  from './components/Input'
import React from 'react'
import WeatherImage from './components/weatherImage';
import Location from './components/Location';

const App = () => {
  
  return (
    <div className="flex justify-center items-center left-[50%] top-[50%] translate-[-50%,-50%] w-full min-h-screen bg-slate-900 ">
      <div className=" flex justify-top items-center w-[500px] h-[550px] bg-slate-700 flex-col rounded-md">
        <h1 className="text-center text-orange-500 text-4xl m-4 font-bold">
          Weather App
        </h1>
        <div className='flex'>
          <Input />
          <Button />
        </div>
          <WeatherImage/>
          <Location/>
      </div>
    </div>
  );
}

export default App