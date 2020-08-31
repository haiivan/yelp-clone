import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import List from "../components/List";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <AddRestaurant />
      <List />
    </div>
  );
};

export default Home;
