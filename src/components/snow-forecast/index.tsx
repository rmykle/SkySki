import { useEffect, useState } from 'react';
import EntryDays from '../../models/EntryDays';
import useGetSearchParams from '../place-finder/util/useGetSearchParams';
import getWeatherForecasts from './http/getWeatherForecasts';
import ForecastDetails from './sub-components/ForecastDetails';
import styles from './SnowForecast.module.scss';

const SnowForecast = () => {
    const [forecastResult, setForecastResult] = useState<EntryDays>({});
    const { lat, lon } = useGetSearchParams();

    useEffect(() => {
        getWeatherForecasts(lat, lon).then((result) => setForecastResult(result));
    }, []);

    if (!(lat && lon)) {
        return <div>Missing latitude or longitude</div>;
    }

    return (
        <ul className={styles.entryList}>
            {Object.keys(forecastResult).map((entry) => {
                const day = forecastResult[entry];
                return (
                    <li key={entry}>
                        <ForecastDetails title={entry} entries={day} />
                    </li>
                );
            })}
        </ul>
    );
};

export default SnowForecast;
