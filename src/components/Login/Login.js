import React from 'react';
import '../../App.css';
import './Login.css';
import { FaSpotify } from 'react-icons/fa';

export default function Login() {
  const authUrl = new URL("http://localhost:7001/impressions/auth/authorize");

  return (
    <div className="sub-font-size">
      <div className="login-text-margin">
        <div>Explore your</div>
        <div>listening patterns</div>
      </div>
      <div className="login-button-margin login-text-right">
        <a href={authUrl} className="main-font-color">Login to Spotify<FaSpotify size="2em"/>{'>>'}</a>
      </div>
    </div>
  );
}