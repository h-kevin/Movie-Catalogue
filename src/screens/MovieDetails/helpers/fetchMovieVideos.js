import movieVideosMock from "../movieVideosMock.json";

const fetchMovieVideos = async (movieId) => {
  try {
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          movieVideosMock.find((movieVideo) => movieVideo.id === movieId)
        );
      }, 1000);
    });

    const response = await request;

    return response.results;
  } catch {
    console.error("Error fetching movie videos");
  }
};

export default fetchMovieVideos;
