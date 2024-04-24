import { Link } from "react-router-dom";

import routes from "../../constants/routes";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Page not found</p>
      <Link draggable={false} to={`${routes.ROOT}${routes.HOME}`}>
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
