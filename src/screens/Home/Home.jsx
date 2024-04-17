import React from "react";

import Filters from "./components/Filters/Filters";
import PopularMovies from "./components/PopularMovies/PopularMovies";

const Home = () => {
  return (
    <div className="home-container">
      <Filters />
      <PopularMovies />
    </div>
  );
};

export default Home;
