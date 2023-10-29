import React from 'react';
import EventListMainPage from "./EventListMainPage";
import MapComponent from '../components/MapComponent.jsx';
import TopBarComponent from '../components/TopBarComponent.jsx';

const MainComponent = () => {
    return (
        <div className="main-page-all">
            {/* Top Bar Section */}
            <div className="top-bar">
                {/* Your top bar content goes here */}
                <TopBarComponent/>
            </div>

            {/* Filters Section */}
            <div className="filter-section">
                {/* Your filters content goes here */}
            </div>

            {/* Map Section */}
            <div className="map-section">
                <MapComponent/>
            </div>

            {/* List Section */}
            <div className="list-section">
                <EventListMainPage/>
            </div>
        </div>
    );
};


export default MainComponent;
