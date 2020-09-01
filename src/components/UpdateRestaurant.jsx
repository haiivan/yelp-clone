import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import fetchRestaurant from "../apis/fetchRestaurant";

const UpdateRestaurant = (props) => {
  const { id } = useParams();

  let history = useHistory();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchRestaurant.get(`/${id}`);
      const { name, location, price_range } = response.data.data.restaurants;
      setName(name);
      setLocation(location);
      setPriceRange(price_range);
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedRestaurant = await fetchRestaurant.put(`/${id}`, {
        name,
        location,
        price_range: priceRange,
      });

      history.push("/");
    } catch (error) {
      console.log("Error updating data", error);
    }
  };

  return (
    <div>
      <form action="" className="container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            type="text"
            className="form-control"
            id="location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={priceRange}
            onChange={(event) => setPriceRange(event.target.value)}
            type="number"
            className="form-control"
            id="price_range"
            min="1"
            max="5"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
