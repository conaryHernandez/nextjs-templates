import React from 'react';
import EventItem from './EventItem';

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
