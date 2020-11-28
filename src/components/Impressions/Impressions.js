import React, { useState, useEffect } from 'react';
import MoodIndicator from '../MoodIndicator/MoodIndicator';
import Generify from '../Generify/Generify';
import * as spotifyService from '../../service/SpotifyService';
import './Impressions.css';
import '../../App.css';

export default function Impressions(props) {
  const [todaysImpression, setTodaysImpression] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    spotifyService.getLastFiftyImpressions(props.token, new Date())
      .then(data => ((data === "ERROR") ? setError(true) : setTodaysImpression(data)));
  }, []);

  if (error) { return <div>Error...</div> }
  if (todaysImpression === 0) { return <div>No music heard today...</div> }
  if (!todaysImpression) { return <div>Loading...</div> }

  return (
    <div className="impressions-table impressions-margin">
      <div className="impressions-table-row">
        <div className="impressions-table-cell text-center">
          <MoodIndicator percentage={ todaysImpression } />
          <Generify />
        </div>
      </div>
    </div>
  );
}