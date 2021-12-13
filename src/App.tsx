import { Route, Routes } from 'react-router-dom';
import Content from './components/content';
import Header from './components/header';
import LocationFinder from './components/place-finder';
import SnowForecast from './components/snow-forecast';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <Content>
                <Routes>
                    <Route path="conditions" element={<SnowForecast />}></Route>
                    <Route path="" element={<LocationFinder />}></Route>
                </Routes>
            </Content>
        </div>
    );
}

export default App;
