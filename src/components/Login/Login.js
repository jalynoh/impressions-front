import React from 'react';
import '../../App.css';
import './Login.css';
import { FaSpotify } from 'react-icons/fa';

export default function Login() {
  const baseUrl = "https://accounts.spotify.com/authorize";
  const clientId = "848cb762ea6c478e89c1016a2bb4b9a6";
  // const redirectUri = "http://localhost:3000";
  const redirectUri = "https://murmuring-anchorage-51448.herokuapp.com/";
  const scopes = "user-read-recently-played";
  const responseType = "token";

  let authUrl = new URL(baseUrl);
  authUrl.searchParams.append("client_id", clientId);
  authUrl.searchParams.append("redirect_uri", redirectUri);
  authUrl.searchParams.append("scope", scopes);
  authUrl.searchParams.append("response_type", responseType);

  return (
    <div className="login-sub-font-size">
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