import React, { useState } from 'react';
import '../design-files-css/profile-page-css/UpperPartOfThePage.css';

function UpperPartOfThePage({ showEditButton }) {
    const username = "MockUsername";
    const userEmail = "m1@gmail.com";
    const userPhone = "+9900000000";
    const userProfilePic = "/placeholder-avatar.png";
    const [isEditing, setIsEditing] = useState(false);
    const [email, setEmail] = useState(userEmail);
    const [phone, setPhone] = useState(userPhone);
    const [profilePic, setProfilePic] = useState(userProfilePic);

    // Function to handle profile picture change
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        const maxFileSize = 2 * 1024 * 1024;

        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file.');
                return;
            }

            if (file.size > maxFileSize) {
                alert('File is too large. Please upload an image smaller than 2MB.');
                return;
            }

            setProfilePic(URL.createObjectURL(file));
        }
    };

    // Function to validate email using regex pattern
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern
        return re.test(email);
    };

    // Function to validate phone number to ensure it starts with a plus and contains digits
    const validatePhone = (phone) => {
        const re = /^\+[0-9]*$/; // Phone number regex pattern
        return re.test(phone);
    };

    // Call this function to save changes
    const saveChanges = () => {
        // Validate email and phone before saving
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!validatePhone(phone)) {
            alert('Phone number must start with a plus sign and contain only numbers.');
            return;
        }
        // If we're not in edit mode, we will save the current values
        console.log('Values saved:', { email, phone });
        alert('Values saved!');
        setIsEditing(false); // Exit editing mode
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
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="input-field"
                        />
                        <input
                            type = "tel"
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
                {showEditButton && ( // Only render the button if showEditButton is true
                    <button onClick={isEditing ? saveChanges : () => setIsEditing(true)}
                            className={`edit-button ${isEditing ? 'edit-button-bold' : ''}`}>
                        {isEditing ? 'Save changes' : 'Edit user details'}
                    </button>
                )}

            </div>
        </div>
    );
}

UpperPartOfThePage.defaultProps = {
    showEditButton: true,
};

export default UpperPartOfThePage;