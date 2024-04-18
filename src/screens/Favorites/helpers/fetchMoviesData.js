import favoriteMoviesMock from "../favoriteMoviesMock.json";

const fetchMoviesData = async (movieIds, onSuccess, onError) => {
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

export default fetchMoviesData;
