import React from 'react';
import '../../App.css';
import './Login.css';
import { FaSpotify } from 'react-icons/fa';

export default function Login() {
  const authUrl = new URL("http://localhost:7001/impressions/auth/authorize");

  return (
    <div className="center-div sub-font-size">
      <div className="text-left login-text-margin-top">
        <div>Explore your</div>
        <div>listening patterns</div>
      </div>
      <div className="login-text-right login-text-margin-top">
        <a href={authUrl} className="main-font-color">Login to Spotify<FaSpotify size="2em"/>{'>>'}</a>
      </div>
    </div>
  );
}