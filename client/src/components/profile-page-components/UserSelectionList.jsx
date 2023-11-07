import React, { useState, useRef } from 'react';
import '../design-files-css/profile-page-css/UserSelectionList.css';

function UserSelectionList() {
    const [selectedAction, setSelectedAction] = useState('myEvents');
    const containerRef = useRef(null);

    const handleActionClick = (action) => {
        setSelectedAction(action);
    };

    const handleMouseDown = (e) => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const containerLeft = containerRef.current.getBoundingClientRect().left;
        const containerWidth = containerRef.current.offsetWidth;
        const relativeMousePosition = e.clientX - containerLeft;

        if (relativeMousePosition < containerWidth / 3) {
            setSelectedAction('myEvents');
        } else if (relativeMousePosition < (containerWidth * 2) / 3) {
            setSelectedAction('attending');
        } else {
            setSelectedAction('favorites');
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="user-actions" ref={containerRef}>
            <button
                className={`action-button ${selectedAction === 'myEvents' ? 'selected' : ''}`}
                onClick={() => handleActionClick('myEvents')}
                onMouseDown={handleMouseDown}
            >
                My events
            </button>
            <button
                className={`action-button ${selectedAction === 'attending' ? 'selected' : ''}`}
                onClick={() => handleActionClick('attending')}
                onMouseDown={handleMouseDown}
            >
                Attending events
            </button>
            <button
                className={`action-button ${selectedAction === 'favorites' ? 'selected' : ''}`}
                onClick={() => handleActionClick('favorites')}
                onMouseDown={handleMouseDown}
            >
                Favorite events
            </button>
            <div className={`slider ${selectedAction}`}></div>
        </div>
    );
}

export default UserSelectionList;
