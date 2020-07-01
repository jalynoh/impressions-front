import React, { useState, useEffect } from 'react';
import DailyImpression from './DailyImpression/DailyImpression';

const getTodaysImpression = (user) => {
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
    getTodaysImpression(props.user)
      .then(data => ((data === "ERROR") ? setError(true) : setTodaysImpression(data)));
  }, []);

  if (error) { return <div>Error...</div> }
  if (!todaysImpression) { return <div>Loading...</div> }

  return (
    <div>
      <DailyImpression todaysImpression={ todaysImpression } />
    </div>
  );
}