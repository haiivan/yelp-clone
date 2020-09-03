import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import fetchRestaurant from "../apis/fetchRestaurant";

import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import StarRating from "../components/StarRating";

const Restaurant = () => {
  const { id } = useParams();

  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetchRestaurant.get(`/${id}`);

        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log("Error fetching restaurant", error);
      }
    };
    fecthData();
  }, []);

  console.log("Selected", selectedRestaurant);

  return (
    <div>
      {selectedRestaurant.restaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.avg_rating} />
            <span className="text-warning ml-1">
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default Restaurant;
