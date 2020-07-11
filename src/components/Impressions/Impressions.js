import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import * as spotifyService from '../../service/SpotifyService';
import './Impressions.css';
import '../../App.css';

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

const getDisplayDate = (dateObj) => {
  const monthName = dateObj.toLocaleString("default", {month: "short"});
  return `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
}

const resolvePrevDate = (currDate) => {
  let prevDate = new Date(currDate);
  prevDate.setDate(currDate.getDate() - 1);
  return prevDate;
}

const resolveNextDate = (currDate) => {
  let nextDate = new Date(currDate);
  nextDate.setDate(currDate.getDate() + 1);
  return nextDate;
}

const resolveNextDateStatus = (nextDate) => {
  const activeFontColor = "#1A6340";
  const inactiveFontColor = "#C4C4C4";

  const today = new Date();

  nextDate.setHours(0,0,0,0);
  today.setHours(0,0,0,0);
  if (nextDate > today) {
    return inactiveFontColor;
  }
  return activeFontColor;
}

export default function Impressions(props) {
  const [todaysImpression, setTodaysImpression] = useState(null);
  const [error, setError] = useState(false);
  const [currDate, setCurrDate] = useState(new Date());
  const [prevDate, setPrevDate] = useState(null);
  const [nextDate, setNextDate] = useState(null);

  useEffect(() => {
    setPrevDate(resolvePrevDate(currDate));
    setNextDate(resolveNextDate(currDate));

    spotifyService.getLastFiftyImpressions(props.token, currDate)
      .then(data => ((data === "ERROR") ? setError(true) : setTodaysImpression(data)));
  }, [currDate]);

  if (error) { return <div>Error...</div> }
  if (todaysImpression === 0) { return <div>No music heard today...</div> }
  if (!todaysImpression) { return <div>Loading...</div> }

  return (
    <div className="impressions-table impressions-margin">
      <div className="impressions-table-row">
        <div className="impressions-table-cell impressions-side-date-font-size text-left">
          <button onClick={ () => setCurrDate(prevDate) } className="main-font-color">
            {'<<'} { getDisplayDate(prevDate) }
          </button>
        </div>
        <div className="impressions-table-cell text-center">
          <div className="impressions-main-date-font-size">{ getDisplayDate(currDate) }</div>
          <ProgressBar percentage={ todaysImpression } />
        </div>
        <div className="impressions-table-cell impressions-side-date-font-size text-right">
          <button onClick={ () => setCurrDate(nextDate) } className="main-font-color" style={{ color: resolveNextDateStatus(nextDate) }}>
            { getDisplayDate(nextDate) } {'>>'}
          </button>
        </div>
      </div>
    </div>
  );
}