import React, { useState } from 'react';
import '../design-files-css/profile-page-css/UpperPartOfThePage.css';

function UpperPartOfThePage() {
    const username = "MockUsername";
    const userEmail = "m1@gmail.com";
    const userPhone = "+9900000000";
    const userProfilePic = "/placeholder-avatar.png";
    const [isEditing, setIsEditing] = useState(false);
    const [isButtonBold, setIsButtonBold] = useState(false);
    const [email, setEmail] = useState(userEmail);
    const [phone, setPhone] = useState(userPhone);
    const [profilePic, setProfilePic] = useState(userProfilePic);

    const handleButtonClick = () => {
        setIsEditing(!isEditing); // Toggle the editing mode
        if (isEditing) {
            // If we're not in edit mode, we will save the current values
            console.log('Values saved:', { email, phone });
            alert('Values saved!');
        }
        setIsButtonBold(!isButtonBold);
    };

    // Function to handle profile picture change
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Assuming you want to display the image without saving it to a server
            setProfilePic(URL.createObjectURL(file));
        }
    };

    return (
        <div className="user-profile">
            {isEditing ? (
                <div className="user-image">
                    <input
                        type="file"
                        className="profile-pic-upload"
                        onChange={handleProfilePicChange}
                        accept="image/*"
                    />
                </div>
            ) : (
                <div className="user-image">
                    <img src={profilePic} alt="User" className="profile-pic" />
                </div>
            )}
            <div className="user-details">
                <div className="text-display">{username}</div>
                {isEditing ? (
                    <>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="input-field"
                        />
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            className="input-field"
                        />
                    </>
                ) : (
                    <>
                        <div className="text-display">{email}</div>
                        <div className="text-display">{phone}</div>
                    </>
                )}
                <button onClick={handleButtonClick}
                        className={`edit-button ${isButtonBold ? 'edit-button-bold' : ''}`}>
                    {isEditing ? 'Save changes' : 'Edit user details'}
                </button>

            </div>
        </div>
    );
}

export default UpperPartOfThePage;