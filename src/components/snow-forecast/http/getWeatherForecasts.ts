import axios from 'axios';

export default (lat: string, lon: string) =>
    axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`);
