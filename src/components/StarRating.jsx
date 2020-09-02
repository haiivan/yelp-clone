import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let index = 1; index <= 5; index++) {
    if (index <= rating) {
      stars.push(<i className="fas fa-star text-warning"></i>);
    } else if (index > rating && rating > index - 1) {
      stars.push(<i className="fas fa-star-half-alt text-warning"></i>);
    } else {
      stars.push(<i className="far fa-star text-warning"></i>);
    }
  }

  return <>{stars}</>;
};

export default StarRating;
