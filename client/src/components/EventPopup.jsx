import React from 'react';
import EventTags from '../components/EventTags.jsx';
import '../components/design-files-css/EventPopup.css';

const EventPopup = ({ event }) => {
  return (
    <div className="event-popup">
      <img className="event-image" src={event.image} alt={event.name} />
      <h3 className="event-name">{event.name}</h3>
      <p className="event-description">{event.description}</p>
      <EventTags tags={event.tags} />
    </div>
  );
};

export default EventPopup;
