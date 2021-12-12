import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Content from './components/content';
import Header from './components/header';
import LocationFinder from './components/location-finder';
import SnowForecast from './components/snow-forecast';

function App() {
    return (
        <>
            <Header />
            <Content>
                <Routes>
                    <Route path="conditions" element={<SnowForecast />}></Route>
                    <Route path="" element={<LocationFinder />}></Route>
                </Routes>
            </Content>
        </>
    );
}

export default App;
