import { Link } from 'react-router-dom';

const About = () => (
  <main className="about">
    <section className="about__glass">
      <p className="about__text">
        This is a challenge to improve my skills, created by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="about__link"
        >
          Frontend Mentor.
        </a>
      </p>
      <p className="about__text">
        Technologies used in this project:
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>SASS</li>
          <li>
            IP Geolocation by{' '}
            <a
              href="https://geo.ipify.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              ipify
            </a>
            <li>
              Map by{' '}
              <a
                href="https://react-leaflet.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__link"
              >
                React Leaflet
              </a>
            </li>
          </li>
        </ul>
      </p>
      <p className="about__text">
        You can check the code in{' '}
        <a
          href="https://github.com/albin-woto/ip-address-tracker"
          target="_blank"
          rel="noopener noreferrer author"
          className="about__link"
        >
          my github.
        </a>
      </p>
      <Link to="/" className="about__link" id="back">
        Go back
      </Link>
    </section>
  </main>
);

export default About;
