import { useEffect, useState } from "react";

import searchMovieDebounced from "../helpers/searchMovie";

const useMovieResults = () => {
  const [query, setQuery] = useState("");
  const [movieResults, setMovieResults] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    searchMovieDebounced(
      query,
      (movies) => {
        setMovieResults(movies);
        setError(null);
        setLoading(false);
      },
      (errorMessage) => {
        setError(errorMessage);
        setLoading(false);
      }
    );
  }, [query]);

  return {
    query,
    setQuery,
    movieResults,
    loading,
    error,
  };
};

export default useMovieResults;
