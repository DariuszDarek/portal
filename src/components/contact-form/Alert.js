import React from 'react';
import './Alert.css'

function Alert(props) {
    const {children, status} = props;
    return (
        <div className={`alert ${status}`}>{children}</div>
    );
}

export default Alert;