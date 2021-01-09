import React, { lazy } from 'react';
import '../assets/styles/pages/Home.scss';
import SearchBar from '../components/SearchBar';
import Dashboard from '../components/Dashboard';

const Map = lazy(() => import('../components/Map'));

const Home: React.FC = () => {
  return (
    <main>
      <div className="top-section">
        <h1 className="top-section__title">IP Address Tracker</h1>
        <SearchBar />
        <Dashboard />
      </div>
      <Map />
    </main>
  );
};

export default Home;
