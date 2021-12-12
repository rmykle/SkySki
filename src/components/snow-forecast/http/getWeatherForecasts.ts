import axios from 'axios';
import EntryDays from '../../../models/EntryDays';
import ForecastResponse from '../../../models/responses/ForecastResponse';
import mapEntryGroupedByDate from '../utils/mapEntryGroupedByDate';

export default (lat: string, lon: string): Promise<EntryDays> =>
    axios
        .get<ForecastResponse>(
            `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`
        )
        .then(mapEntryGroupedByDate);
