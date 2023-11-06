import React, { useState } from 'react';
import '../components/design-files-css/AddEventModal.css';

const AddEventModal = ({ isOpen, onClose, onSave, location }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSave = () => {
    // You can add validation and data processing here
    onSave({
      name: eventName,
      date: eventDate,
      description: eventDescription,
      location: location, // Pass the location data to the onSave function
    });

    // Close the modal
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Create a New Event</h2>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <label>
          Event Date:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </label>
        <label>
          Event Description:
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          ></textarea>
        </label>
        <button onClick={handleSave}>Save Event</button>
      </div>
    </div>
  );
};

export default AddEventModal;
