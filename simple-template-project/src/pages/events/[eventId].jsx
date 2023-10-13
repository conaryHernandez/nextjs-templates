import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventSummary from '@/components/events/EventDetail/EventSummary';
import EventLogistics from '@/components/events/EventDetail/EventLogistics';
import EventContent from '@/components/events/EventDetail/EventContent';
import { getEventById } from '../../../dummy-data';

const EventDetails = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetails;
