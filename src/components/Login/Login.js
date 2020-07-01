import React from 'react';
import './Login.css';
import { FaSpotify } from 'react-icons/fa';

export default function Login() {
  const authUrl = new URL("http://localhost:7001/impressions/auth/authorize");

  return (
    <div className="login-wrapper main-font-color">
      <div>
        <div className="heading-font-size login-text-margin-bottom">impressions.page</div>
        <div className="text-left login-text-margin login-text-margin-bottom">
          <div className="sub-font-size">Explore your</div>
          <div className="sub-font-size">listening patterns</div>
        </div>
        <div className="sub-font-size text-right">
          <a href={authUrl} className="main-font-color">Login to Spotify<FaSpotify size="2em"/>{'>>'}</a>
        </div>
      </div>
    </div>
  );
}