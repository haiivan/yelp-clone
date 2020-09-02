import React from "react";
import StarRating from "./StarRating";

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <StarRating rating={2.5} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;