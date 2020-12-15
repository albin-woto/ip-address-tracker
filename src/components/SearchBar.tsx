import React from 'react';
import arrowIcon from '../assets/images/icon-arrow.svg';
import '../assets/styles/components/SearchBar.scss';

const SearchBar: React.FC = () => {
  return (
    <form role="search" className="search">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="search__input"
        aria-label="Input to search for any IP address or domain"
        required
      />
      <button type="submit" className="search__button">
        <img src={arrowIcon} alt="arrow icon to search" />
      </button>
    </form>
  );
};

export default SearchBar;
