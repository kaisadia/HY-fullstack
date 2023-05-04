import React from 'react';
import '../index.css'

function ErrNotification({errNotification}) {
    if (errNotification == null) {
        return null
    } 
    return (
        <div className="error">{errNotification}</div>
    );
}

export default ErrNotification;