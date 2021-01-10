import React, { useState, useEffect, useContext } from 'react';
import IpContext from '../context/IpContext';
import validation from '../utils/validation';
import getIpInfo from '../utils/getIpInfo';
import arrowIcon from '../assets/images/icon-arrow.svg';
import '../assets/styles/components/SearchBar.scss';

const SearchBar: React.FC = () => {
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [ip, setIp] = useState<string>('');
  const { setIpInfo, setLoading } = useContext(IpContext);

  // Get Public IP info on initial render
  useEffect(() => {
    const controller = new AbortController();
    getIpInfo(ip).then((publicIpInfo) => {
      setIpInfo(publicIpInfo!);
      setLoading(false);
    });
    // Cleanup
    return () => controller.abort();
    // eslint-disable-next-line
  }, []);

  // Handle user input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate ip input
    const validationResult = validation(ip);
    setIsValid(validationResult);

    if (isValid) {
      setLoading(true);

      getIpInfo(ip).then((ipInfo) => {
        setIpInfo(ipInfo!);
        setLoading(false);
      });
    }
  };

  return (
    <>
      <form role="search" className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="ip"
          value={ip}
          onChange={handleChange}
          placeholder="Search for any IP address or domain"
          className={`search__input ${
            !isValid && isValid !== undefined ? 'search__input--error' : ''
          }`}
          aria-label="Input to search for any IP address or domain"
          required
        />
        <button
          type="submit"
          className="search__button"
          aria-label="Submit button"
        >
          <img src={arrowIcon} alt="arrow icon" />
        </button>
      </form>
      {!isValid && isValid !== undefined && (
        <h2 className="search__error">
          <span role="img" aria-label="red cross">
            ❌
          </span>{' '}
          Enter a valid IP.
        </h2>
      )}
    </>
  );
};

export default SearchBar;
