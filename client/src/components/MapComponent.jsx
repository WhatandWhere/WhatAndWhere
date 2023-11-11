import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../components/design-files-css/Map.css';
import EventPopup from '../components/EventPopup.jsx';
import axios from 'axios';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css'; // Import the CSS for the Locate control
import 'leaflet.locatecontrol'; // Import the Locate control
import SearchSuggestions from '../components/SearchSuggestions';

const MapComponent = ({ onMapClick, newEventLocation }) => {
  const mapCenter = [51.10978812505445, 17.03095731439865];
  const zoomLevel = 14;
  const mapRef = useRef();
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);


  const customIcon = new L.Icon({
    iconUrl: './pin.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const markers = [
    {
      id: 1,
      name: 'Event 1',
      description: 'Description for Event 1',
      image: '/testEvent.jpg',
      tags: ['Sport', 'Music', 'Pool'],
      position: [51.10978812505445, 17.03095731439865],
    },
    {
      id: 2,
      name: 'Event 2',
      description: 'Description for Event 2',
      image: '/testEvent.jpg',
      tags: ['Music', 'Sport'],
      position: [51.110, 17.032],
    },
    {
      id: 3,
      name: 'Event 3',
      description: 'Description for Event 3',
      image: '/testEvent.jpg',
      tags: ['Pool', 'Sport', 'Bassdasad', 'Volleyball'],
      position: [51.108, 17.031],
    },
  ];

  const handleClick = (e) => {
    onMapClick(e);
  };

  useEffect(() => {
    const map = mapRef.current;

    const clickHandler = (e) => {
      handleClick(e);
    };

    const locateControl = L.control.locate({
      drawCircle: true,
      follow: true,
      setView: 'untilPan',
      cacheLocation: true,
      onLocationError: (err) => {
        alert(err.message);
      },
      onLocationOutsideMapBounds: () => {
        alert('You are located outside the map bounds.');
      },
      strings: {
        title: 'Locate Me',
      },
      locateOptions: {
        maxZoom: 16,
      },
    });

    if (map) {
      // Initialize Locate Control
      locateControl.addTo(map);
      //locateControl.start(); //to start the page directly from the user's location

      // Clear existing click handlers
      map.off('click', clickHandler);

      // Add the new click handler
      map.on('click', clickHandler);
    }

    // Cleanup when the component unmounts
    return () => {
      if (map) {
        map.off('click', clickHandler);
        map.removeControl(locateControl);
      }
    };
  }, [onMapClick, handleClick]);



  // locate me outside of useEffect
/*   const initLocateControl = () => {
    const lc = L.control.locate({
      drawCircle: true, // Do not show a circle representing accuracy
      follow: true, // Continuously follow the user's location
      setView: 'untilPan', // Set the view to the user's location until the user pans the map
      cacheLocation: true, // Cache the user's location to improve performance
      onLocationError: (err) => {
        alert(err.message);
      },
      onLocationOutsideMapBounds: () => {
        alert('You are located outside the map bounds.');
      },
      strings: {
        title: 'Locate Me', // Customize the button title
      },
    });
  
    lc.addTo(mapRef.current); // Add the control to your map
    //lc.start(); //to start the page directly from the user's location
  }; */




  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchInputChange = async (e) => {
    const inputQuery = e.target.value;
    setSearchQuery(inputQuery);

    try {
      const suggestionsResponse = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${inputQuery}`
      );
      const suggestionData = suggestionsResponse.data.map((suggestion) => suggestion.display_name);
      setSuggestions(suggestionData);
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSelectedSuggestion(suggestion); // Add a state to track the selected suggestion
    // You can choose to clear suggestions or not based on your requirements
    // setSuggestions([]);
  };

  const handleAddressSearch = async () => {
    if (searchQuery) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
        );
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          mapRef.current.setView([lat, lon], zoomLevel);
        }
      } catch (error) {
        console.error('Error searching for address:', error);
      }
    }
    setSuggestions([]); // Clear suggestions after selecting one
  };

  const handleSearchInputBlur = () => {
    // Clear suggestions only if no suggestion was selected
    if (!selectedSuggestion) {
      setSuggestions([]);
    }
  };

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
      />

      <div className="search-box">
        <input
          className='input-search'
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddressSearch();
            }
          }}
        />
        <button className="btn-search" onClick={handleAddressSearch}>
          <img src="/magnifying-glass.png" alt='mglass'/>
        </button>
        {suggestions.length > 0 && (
          <SearchSuggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
        )}
      </div>

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customIcon}>
          <Popup>
            <EventPopup event={marker} />
          </Popup>
        </Marker>
      ))}

      {newEventLocation && (
        <Marker position={newEventLocation} icon={customIcon}>
          <EventPopup event={newEventLocation} isNewEvent />
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
