import { useLocation } from 'react-router-dom';

export default () => {
    const { search } = useLocation();
    const paramEntries = new URLSearchParams(search).entries();
    const params = Object.fromEntries(paramEntries);
    return params;
};
