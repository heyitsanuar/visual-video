import React from "react";
import EventItem from "./EventItem";

import { cards } from "../../data/eventsCard";

const Events = () => {
  const [pagination, setPagination] = React.useState({
    currentPage: 0,
    numberOfPages: cards.length,
  });

  const { currentPage, numberOfPages } = pagination;

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setPagination({ ...pagination, currentPage: currentPage + 1 });
    }
  };

  const handleBackPage = () => {
    if (currentPage > 0) {
      setPagination({ ...pagination, currentPage: currentPage - 1 });
    }
  };

  return (
    <div class='services__container' id='slider'>
      {cards.map((i) => (
        <EventItem
          key={i.id}
          {...i}
          isVisible={currentPage === i.id}
          onBack={currentPage > 0 ? handleBackPage : undefined}
          onNext={currentPage < numberOfPages - 1 ? handleNextPage : undefined}
        />
      ))}
    </div>
  );
};

export default Events;
