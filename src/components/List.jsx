import React, { useEffect, useContext } from "react";
import fetchRestaurant from "../apis/fetchRestaurant";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const List = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  let history = useHistory();

  const handleUpdate = (event, id) => {
    event.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRestaurant.get("/");

        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log("Error fetrching data", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (event, id) => {
    event.stopPropagation();
    try {
      await fetchRestaurant.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (error) {
      console.log("Error deleting data", error);
    }
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>Ratings</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={(event) => handleUpdate(event, restaurant.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(event) => handleDelete(event, restaurant.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
