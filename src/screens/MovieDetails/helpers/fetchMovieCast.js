import movieCastMock from "../movieCastMock.json";

const fetchMovieCast = async (movieId) => {
  try {
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(movieCastMock.find((movieCast) => movieCast.id === movieId));
      }, 1000);
    });

    const response = await request;

    return response;
  } catch {
    console.error("Error fetching movie cast");
  }
};

export default fetchMovieCast;
