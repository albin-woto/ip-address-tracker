import React, { useContext, useState, useEffect } from 'react';
import '../assets/styles/components/Dashboard.scss';
import IpContext from '../context/IpContext';
import Loader from '../components/Loader';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { ipInfo } = useContext(IpContext);
  const { ip, location, isp, code } = ipInfo;

  useEffect(() => {
    // If I get some info from request, I stop the loader
    Object.entries(ipInfo).length !== 0 && setIsLoading(false);
  }, [ipInfo]);

  return (
    <section className="dashboard">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {
            // The free API has a limit, here I handle that specific error
            code === 403 && (
              <h2 className="dashboard__error">
                I'm sorry, request limit reached.
              </h2>
            )
          }
          {/* Dashboard with ipInfo */}
          <ul className="dashboard__list">
            <li className="dashboard__item">
              <h1 className="item__title">IP ADDRESS</h1>
              <p className="item__value">{ip || 'Not available'}</p>
            </li>
            <li className="dashboard__item">
              <h1 className="item__title">LOCATION</h1>
              <p className="item__value">{location?.city || 'Not available'}</p>
            </li>
            <li className="dashboard__item">
              <h1 className="item__title">TIMEZONE</h1>
              <p className="item__value">
                {location?.timezone || 'Not available'}
              </p>
            </li>
            <li className="dashboard__item">
              <h1 className="item__title">ISP</h1>
              <p className="item__value">{isp || 'Not available'}</p>
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default Dashboard;
