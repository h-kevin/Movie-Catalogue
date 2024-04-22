import { useEffect, useState } from "react";

import { mockFetchPopularMovies } from "../helpers/fetchPopularMovies";

const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!popularMovies) {
      setLoading(true);

      mockFetchPopularMovies(
        (movies) => {
          setPopularMovies(movies);
          setError(null);
          setLoading(false);
        },
        (errorMessage) => {
          setError(errorMessage);
          setLoading(false);
        }
      );
    }
  }, [popularMovies]);

  return {
    popularMovies,
    loading,
    error,
  };
};

export default usePopularMovies;
