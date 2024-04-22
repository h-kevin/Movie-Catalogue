import SERVER_URL from "../../../constants/serverUrl";
import nowPlayingMoviesMock from "../nowPlayingMoviesMock.json";

export const mockFetchNowPlayingMovies = async (onSuccess, onError) => {
  try {
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(nowPlayingMoviesMock);
      }, 1000);
    });

    const response = await request;

    onSuccess(response);
  } catch {
    onError("Error fetching now playing movies");
  }
};

const fetchNowPlayingMovies = async (onSuccess, onError) => {
  try {
    const queryParams = {
      api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
      language: "en-US",
      page: 1,
    };

    const query = new URLSearchParams(queryParams);
    const url = `${SERVER_URL}/movie/now_playing?${query}`;

    const request = await fetch(url);

    if (!request.ok) {
      throw new Error("Couldn't fetch now playing movies");
    }

    const response = await request.json();

    onSuccess(response.results);
  } catch (error) {
    onError(`Request failed: ${error.message}`);
  }
};

export default fetchNowPlayingMovies;
