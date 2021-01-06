import L from 'leaflet';
import Icon from '../assets/images/icon-location.svg';

export const VenueLocationIcon = L.icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  shadowAnchor: [22, 94],
  iconSize: [46, 56],
  className: 'leaflet-venue-icon',
});
