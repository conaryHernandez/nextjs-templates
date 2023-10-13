import React from 'react';
import { useRouter } from 'next/router';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/ResultsTitle/ResultsTitle';

import { getFilteredEvents } from '../../../dummy-data';

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 10;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > maxYear ||
    numYear < currentYear ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />

      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
