import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Place from '../../models/Place';
import PlaceResponse from '../../models/responses/PlaceResponse';
import SearchForm from '../SearchForm';
import styles from './LocationFinder.module.scss';
import mapLocationResponse from './util/mapLocationResponse';

const LocationFinder = () => {
    const [result, setResult] = useState<Place[]>([]);

    useEffect(() => {}, []);

    const onSubmit = (searchTerm: string) => {
        axios
            .get<PlaceResponse>(
                `https://ws.geonorge.no/stedsnavn/v1/sted?sok=${searchTerm}*&treffPerSide=10&side=1`
            )
            .then(mapLocationResponse)
            .then((mappedData) => setResult(mappedData));
    };

    return (
        <div className={styles.locationFinder}>
            <SearchForm onSearch={onSubmit} />
            <ul>
                {result.map((place) => (
                    <li key={place.generatedId}>
                        <Link
                            to={{
                                pathname: 'conditions',
                                search: `lat=${place.lat}&lon=${place.long}`,
                            }}>
                            {place.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationFinder;
