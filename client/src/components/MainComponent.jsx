import React from "react";
import EventListMainPage from "./EventListMainPage";
import MapComponent from "../components/MapComponent.jsx";
import TopBarComponent from "../components/TopBarComponent.jsx";
import NavBar from "../components/entry-page/Navbar.jsx";

const MainComponent = () => {
  return (
    <>
      <NavBar /> {/* Header */}
      <div className="main-page-all">
        {/* Filters Section */}
        <div className="filter-section">
          {/* Your filters content goes here */}
        </div>

        {/* Map Section */}
        <div className="map-section">
          <MapComponent />
        </div>

        {/* List Section */}
        <div className="list-section">
          <EventListMainPage />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
