import ForecastEntry from '../../../../models/ForecastEntry';
import Card from '../../../card';
import styles from './ForecastDetails.module.scss';

interface ForecastDetailsProps {
    readonly title: string;
    readonly entries: ForecastEntry[];
}

const ForecastDetails = ({ title, entries }: ForecastDetailsProps) => (
    <Card title={title} className={styles.card}>
        <div className={styles.details}>
            {entries.map((e) => (
                <div key={e.isoTime}>
                    <p>{e.time?.toLocaleTimeString()}</p>
                    <p>{e.precipitation} mm</p>
                    <p>{e.temperatur} °C</p>
                </div>
            ))}
        </div>
    </Card>
);

export default ForecastDetails;
