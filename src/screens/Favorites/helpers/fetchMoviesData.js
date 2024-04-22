import fetchMovieDetails from "../../MovieDetails/helpers/fetchMovieDetails";
import favoriteMoviesMock from "../favoriteMoviesMock.json";

export const mockFetchMoviesData = async (movieIds, onSuccess, onError) => {
  try {
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(favoriteMoviesMock);
      }, 1000);
    });

    const response = await request;

    const moviesData = response.filter((movie) => movieIds.includes(movie.id));

    onSuccess(moviesData);
  } catch {
    onError("Error fetching movies data");
  }
};

const fetchMoviesData = async (movieIds, onSuccess, onError) => {
  try {
    const results = [];
    const errors = [];

    const requests = movieIds.map((movieId) =>
      fetchMovieDetails(
        movieId,
        (movieDetails) => results.push(movieDetails),
        (errorMessage) => errors.push(errorMessage)
      )
    );

    await Promise.allSettled(requests);

    if (errors.length) {
      throw new Error(`\n${errors.join("\n")}`);
    }

    onSuccess(
      results.sort(
        (movieA, movieB) =>
          movieIds.indexOf(movieA.id) - movieIds.indexOf(movieB.id)
      )
    );
  } catch (error) {
    onError(`Request failed:${error.message}`);
  }
};

export default fetchMoviesData;
