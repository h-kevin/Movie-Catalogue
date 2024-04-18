import { useCallback, useEffect, useState } from "react";

import fetchNowPlayingMovies from "../helpers/fetchNowPlayingMovies";
import fetchMoviesFilteredByGenresDebounced from "../helpers/fetchMoviesFilteredByGenres";

const useNowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filterByGenres = useCallback(
    (genres) => {
      setLoading(true);

      fetchMoviesFilteredByGenresDebounced(
        genres,
        (filteredMovies) => {
          setNowPlayingMovies(filteredMovies);
          setError(null);
          setLoading(false);
        },
        (errorMessage) => {
          setError(errorMessage);
          setLoading(false);
        }
      );
    },
    [nowPlayingMovies]
  );

  useEffect(() => {
    if (!nowPlayingMovies) {
      setLoading(true);

      fetchNowPlayingMovies(
        (movies) => {
          setNowPlayingMovies(movies);
          setError(null);
          setLoading(false);
        },
        (errorMessage) => {
          setError(errorMessage);
          setLoading(false);
        }
      );
    }
  }, [nowPlayingMovies]);

  return {
    filterByGenres,
    nowPlayingMovies,
    loading,
    error,
  };
};

export default useNowPlayingMovies;
