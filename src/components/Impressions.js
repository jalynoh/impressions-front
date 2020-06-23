import React, { useState } from 'react';
import '../App.css';

export default function Impressions(props) {
  const [todaysImpression, setTodaysImpression] = useState(null);

  function getTodaysImpression(user) {
    const todaysImpressionUrl = "http://localhost:7001/impressions/api/todaysImpression";
    const options = {
      method: 'GET',
      headers: new Headers({'user': user})
    };

    fetch(todaysImpressionUrl, options)
      .then(resp => resp.json())
      .then(data => setTodaysImpression(data));
  }

  return (
    <div>
      Impressions <br/><br/>
      {todaysImpression
        ? <DailyImpression todaysImpression={todaysImpression} />
        : <button onClick={() => getTodaysImpression(props.user)}>Get Today's Impression</button>
      }
    </div>
  );
}

function DailyImpression(props) {
  return (
    <div>
      Todays Impression
      <br/>
      {props.todaysImpression}
    </div>
  )
}