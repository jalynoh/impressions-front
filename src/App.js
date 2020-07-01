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
    <div className="app">
        {user ? <Impressions user={user}/> : <Login />}
        {/* <footer className="main-font-color footer-font-size text-right">
          <div>design inspired by</div>
          <div><a href="https://wherearetheblackdesigners.com/" className="main-font-color">wherearetheblackdesigners.com</a></div>
        </footer> */}
    </div>
  );
}

function getUserFromParam() {
  let url = new URL(window.location)
  let user = url.searchParams.get("user");
  return user;
}
