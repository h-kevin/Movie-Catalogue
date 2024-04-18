import nowPlayingMoviesMock from "../nowPlayingMoviesMock.json";

let timeoutId;

const fetchMoviesFilteredByGenres = async (genres, onSuccess, onError) => {
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

const fetchMoviesFilteredByGenresDebounced = (genres, onSuccess, onError) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(
    () => fetchMoviesFilteredByGenres(genres, onSuccess, onError),
    1000
  );
};

export default fetchMoviesFilteredByGenresDebounced;
