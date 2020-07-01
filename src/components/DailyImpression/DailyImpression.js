import React from 'react';
import ProgressBar from 'react-animated-progress-bar';

export default function DailyImpression(props) {
  return (
    <div>
      This will be a progress bar {props.todaysImpression}
    </div>
  );
}