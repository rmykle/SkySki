import { AxiosResponse } from 'axios';
import EntryDays from '../../../models/EntryDays';
import ForecastEntry from '../../../models/ForecastEntry';
import ForecastResponse from '../../../models/responses/ForecastResponse';

export default (response: AxiosResponse<ForecastResponse>): EntryDays => {
    return response.data.properties.timeseries
        .map<ForecastEntry>(
            ({
                data: {
                    instant: {
                        details: { air_temperature, wind_speed },
                    },
                },
                time,
            }) => ({
                windSpeed: wind_speed,
                temperatur: air_temperature,
                time: time ? new Date(time) : null,
                precipitation: 0,
                isoTime: time,
            })
        )
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
