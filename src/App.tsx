import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { getWeather, getForecast } from './api';
import { WeatherData, ForecastData } from './types';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';

function App() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      const [weatherData, forecastData] = await Promise.all([
        getWeather(city),
        getForecast(city),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-violet-800 to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="w-full px-6 py-3 rounded-full bg-white/20 backdrop-blur-lg text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Search className="w-6 h-6 text-white" />
            </button>
          </div>
        </form>

        {error && (
          <div className="text-white text-center mb-8 bg-red-500/20 backdrop-blur-lg rounded-lg p-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-white text-center">Loading...</div>
        ) : (
          weather && (
            <>
              <div className="flex justify-center mb-12">
                <WeatherCard data={weather} />
              </div>

              {forecast && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    5-Day Forecast
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {forecast.list.slice(0, 8).map((item) => (
                      <ForecastCard
                        key={item.dt}
                        date={item.dt_txt}
                        temp={item.main.temp}
                        icon={item.weather[0].icon}
                        description={item.weather[0].description}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;