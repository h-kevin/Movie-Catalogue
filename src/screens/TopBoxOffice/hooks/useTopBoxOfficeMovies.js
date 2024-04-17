import { useEffect, useState } from "react";

import fetchTopBoxOfficeMovies from "../helpers/fetchTopBoxOfficeMovies";

const useTopBoxOfficeMovies = () => {
  const [topBoxOfficeMovies, setTopBoxOfficeMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!topBoxOfficeMovies) {
      setLoading(true);

      fetchTopBoxOfficeMovies(
        (movies) => {
          setTopBoxOfficeMovies(movies);
          setError(null);
          setLoading(false);
        },
        (errorMessage) => {
          setError(errorMessage);
          setLoading(false);
        }
      );
    }
  }, [topBoxOfficeMovies]);

  return {
    topBoxOfficeMovies,
    loading,
    error,
  };
};

export default useTopBoxOfficeMovies;
