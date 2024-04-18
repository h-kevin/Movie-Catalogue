export const routeParts = {
  DETAILS: "details",
};

const routes = {
  ROOT: "/",
  HOME: "home",
  FAVORITES: "favorites",
  POPULAR_MOVIES: "popular-movies",
  TOP_MOVIES: "top-movies",
  MOVIE_DETAILS: `${routeParts.DETAILS}/:movieId`,
  NOT_FOUND: "*",
};

export default routes;
