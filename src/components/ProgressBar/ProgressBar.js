import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const Filler = (props) => {
  const [fill, setFill] = useState(0);
  
  useEffect(() => {
    let i = 0;
    for (i = 0; i <= props.percentage; i++) {
      setFill(i);
    }
  }, []);

  return <div className="progressbar-filler" style={{ width: `${fill}%`}} />
}

export default function ProgressBar(props) {
  return (
    <div>
      <div className="progressbar-background">
        <Filler percentage={ props.percentage } />
      </div>
      <div className="progressbar-font-size">{ props.percentage }%</div>
    </div>

  );
}