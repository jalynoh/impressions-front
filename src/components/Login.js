import React, { Component } from 'react';

export default function Login() {
  // const clientId = "848cb762ea6c478e89c1016a2bb4b9a6";
  // const redirect_uri = new URL("http://localhost:7001/impressions/auth/callback");

  // const authUrl = new URL("https://accounts.spotify.com/authorize");
  // authUrl.searchParams.append("client_id", clientId);
  // authUrl.searchParams.append("response_type", "code");
  // authUrl.searchParams.append("redirect_uri", redirect_uri);

  const authUrl = new URL("http://localhost:7001/impressions/auth/authorize");

  return (
    <div>
      Login Component
      <a href={ authUrl }>Login to Spotify</a>
    </div>
  );
}