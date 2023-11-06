import React, { useState } from 'react';
import EventListMainPage from './EventListMainPage';
import MapComponent from '../components/MapComponent';
import TopBarComponent from '../components/TopBarComponent';
import AddEventModal from '../components/AddEventModal';

const MainComponent = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newEventLocation, setNewEventLocation] = useState(null);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleMapClick = (e) => {
    if (isEditMode) {
      setNewEventLocation(e.latlng);
    }
  };

  const handleCreateEvent = (newEvent) => {
    // Handle the event creation logic here
    console.log('New Event Data:', newEvent);
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
        <button onClick={toggleEditMode}>
          {isEditMode ? 'Disable Edit Mode' : 'Enable Edit Mode'}
        </button>
      </div>

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
