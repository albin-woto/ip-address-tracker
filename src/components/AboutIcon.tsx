import { Link } from 'react-router-dom';
import '../assets/styles/components/AboutIcon.scss';

const AboutIcon = () => (
  <Link to="/about" className="about-icon" aria-label="Go to About page">
    ?
  </Link>
);

export default AboutIcon;
