import React from 'react';
import './MoodIndicator.css';

function getMouthMood(percentage) {
  if (percentage < 33) {
    return "moodindicator-sad"
  } else if (percentage < 66) {
    return "moodindicator-flat"
  } else {
    return "moodindicator-happy"
  }
}

export default function MoodIndicator(props) {
  return (
    <div className="moodindicator-face">
      <div className="moodindicator-eye" />
      <div className="moodindicator-mouth">
        <div className={ getMouthMood(props.percentage) } />
      </div>
      <div className="moodindicator-eye" />
    </div>
  );
}