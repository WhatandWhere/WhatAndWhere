import React from 'react';
import UpperPartOfThePage from '../components/profile-page-components/UpperPartOfThePage';
import UserSelectionList from "../components/profile-page-components/UserSelectionList";
import Header from "../components/Header";
import EventListMainPage from "../components/EventListMainPage";


function ProfilePage() {
    return (
        <div className="main-page">
            <Header/>
            <UpperPartOfThePage />
            <UserSelectionList/>
            <EventListMainPage/>
        </div>
    );
}

export default ProfilePage;
