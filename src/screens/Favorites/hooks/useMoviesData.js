import { useEffect, useState } from "react";

import { mockFetchMoviesData } from "../helpers/fetchMoviesData";

const useMoviesData = (movieIds) => {
  const [moviesData, setMoviesData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieIds?.length) {
      setLoading(true);

      mockFetchMoviesData(
        movieIds,
        (data) => {
          setMoviesData(data);
          setError(null);
          setLoading(false);
        },
        (errorMessage) => {
          setError(errorMessage);
          setLoading(false);
        }
      );
    } else {
      setMoviesData([]);
    }
  }, [movieIds]);

  return {
    moviesData,
    loading,
    error,
  };
};

export default useMoviesData;
