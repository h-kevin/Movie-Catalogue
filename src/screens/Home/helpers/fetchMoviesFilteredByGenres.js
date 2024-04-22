import dayjs from "dayjs";

import nowPlayingMoviesMock from "../nowPlayingMoviesMock.json";
import SERVER_URL from "../../../constants/serverUrl";

let timeoutId;

export const mockFetchMoviesFilteredByGenres = async (
  genres,
  onSuccess,
  onError
) => {
  try {
    if (!genres.length) {
      onSuccess();
    } else {
      const request = new Promise((resolve) => {
        setTimeout(() => {
          resolve(nowPlayingMoviesMock);
        }, 1000);
      });

      const response = await request;

      const filteredMovies = response.filter(
        (movie) => !genres.some((id) => !movie.genre_ids.includes(id))
      );

      onSuccess(filteredMovies);
    }
  } catch {
    onError("Failed to fetch movies for the selected genres");
  }
};

const fetchMoviesFilteredByGenres = async (genres, onSuccess, onError) => {
  try {
    if (!genres.length) {
      onSuccess();
    } else {
      const queryParams = {
        api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
        include_adult: true,
        include_video: false,
        language: "en-US",
        page: 1,
        ["release_date.lte"]: dayjs().format("YYYY-MM-DD"),
        sort_by: "desc",
        with_genres: genres.join(","),
      };

      const query = new URLSearchParams(queryParams);
      const url = `${SERVER_URL}/discover/movie?${query}`;

      const request = await fetch(url);

      if (!request.ok) {
        throw new Error("Couldn't fetch movies for the selected genres");
      }

      const response = await request.json();

      onSuccess(response.results);
    }
  } catch (error) {
    onError(`Request failed: ${error.message}`);
  }
};

const fetchMoviesFilteredByGenresDebounced = (genres, onSuccess, onError) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(
    () => fetchMoviesFilteredByGenres(genres, onSuccess, onError),
    1000
  );
};

export default fetchMoviesFilteredByGenresDebounced;
