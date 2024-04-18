import nowPlayingMoviesMock from "../nowPlayingMoviesMock.json";

const fetchNowPlayingMovies = async (onSuccess, onError) => {
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

export default fetchNowPlayingMovies;
