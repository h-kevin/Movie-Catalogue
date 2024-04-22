import SERVER_URL from "../../../constants/serverUrl";
import searchMovieMock from "../searchMovieMock.json";

let timeoutId;

export const mockSearchMovie = async (searchQuery, onSuccess, onError) => {
  try {
    if (!searchQuery) {
      onSuccess();
    } else {
      const request = new Promise((resolve) => {
        const filteredMovieResults = searchMovieMock
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movie) => ({
            id: movie.id,
            title: movie.title,
          }));

        setTimeout(() => {
          resolve(filteredMovieResults);
        }, 1000);
      });

      const response = await request;

      onSuccess(response);
    }
  } catch {
    onError("Error fetching search results");
  }
};

const searchMovie = async (searchQuery, onSuccess, onError) => {
  try {
    if (!searchQuery) {
      onSuccess();
    } else {
      const queryParams = {
        api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
        query: searchQuery,
        include_adult: true,
        language: "en-US",
        page: 1,
      };

      const query = new URLSearchParams(queryParams);
      const url = `${SERVER_URL}/search/movie?${query}`;

      const request = await fetch(url);

      if (!request.ok) {
        throw new Error("Couldn't fetch search results");
      }

      const response = await request.json();

      onSuccess(response.results);
    }
  } catch (error) {
    onError(`Request failed: ${error.message}`);
  }
};

const searchMovieDebounced = (searchQuery, onSuccess, onError) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(
    () => searchMovie(searchQuery, onSuccess, onError),
    500
  );
};

export default searchMovieDebounced;
