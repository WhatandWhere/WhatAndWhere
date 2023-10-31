import React from 'react';
import UpperPartOfThePage from '../components/profile-page-components/UpperPartOfThePage';
import UserSelectionList from "../components/profile-page-components/UserSelectionList";
import EventsTab from "../components/profile-page-components/EventTab";


function ProfilePage() {
    return (
        <div className="main-page">
            <UpperPartOfThePage />
            <UserSelectionList/>
            <EventsTab/>
        </div>
    );
}

export default ProfilePage;
