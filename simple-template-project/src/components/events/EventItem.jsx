import React from 'react';
import Link from 'next/link';

import classes from './EventItem.module.css';
import Button from '../atoms/Button';

const EventItem = ({ event }) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = event.location.replace(', ', '\n');
  const exploreLink = `/events/${event.id}`;

  return (
    <li className={classes.item}>
      <img src={event.image} alt={event.title} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
