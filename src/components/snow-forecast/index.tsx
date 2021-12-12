import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getWeatherForecasts from './http/getWeatherForecasts';

const SnowForecast = () => {
    const [forecastResult, setForecastResult] = useState<any>([]);
    const { search } = useLocation();
    const paramEntries = new URLSearchParams(search).entries();
    const params = Object.fromEntries(paramEntries);
    const { lat, lon } = params;

    console.log(params);

    useEffect(() => {
        getWeatherForecasts(lat, lon);
        setForecastResult([]);
    }, []);

    if (!(lat && lon)) {
        return <div>Missing latitude or longitude</div>;
    }

    return (
        <ul>
            {forecastResult.map(() => (
                <li key={Math.random() * 40}>result</li>
            ))}
        </ul>
    );
};

export default SnowForecast;
