import React from "react";
import { Redirect } from 'react-router-dom'

const LoginPage = ({ isLoggedIn, Login }) => {
    if (isLoggedIn) {
            return <Redirect to='/'/>
    }
    return (
        <div className='jumbotron'>
            <h3>Click to login</h3>
            <button
                className='btn badge-info'
                onClick={Login}>Login</button>
        </div>
    )
};

export default LoginPage
