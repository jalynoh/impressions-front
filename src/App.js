import React, { useState, useEffect } from 'react';
import './App.css';

import Login from './components/Login/Login';
import Impressions from './components/Impressions/Impressions';

const titledLogin = () => {
  return (
    <div className="div-center">
      <div className="heading-font-size">impressions.page</div>
      <Login />
    </div>
  );
}

const titledImpressions = (token) => {
  return (
    <div className="div-center">
      <div className="heading-font-size text-center">impressions.page</div>
      <Impressions token={ token }/>
    </div>
  );
}

export default function App() {
  const [token, setToken] = useState(null);
  useEffect(() => { setToken(getHashParams().access_token) }, [])

  return (
    <div>
      { token ? titledImpressions(token) : titledLogin() }
    </div>
  );
}

function getHashParams() {
  let hashParams = {};
  let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  e = r.exec(q);
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }
  return hashParams;
}
