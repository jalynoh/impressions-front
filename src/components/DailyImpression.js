import React from 'react';
import Card from 'react-bootstrap/Card';

export default function DailyImpression(props) {
  return (
    <Card bg={'light'}>
      <Card.Header as="h5">Today's Date</Card.Header>
      <Card.Body>
        <Card.Text>
          {props.todaysImpression}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}