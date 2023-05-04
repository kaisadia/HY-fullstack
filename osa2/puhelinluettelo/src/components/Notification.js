import React from 'react';
import '../index.css'

function Notification({notification}) {
    if (notification === null) {
        return null
    }
    return (
        <div className="added-person">{notification}</div>
    );
}

export default Notification;