import SERVER_URL from "../../../constants/serverUrl";
import movieDetailsMock from "../movieDetailsMock.json";
import fetchMovieCast from "./fetchMovieCast";
import fetchMovieVideos from "./fetchMovieVideos";

export const mockFetchMovieDetails = async (
  movieId,
  onSuccess,
  onError,
  includeVideos = false,
  includeCast = false
) => {
  try {
    const requestMovieDetails = new Promise((resolve) => {
      setTimeout(() => {
        resolve(movieDetailsMock.find((movie) => movie.id === movieId));
      }, 1000);
    });

    const movieDetails = await requestMovieDetails;

    const movieVideos = await fetchMovieVideos(movieId);

    const movieCast = await fetchMovieCast(movieId);

    const response = { ...movieDetails };

    if (includeVideos) {
      response.videos = movieVideos;
    }

    if (includeCast) {
      response.cast = movieCast.cast;
      response.crew = movieCast.crew;
    }

    onSuccess(response);
  } catch {
    onError("Error fetching movie details");
  }
};

const fetchMovieDetails = async (
  movieId,
  onSuccess,
  onError,
  includeVideos = false,
  includeCast = false
) => {
  try {
    const appendToResponse = [];

    if (includeVideos) {
      appendToResponse.push("videos");
    }

    if (includeCast) {
      appendToResponse.push("credits");
    }

    const queryParams = {
      api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
      language: "en-US",
    };

    if (appendToResponse.length) {
      queryParams.append_to_response = appendToResponse.join(",");
    }

    const query = new URLSearchParams(queryParams);
    const url = `${SERVER_URL}/movie/${movieId}?${query}`;

    const request = await fetch(url);

    if (!request.ok) {
      throw new Error(
        `Couldn't fetch movie details for movie with id ${movieId}`
      );
    }

    const response = await request.json();

    onSuccess({
      ...response,
      videos: response.videos?.results,
      cast: response.credits?.cast,
      crew: response.credits?.crew,
    });
  } catch (error) {
    onError(`Request failed: ${error.message}`);
  }
};

export default fetchMovieDetails;
