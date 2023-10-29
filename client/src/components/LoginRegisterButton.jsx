import React from 'react';
import './design-files-css/LoginRegisterButton.css';

function LoginRegisterButton(props) {
    return (
        <button type="submit" className="form-button">
            {props.label}
        </button>
    );
};

export default LoginRegisterButton;
