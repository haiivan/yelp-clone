import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import fetchRestaurant from "../apis/fetchRestaurant";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const Restaurant = () => {
  const { id } = useParams();

  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetchRestaurant.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurants);
      } catch (error) {
        console.log("Error fetching restaurant", error);
      }
    };
    fecthData();
  }, []);

  return (
    <div className="container">
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">Wendys</h1>
          <div className="mt-3">
            <Reviews />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default Restaurant;
