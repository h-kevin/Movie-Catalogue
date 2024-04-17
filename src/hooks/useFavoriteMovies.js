import { useEffect, useState, useCallback } from "react";
import localStorageKeys from "../constants/localStorageKeys";
import { getItem } from "../utils/storage";
import updateFavorites from "../helpers/updateFavorites";

const useFavoriteMovies = () => {
  const [favoriteMovieIds, setFavoriteMovieIds] = useState();

  const toggleFavorite = useCallback((movieId) => {
    updateFavorites(movieId, setFavoriteMovieIds);
  }, []);

  useEffect(() => {
    if (!favoriteMovieIds) {
      const favoriteMovieIdsFromLocalStorage =
        getItem(localStorageKeys.FAVORITE_MOVIES) || [];

      setFavoriteMovieIds(favoriteMovieIdsFromLocalStorage);
    }
  }, []);

  return {
    favoriteMovieIds,
    toggleFavorite,
  };
};

export default useFavoriteMovies;
