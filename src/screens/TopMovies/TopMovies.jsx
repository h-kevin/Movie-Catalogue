import { Outlet, useOutletContext } from "react-router-dom";

import TopMoviesList from "./components/TopMoviesList/TopMoviesList";

const TopMovies = () => {
  const context = useOutletContext();

  return (
    <div className="top-movies-container">
      <TopMoviesList />
      <Outlet context={context} />
    </div>
  );
};

export default TopMovies;
