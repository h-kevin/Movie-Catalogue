import popularMoviesMock from "../popularMoviesMock.json";

const fetchTopBoxOfficeMovies = async (onSuccess, onError) => {
  try {
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(popularMoviesMock);
      }, 1000);
    });

    const response = await request;

    onSuccess(response);
  } catch {
    onError("Error fetching top box office movies");
  }
};

export default fetchTopBoxOfficeMovies;
