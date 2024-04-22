import { useEffect, useState } from "react";

import { mockFetchTopMovies } from "../helpers/fetchTopMovies";

const useTopMovies = () => {
  const [topMovies, setTopMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!topMovies) {
      setLoading(true);

      mockFetchTopMovies(
        (movies) => {
          setTopMovies(movies);
          setError(null);
          setLoading(false);
        },
        (errorMessage) => {
          setLoading(false);
          setError(errorMessage);
        }
      );
    }
  }, [topMovies]);

  return {
    topMovies,
    loading,
    error,
  };
};

export default useTopMovies;
