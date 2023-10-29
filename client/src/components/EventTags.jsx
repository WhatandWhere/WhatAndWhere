import React, {useEffect, useRef} from 'react';

const EventTags = ({tags = []}) => {
    const tagsContainerRef = useRef(null);

    useEffect(() => {
        const container = tagsContainerRef.current;
        if (container) {
            while (container.scrollWidth > container.offsetWidth && tags.length > 0) {
                tags.pop();  // Remove the last tag from the list
                container.lastChild.remove();  // Remove the last DOM element from the tags container
            }
        }
    }, [tags]);

    return (
        <div className="event-tags" ref={tagsContainerRef}>
            {tags.map(tag => (
                <div className="event-tag" key={tag}>{tag}</div>
            ))}
        </div>
    );
};

export default EventTags;
