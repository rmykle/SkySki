import { AxiosResponse } from 'axios';
import EntryDays from '../../../models/EntryDays';
import ForecastEntry from '../../../models/ForecastEntry';
import ForecastResponse from '../../../models/responses/ForecastResponse';

export default (response: AxiosResponse<ForecastResponse>): EntryDays => {
    return response.data.properties.timeseries
        .map<ForecastEntry>(({ time, data }) => {
            const { summary, details } = data.next_6_hours ?? {
                details: { precipitation_amount: -1 },
                summary: { symbol_code: '' },
            };
            const { air_temperature, wind_speed } = data.instant.details;
            return {
                iconName: summary.symbol_code,
                precipitation: details.precipitation_amount,
                temperatur: air_temperature,
                windSpeed: wind_speed,
                isoTime: time,
                time: time ? new Date(time) : null,
            };
        })
        .filter((a) => {
            const utcHour = a.isoTime.split('T')[1].substring(0, 2);
            return parseInt(utcHour) % 6 === 0;
        })
        .reduce<EntryDays>((acc, curr) => {
            const key = curr.time?.toLocaleDateString() ?? '';
            acc[key] = acc[key] ? [...acc[key], curr] : [curr];

            return acc;
        }, {});
};
