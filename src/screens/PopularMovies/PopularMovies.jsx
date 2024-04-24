import { Outlet, useOutletContext } from "react-router-dom";

import PopularMoviesList from "./components/PopularMoviesList/PopularMoviesList";

const PopularMovies = () => {
  const context = useOutletContext();

  return (
    <div className="popular-movies-container">
      <PopularMoviesList />
      <Outlet context={context} />
    </div>
  );
};

export default PopularMovies;
