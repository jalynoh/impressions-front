import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Login from './components/Login';
import Impressions from './components/Impressions';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromParam())
  }, [])
  
  return (
    <div className="App">
      <Navbar>
        <Navbar.Brand><span className="h1">Impressions</span></Navbar.Brand>
      </Navbar>
      <div>
        {user ? <Impressions user={user}/> : <Login />}
      </div>
    </div>

  );
}

function getUserFromParam() {
  let url = new URL(window.location)
  let user = url.searchParams.get("user");
  return user;
}
