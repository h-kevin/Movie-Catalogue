import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import routes from "../constants/routes";
import useFavoriteMovies from "../hooks/useFavoriteMovies";
import AppLayout from "../layouts/AppLayout/AppLayout";
import Home from "../screens/Home/Home";
import Favorites from "../screens/Favorites/Favorites";
import TopBoxOffice from "../screens/TopBoxOffice/TopBoxOffice";
import TopMovies from "../screens/TopMovies/TopMovies";

const router = () => {
  const favoriteMoviesContext = useFavoriteMovies();

  return (
    <Routes>
      <Route
        path={routes.ROOT}
        element={<AppLayout favoriteMoviesContext={favoriteMoviesContext} />}
      >
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.FAVORITES} element={<Favorites />} />
        <Route path={routes.TOP_BOX_OFFICE} element={<TopBoxOffice />} />
        <Route path={routes.TOP_MOVIES} element={<TopMovies />} />
      </Route>
      <Route path={routes.NOT_FOUND} element={<div>Not Found</div>} />
    </Routes>
  );
};

export default router;
