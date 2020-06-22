import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Impressions from './components/Impressions';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getTokenFromParam())
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        Jaygi
        {token 
          ? <Impressions token={token}/> 
          : <Login />
        }
      </header>
    </div>
  );
}

function getTokenFromParam() {
  let url = new URL(window.location)
  let token = url.searchParams.get("accessToken");
  return token;
}

export default App;
