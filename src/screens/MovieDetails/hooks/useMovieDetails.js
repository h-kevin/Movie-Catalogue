import { useEffect, useState } from "react";

import fetchMovieDetails from "../helpers/fetchMovieDetails";

const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      setLoading(true);

      fetchMovieDetails(
        movieId,
        (movies) => {
          setMovieDetails(movies);
          setError(null);
          setLoading(false);
        },
        (errorMessage) => {
          setError(errorMessage);
          setLoading(false);
        }
      );
    }
  }, [movieId]);

  return {
    movieDetails,
    loading,
    error,
  };
};

export default useMovieDetails;
