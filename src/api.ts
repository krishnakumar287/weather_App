import axios from 'axios';
import { WeatherData, ForecastData } from './types';

const API_KEY = '7db7f4dc24f41ff2956b0ddce4ddf5da';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city: string): Promise<WeatherData> => {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};

export const getForecast = async (city: string): Promise<ForecastData> => {
  const response = await axios.get(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};