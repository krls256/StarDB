import React from "react";
import { Redirect } from 'react-router-dom'


const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
      return (
          <div className='jumbotron'>
              <h2>This page is a full of secrets</h2>
          </div>
      )
  }
  return <Redirect to='/login/'/>
};

export default SecretPage;
