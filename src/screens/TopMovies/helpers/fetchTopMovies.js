import SERVER_URL from "../../../constants/serverUrl";
import topMoviesMock from "../topMoviesMock.json";

export const mockFetchTopMovies = async (onSuccess, onError) => {
  try {
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(topMoviesMock);
      }, 1000);
    });

    const response = await request;

    onSuccess(response);
  } catch {
    onError("Error fetching top movies list");
  }
};

const fetchTopMovies = async (onSuccess, onError) => {
  try {
    const queryParams = {
      api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
      language: "en-US",
      page: 1,
    };

    const query = new URLSearchParams(queryParams);
    const url = `${SERVER_URL}/movie/top_rated?${query}`;

    const request = await fetch(url);

    if (!request.ok) {
      throw new Error("Couldn't fetch top rated movies");
    }

    const response = await request.json();

    onSuccess(response.results);
  } catch (error) {
    onError(`Request failed: ${error.message}`);
  }
};

export default fetchTopMovies;
