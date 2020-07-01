import React, { useState, useEffect } from 'react';
import DailyImpression from './DailyImpression/DailyImpression';

const fetchTodaysImpression = (user) => {
  const todaysImpressionUrl = "http://localhost:7001/impressions/api/todaysImpression";
  const options = {
    method: 'GET',
    headers: new Headers({'user': user})
  };

  return fetch(todaysImpressionUrl, options)
    .then(resp =>  {
      if (resp.ok) {
        return resp.json();
      } else {
        console.error(resp.json());
        return("ERROR");
      }
    }).catch(err => {
      console.error(err);
      return("ERROR");
    });
}

export default function Impressions(props) {
  const [todaysImpression, setTodaysImpression] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTodaysImpression(props.user)
      .then(data => ((data === "ERROR") ? setError(true) : setTodaysImpression(data)));
  }, []);

  if (error) { return <div>Error...</div> }
  if (todaysImpression === 0) { return <div>No music heard today...</div> }
  if (!todaysImpression) { return <div>Loading...</div> }

  return (
    <div>
      <div>This is a previous date</div>
      <DailyImpression todaysImpression={ todaysImpression } />
      <div>This is the next date</div>
    </div>
  );
}