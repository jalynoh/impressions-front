import React, { useState, useEffect } from 'react';
import './App.css';

import Login from './components/Login/Login';
import Impressions from './components/Impressions';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromParam())
  }, [])
  
  return (
    <div className="app main-font-color">
      <div className="center-div text-center heading-font-size">
        impressions.page
      </div>
      <div>
        {user ? <Impressions user={user}/> : <Login />}
      </div>
      {/* <footer className="main-font-color footer-font-size text-right">
        <div>see more work at</div>
        <div><a href="https://jalyns.page/" className="main-font-color">jalyns.page</a></div>
      </footer> */}
    </div>
  );
}

function getUserFromParam() {
  let url = new URL(window.location)
  let user = url.searchParams.get("user");
  return user;
}
