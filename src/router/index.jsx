import { Routes, Route } from "react-router-dom";

import useFavoriteMovies from "../hooks/useFavoriteMovies";
import routes from "../constants/routes";
import AppLayout from "../layouts/AppLayout/AppLayout";
import Home from "../screens/Home/Home";
import Favorites from "../screens/Favorites/Favorites";
import PopularMovies from "../screens/PopularMovies/PopularMovies";
import TopMovies from "../screens/TopMovies/TopMovies";
import MovieDetails from "../screens/MovieDetails/MovieDetails";
import NotFound from "../screens/NotFound/NotFound";

const Router = () => {
  const favoriteMoviesContext = useFavoriteMovies();

  return (
    <Routes>
      <Route
        path={routes.ROOT}
        element={<AppLayout favoriteMoviesContext={favoriteMoviesContext} />}
      >
        <Route path={routes.HOME} element={<Home />}>
          <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />} />
        </Route>
        <Route path={routes.FAVORITES} element={<Favorites />}>
          <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />} />
        </Route>
        <Route path={routes.POPULAR_MOVIES} element={<PopularMovies />}>
          <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />} />
        </Route>
        <Route path={routes.TOP_MOVIES} element={<TopMovies />}>
          <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />} />
        </Route>
      </Route>
      <Route path={routes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default Router;
