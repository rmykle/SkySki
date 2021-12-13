import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
    <nav className={styles.navigation}>
        <Link to="/">
            <h2>SkySki</h2>
        </Link>
    </nav>
);

export default Header;
