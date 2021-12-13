import ForecastEntry from '../../../models/ForecastEntry';

export default (entry: ForecastEntry) => entry.temperatur < 0;
