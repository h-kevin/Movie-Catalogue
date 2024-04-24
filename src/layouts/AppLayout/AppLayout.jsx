import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import routes from "../../constants/routes";
import LeftNavigation from "./components/LeftNavigation/LeftNavigation";

const AppLayout = ({ favoriteMoviesContext }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === routes.ROOT) {
      navigate(`${routes.ROOT}${routes.HOME}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="app-layout-container">
      <LeftNavigation />
      <Outlet context={favoriteMoviesContext} />
    </div>
  );
};

export default AppLayout;
