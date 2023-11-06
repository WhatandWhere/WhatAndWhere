import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../components/design-files-css/Map.css';

const MapComponent = ({ onMapClick, newEventLocation }) => {
  const mapCenter = [51.10978812505445, 17.03095731439865];
  const zoomLevel = 14;
  const mapRef = useRef();

  const customIcon = new L.Icon({
    iconUrl: './peopleparty.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const markers = [
    // ... your markers
  ];

  // Handle map click and pass the event to the parent component
  const handleClick = (e) => {
    onMapClick(e);
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.on('click', handleClick);
    }
  }, [onMapClick]);

  return (
    <MapContainer
      center={mapCenter}
      zoom={zoomLevel}
      className="MapContainer"
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        attribution="Atahan Karagoz"
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customIcon}>
          <Popup>
            <div className="popup-content">
              <img src={marker.imageSrc} alt={`Image for ${marker.title}`} />
              <h2>{marker.title}</h2>
              <p>{marker.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {newEventLocation && (
        <Marker position={newEventLocation} icon={customIcon}>
          <Popup>
            <div className="popup-content">
              <img src={newEventLocation.imageSrc} alt="New Event Image" />
              <h2>New Event</h2>
              <p>New event description here.</p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
