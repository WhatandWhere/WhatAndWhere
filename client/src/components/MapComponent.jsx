import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../components/design-files-css/Map.css';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapCenter = [51.10978812505445, 17.03095731439865];
  const zoomLevel = 14;

  return (
    <MapContainer
      center={mapCenter}
      zoom={zoomLevel}
      className="MapContainer"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        attribution="Atahan Karagoz"
      />
    </MapContainer>
  );
};

export default MapComponent;
