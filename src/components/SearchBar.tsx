import arrowIcon from '../assets/images/icon-arrow.svg';
import '../assets/styles/components/SearchBar.scss';
import { useIp } from '../hooks/useIp';

const SearchBar: React.FC = () => {
  const { ip, setIp, isValid, updateIpInfo } = useIp();

  // Handle user input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateIpInfo(ip);
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
          className={`search__input ${!isValid ? 'search__input--error' : ''}`}
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
      {!isValid && (
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
