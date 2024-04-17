import localStorageKeys from "../constants/localStorageKeys";
import { getItem, saveItem } from "../utils/storage";

const updateFavorites = (movieId, callBack) => {
  let favoriteMovieIdsFromLocalStorage =
    getItem(localStorageKeys.FAVORITE_MOVIES) || [];

  if (favoriteMovieIdsFromLocalStorage.includes(movieId)) {
    favoriteMovieIdsFromLocalStorage = favoriteMovieIdsFromLocalStorage.filter(
      (movieIdFromLocalStorage) => movieIdFromLocalStorage !== movieId
    );
  } else {
    favoriteMovieIdsFromLocalStorage.push(movieId);
  }

  saveItem(localStorageKeys.FAVORITE_MOVIES, favoriteMovieIdsFromLocalStorage);

  if (callBack) {
    callBack(favoriteMovieIdsFromLocalStorage);
  }
};

export default updateFavorites;
