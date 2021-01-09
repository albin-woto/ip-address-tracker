import { useContext, useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { ChangeViewProps } from '../types/types';
import { VenueLocationIcon } from './VenueLocationIcon';
import 'leaflet/dist/leaflet.css';
import '../assets/styles/components/Map.scss';
import IpContext from '../context/IpContext';
import AboutIcon from '../components/AboutIcon';

const Map = () => {
  const defaultLocation = { lat: -34.65114705956248, lng: -58.44001654662209 };
  const [mapLocation, setMapLocation] = useState<LatLngExpression>(
    defaultLocation
  );
  const { ipInfo } = useContext(IpContext);
  const { location } = ipInfo;

  // MapContainer props are inmutable, so to change view I have to use a custom function
  const ChangeView = ({ center, zoom }: ChangeViewProps) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  useEffect(() => {
    // Check if location was updated by request
    Object.keys(ipInfo).includes('location') &&
      setMapLocation({ lat: location?.lat!, lng: location?.lng! });
  }, [ipInfo, location]);

  return (
    <MapContainer
      center={mapLocation}
      zoom={14}
      zoomAnimation={true}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <ChangeView center={mapLocation} zoom={14} />
      <ZoomControl position="bottomleft" />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapLocation!} icon={VenueLocationIcon}>
        <Popup>{ipInfo?.location?.city || 'Default Location'}</Popup>
      </Marker>
      <AboutIcon />
    </MapContainer>
  );
};

export default Map;
