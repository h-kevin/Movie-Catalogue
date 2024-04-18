import popularMoviesMock from "../popularMoviesMock.json";

const fetchPopularMovies = async (onSuccess, onError) => {
  try {
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(popularMoviesMock);
      }, 1000);
    });

    const response = await request;

    onSuccess(response);
  } catch {
    onError("Error fetching popular movies");
  }
};

export default fetchPopularMovies;
