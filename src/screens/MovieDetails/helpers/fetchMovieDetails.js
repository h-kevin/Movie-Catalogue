import movieDetailsMock from "../movieDetailsMock.json";
import fetchMovieCast from "./fetchMovieCast";
import fetchMovieVideos from "./fetchMovieVideos";

const fetchMovieDetails = async (movieId, onSuccess, onError) => {
  try {
    const requestMovieDetails = new Promise((resolve) => {
      setTimeout(() => {
        resolve(movieDetailsMock.find((movie) => movie.id === movieId));
      }, 1000);
    });

    const movieDetails = await requestMovieDetails;

    const movieVideos = await fetchMovieVideos(movieId);

    const movieCast = await fetchMovieCast(movieId);

    onSuccess({
      ...movieDetails,
      videos: movieVideos,
      cast: movieCast.cast,
      crew: movieCast.crew,
    });
  } catch {
    onError("Error fetching movie details");
  }
};

export default fetchMovieDetails;
