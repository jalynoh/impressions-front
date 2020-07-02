import React, { useState, useEffect } from 'react';
import './App.css';

import Login from './components/Login/Login';
import Impressions from './components/Impressions';

const titledLogin = () => {
  return (
    <div className="div-center">
      <div className="heading-font-size">
        impressions.page
      </div>
      <Login />
    </div>
  );
}

const titledImpressions = (user) => {
  return (
    <div>
      <div className="heading-font-size">
        impressions.page
      </div>
      <div>
        <Impressions user={user}/>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => { setUser(getUserFromParam()) }, [])

  return (
    <div>
      { user ? titledImpressions(user) : titledLogin() }
    </div>
  );
}

function getUserFromParam() {
  let url = new URL(window.location)
  let user = url.searchParams.get("user");
  return user;
}
