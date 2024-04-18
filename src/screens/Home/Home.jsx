import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import Filters from "./components/Filters/Filters";
import NowPlayingMovies from "./components/NowPlayingMovies/NowPlayingMovies";

const Home = () => {
  const context = useOutletContext();

  const { filterByGenres, nowPlayingMovies, loading } = useNowPlayingMovies();

  return (
    <div className="home-container">
      <Filters filterByGenres={filterByGenres} />
      <NowPlayingMovies nowPlayingMovies={nowPlayingMovies} loading={loading} />
      <Outlet context={context} />
    </div>
  );
};

export default Home;
