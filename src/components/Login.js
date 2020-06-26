import React from 'react';

export default function Login() {
  const authUrl = new URL("http://localhost:7001/impressions/auth/authorize");

  return (
    <div>
      <a href={ authUrl }>Login to Spotify</a>
    </div>
  );
}