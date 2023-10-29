import React from 'react';
import './design-files-css/MainPageList.css';
import EventTags from '../components/EventTags';


const EventItem = ({event}) => {
    const handleClick = () => {
        // add here onClick handler to redirect to the event info
    };


    return (
        <div className="event-item" onClick={handleClick}>
            <div className="event-item-content">
                <img className="event-image" src={event.image} alt={event.name}/>
                <h3 className="event-name">{event.name}</h3>
                <p className="event-description">
                    {event.description}
                </p>
                <EventTags tags={event.tags}/>
            </div>
        </div>
    );
};

const EventList = () => {
    const events = [
        {
            id: 1,
            name: 'Book reading in library for the students',
            description: 'Description for Event 1',
            image: '/testEvent.jpg',
            tags: ['Music', 'Sport', 'Pool']
        },
        {
            id: 2,
            name: 'Event 2',
            description: 'Description for Evensaddddddddddddddddddddddddasdasidhasdhahdqwdqwdoqiwjdoqiwjeoijiuewhfiuwqhriuwqradasdsadasdfdsafsafdasdfasfd',
            image: '/testEvent.jpg',
            tags: ['Music', 'Sport']
        },
        {
            id: 3,
            name: 'Event 3',
            description: 'Description for Event 3',
            image: '/testEvent.jpg',
            tags: ['Music', 'Sport', 'Bassdasad', 'Volleyball']
        },
        {
            id: 4,
            name: 'Event 1',
            description: 'Description for Event 1',
            image: '/testEvent.jpg',
        },
        {
            id: 5,
            name: 'Event 2',
            description: 'Description for Evensaddddddddddddddddddddddddasdasidhasdhahdqwdqwdoqiwjdoqiwjeoijiuewhfiuwqhriuwqradasdsadasdfdsafsafdasdfasfd',
            image: '/testEvent.jpg',
        },
        {
            id: 6,
            name: 'Event 3',
            description: 'Description for Event 3',
            image: '/testEvent.jpg',
        },
        {
            id: 7,
            name: 'Event 1',
            description: 'Description for Event 1',
            image: '/testEvent.jpg',
        },
        {
            id: 8,
            name: 'Event 2',
            description: 'Description for Evensaddddddddddddddddddddddddasdasidhasdhahdqwdqwdoqiwjdoqiwjeoijiuewhfiuwqhriuwqradasdsadasdfdsafsafdasdfasfd',
            image: '/testEvent.jpg',
        },
        {
            id: 9,
            name: 'Event 3',
            description: 'Description for Event 3',
            image: '/testEvent.jpg',
        },
        {
            id: 10,
            name: 'Event 1',
            description: 'Description for Event 1',
            image: '/testEvent.jpg',
        },
        {
            id: 11,
            name: 'Event 2',
            description: 'Description for Evensaddddddddddddddddddddddddasdasidhasdhahdqwdqwdoqiwjdoqiwjeoijiuewhfiuwqhriuwqradasdsadasdfdsafsafdasdfasfd',
            image: '/testEvent.jpg',
        },
        {
            id: 12,
            name: 'Event 3',
            description: 'Description for Event 3',
            image: '/testEvent.jpg',
        },

    ];

    return (
        <div className="event-list-container">
            <div className="event-list">
                {events.map((event) => (
                    <EventItem key={event.id} event={event}/>
                ))}
            </div>
        </div>
    );
};

export default EventList;
