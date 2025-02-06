import React from 'react';

interface Props {
  date: string;
  temp: number;
  icon: string;
  description: string;
}

const ForecastCard: React.FC<Props> = ({ date, temp, icon, description }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    hour: 'numeric',
  });

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 transform transition-all duration-500 hover:scale-105">
      <div className="flex flex-col items-center">
        <p className="text-white font-medium">{formattedDate}</p>
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
          className="w-16 h-16"
        />
        <p className="text-2xl font-bold text-white">{Math.round(temp)}°C</p>
        <p className="text-sm text-white capitalize">{description}</p>
      </div>
    </div>
  );
};

export default ForecastCard;