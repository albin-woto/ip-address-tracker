import React from 'react';
import '../assets/styles/components/Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <ul className="dashboard__list">
        <li className="dashboard__item">
          <h1 className="item__title">IP ADDRESS</h1>
          <p className="item__value">112.123.123</p>
        </li>
        <li className="dashboard__item">
          <h1 className="item__title">LOCATION</h1>
          <p className="item__value">La Quiaca</p>
        </li>
        <li className="dashboard__item">
          <h1 className="item__title">TIMEZONE</h1>
          <p className="item__value">1:11</p>
        </li>
        <li className="dashboard__item">
          <h1 className="item__title">ISP</h1>
          <p className="item__value">Lenteja</p>
        </li>
      </ul>
    </section>
  );
};

export default Dashboard;
