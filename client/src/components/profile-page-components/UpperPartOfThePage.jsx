import React from 'react';
import '../design-files-css/profile-page-css/UpperPartOfThePage.css';

function UpperPartOfThePage() {
    return (
        <div className="user-profile">
            <div className="user-image">
                <img src="/placeholder-avatar.png" alt="User Placeholder" className="profile-pic" />
            </div>
            <div className="user-details">
                <input placeholder="Name" className="input-field" />
                <input placeholder="Surname" className="input-field" />
                <input placeholder="Username" className="input-field" />
                <button className="edit-button">Edit user details</button>
            </div>
        </div>
    );
}

export default UpperPartOfThePage;
