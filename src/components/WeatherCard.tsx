import React from 'react';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';
import { WeatherData } from '../types';

interface Props {
  data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4">{data.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="w-32 h-32"
        />
        <p className="text-6xl font-bold text-white mb-4">
          {Math.round(data.main.temp)}°C
        </p>
        <p className="text-xl text-white capitalize mb-8">
          {data.weather[0].description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex items-center gap-2 text-white">
            <Thermometer className="w-5 h-5" />
            <span>Feels like: {Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Droplets className="w-5 h-5" />
            <span>Humidity: {data.main.humidity}%</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Wind className="w-5 h-5" />
            <span>Wind: {Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Cloud className="w-5 h-5" />
            <span>Pressure: {data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;