import ForecastEntry from '../../../../models/ForecastEntry';
import Card from '../../../card';
import isEntryFreezing from '../../utils/isEntryFreezing';
import styles from './ForecastDetails.module.scss';
import snow from '../../../../assets/snow.svg';
import nosnow from '../../../../assets/nosnow.svg';

interface ForecastDetailsProps {
    readonly title: string;
    readonly entries: ForecastEntry[];
}

const ForecastDetails = ({ title, entries }: ForecastDetailsProps) => (
    <Card title={title} className={styles.card}>
        <div className={styles.details}>
            {entries.map((e) => (
                <div key={e.isoTime}>
                    <b>{e.time?.toLocaleTimeString()}</b>
                    <p>{e.precipitation} mm</p>
                    <p>{e.temperatur} °C</p>
                    <img src={isEntryFreezing(e) ? snow : nosnow} />
                </div>
            ))}
        </div>
    </Card>
);

export default ForecastDetails;
