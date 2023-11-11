import React, { useState } from 'react';
import EventListMainPage from './EventListMainPage';
import MapComponent from '../components/MapComponent';
import TopBarComponent from '../components/TopBarComponent';
import AddEventModal from '../components/AddEventModal';

const MainComponent = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newEventLocation, setNewEventLocation] = useState(null);
  const [eventMarkers, setEventMarkers] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setButtonClicked(true);
  };

  const handleMapClick = (e) => {
    if (isEditMode) {
      setNewEventLocation(e.latlng);
    }
  };

  const handleCreateEvent = (newEvent) => {
    if (newEventLocation) {
      // Create a new event marker using the location and event details
      const eventMarker = {
        location: newEventLocation,
        name: newEvent.name,
        date: newEvent.date,
        description: newEvent.description,
      };

      // Add the event marker to the state or send it to a database
      setEventMarkers([...eventMarkers, eventMarker]);

      // Close the modal
      setNewEventLocation(null);
    }
  };

  return (
    <div className="main-page-all">
      <div className="top-bar">
        <TopBarComponent />
      </div>

      <div className="filter-section">
        {/* Your filters content goes here */}
      </div>

      <div className="map-section">
        <MapComponent onMapClick={handleMapClick} newEventLocation={newEventLocation} />
      </div>
      <button
          onClick={toggleEditMode}
          className={buttonClicked ? (isEditMode ? 'add-edit-event-button-clicked' : 'add-edit-event-button') : 'add-edit-event-button'}
        >
          {isEditMode ? 'Disable Edit Mode' : 'Enable Edit Mode'}
        </button>

      <div className="list-section">
        <EventListMainPage />
      </div>

      {isEditMode && newEventLocation && (
        <AddEventModal
          isOpen={true}
          onClose={() => setNewEventLocation(null)}
          onSave={handleCreateEvent}
          location={newEventLocation}
        />
      )}
    </div>
  );
};


export default MainComponent;
