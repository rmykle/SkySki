import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Place from '../../models/Place';
import PlaceResponse from '../../models/responses/PlaceResponse';
import Button from '../button';
import Card from '../card';
import SearchForm from '../search-form';
import styles from './PlaceFinder.module.scss';
import mapLocationResponse from './util/mapLocationResponse';

const LocationFinder = () => {
    const [result, setResult] = useState<Place[]>([]);
    const [initialSearchPerformed, setInitialSearchPerformed] = useState(false);

    useEffect(() => {}, []);

    const onSubmit = (searchTerm: string) => {
        setInitialSearchPerformed(true);
        axios
            .get<PlaceResponse>(
                `https://ws.geonorge.no/stedsnavn/v1/sted?sok=${searchTerm}*&treffPerSide=10&side=1`
            )
            .then(mapLocationResponse)
            .then((mappedData) => setResult(mappedData));
    };

    return (
        <div className={styles.locationFinder}>
            <SearchForm onSearch={onSubmit} placeholder="Stedsnavn e.l." />
            {!initialSearchPerformed && (
                <p className={styles.performSearchInstructions}>Søk etter sted!</p>
            )}
            <ul>
                {result.map((place) => (
                    <li key={place.generatedId}>
                        <Link
                            to={{
                                pathname: 'conditions',
                                search: `lat=${place.lat}&lon=${place.long}`,
                            }}>
                            <Card title={place.name} className={styles.placecard}>
                                <div className={styles.placecardContent}>
                                    <div>
                                        <p>Lat: {place.lat}</p>
                                        <p>Lon: {place.long}</p>
                                    </div>
                                    <Button>Åpne</Button>
                                </div>
                            </Card>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationFinder;
