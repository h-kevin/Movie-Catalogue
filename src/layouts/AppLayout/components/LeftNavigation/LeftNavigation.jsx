import Logo from "../../../../assets/images/logo.svg?react";
import NavigationLink from "../NavigationLink/NavigationLink";
import HomeFilled from "../../../../assets/icons/home-filled.svg?react";
import HomeOutlined from "../../../../assets/icons/home-outlined.svg?react";
import HeartFilled from "../../../../assets/icons/heart-filled.svg?react";
import HeartOutlined from "../../../../assets/icons/heart-outlined.svg?react";
import BoxOfficeFilled from "../../../../assets/icons/box-office-filled.svg?react";
import BoxOfficeOutlined from "../../../../assets/icons/box-office-outlined.svg?react";
import TopMoviesFilled from "../../../../assets/icons/top-movies-filled.svg?react";
import TopMoviesOutlined from "../../../../assets/icons/top-movies-outlined.svg?react";
import routes from "../../../../constants/routes";

const LeftNavigation = () => {
  return (
    <nav className="left-navigation-container">
      <div className="logo">
        <Logo />
      </div>
      <ul className="links">
        <NavigationLink
          to={`${routes.ROOT}${routes.HOME}`}
          iconFilled={<HomeFilled />}
          iconOutlined={<HomeOutlined />}
        />
        <NavigationLink
          to={`${routes.ROOT}${routes.FAVORITES}`}
          iconFilled={<HeartFilled />}
          iconOutlined={<HeartOutlined />}
        />
        <NavigationLink
          to={`${routes.ROOT}${routes.POPULAR_MOVIES}`}
          iconFilled={<BoxOfficeFilled />}
          iconOutlined={<BoxOfficeOutlined />}
        />
        <NavigationLink
          to={`${routes.ROOT}${routes.TOP_MOVIES}`}
          iconFilled={<TopMoviesFilled />}
          iconOutlined={<TopMoviesOutlined />}
        />
      </ul>
    </nav>
  );
};

export default LeftNavigation;
