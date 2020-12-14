import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <p className="footer__text">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://www.linkedin.com/in/albin-wotoszyn"
        target="_blank"
        rel="noopener noreferrer author"
        className="footer__link"
      >
        Albin Wotoszyn.
      </a>
    </p>
  </footer>
);

export default Footer;
