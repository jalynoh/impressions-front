import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Impressions from './components/Impressions';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromParam())
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        Jaygi
        {user 
          ? <Impressions user={user}/> 
          : <Login />
        }
      </header>
    </div>
  );
}

function getUserFromParam() {
  let url = new URL(window.location)
  let user = url.searchParams.get("user");
  return user;
}
