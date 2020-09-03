import React, { useState } from "react";
import fetchRestaurant from "../apis/fetchRestaurant";
import { useParams, useHistory, useLocation } from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  let history = useHistory();
  const location = useLocation();

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmitReview = async (e) => {
    try {
      await fetchRestaurant.post(`/${id}/addReview`, {
        name,
        review,
        rating,
      });
    } catch (error) {
      console.log("Opps!", error);
    }
  };

  return (
    <div className="mb-2 container">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Name"
              id="name"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
            name=""
            id="review"
            className="form-control"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmitReview(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
