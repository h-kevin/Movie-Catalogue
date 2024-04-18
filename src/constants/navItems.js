import routes from "./routes";

const navItems = {
  [`${routes.ROOT}${routes.HOME}`]: "Home",
  [`${routes.ROOT}${routes.FAVORITES}`]: "Favorites",
  [`${routes.ROOT}${routes.POPULAR_MOVIES}`]: "Popular Movies",
  [`${routes.ROOT}${routes.TOP_MOVIES}`]: "Top Movies",
};

export default navItems;
