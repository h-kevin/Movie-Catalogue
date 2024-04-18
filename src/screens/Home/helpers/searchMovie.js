import searchMovieMock from "../searchMovieMock.json";

let timeoutId;

const searchMovie = async (query, onSuccess, onError) => {
  try {
    if (!query) {
      onSuccess();
    } else {
      const request = new Promise((resolve) => {
        const filteredMovieResults = searchMovieMock
          .filter((movie) =>
            movie.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((movie) => ({
            id: movie.id,
            title: movie.title,
          }));

        setTimeout(() => {
          console.log(filteredMovieResults);
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

const searchMovieDebounced = (query, onSuccess, onError) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => searchMovie(query, onSuccess, onError), 500);
};

export default searchMovieDebounced;
