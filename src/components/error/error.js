import React from "react";

import './error.scss'
import icon from './star.png'

const ErrorMessage = () => {
    return (
        <div className="error-message">
            <img src={icon} alt="error logo"/>
            <div className="error-message__boom">
                boom!!!
            </div>
            <div>
                Something has gone terribly wrong
                <br/>
                (but we already send droids to fix it)
                <br/>
                Please reload this page
            </div>
        </div>
    )
};
export default ErrorMessage