import React, {useState} from 'react';
import UpperPartOfThePage from '../components/profile-page-components/UpperPartOfThePage';
import UserSelectionList from "../components/profile-page-components/UserSelectionList";
import Header from "../components/Header";
import EventListMainPage from "../components/EventListMainPage";
import '../components/design-files-css/profile-page-css/ProfilePage.css';


function ProfilePage() {
    const [selectedTab, setSelectedTab] = useState('myEvents');

    // Function to render content based on the selected tab
    const renderTabContent = () => {
        return <EventListMainPage selectedTab={selectedTab} />;
    };

    return (
        <div className="main-page">
            <Header />
            <UpperPartOfThePage />
            <div className="bottom-part">
                <UserSelectionList
                    selectedAction={selectedTab}
                    onSelect={setSelectedTab}
                />
                <div className="tab-content">
                    <EventListMainPage/>
                    {/*{renderTabContent()}*/}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;