import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import FavoriteMovies from "./components/FavoriteMovies/FavoriteMovies";

const Favorites = () => {
  const context = useOutletContext();

  return (
    <div className="favorites-container">
      <FavoriteMovies />
      <Outlet context={context} />
    </div>
  );
};

export default Favorites;
