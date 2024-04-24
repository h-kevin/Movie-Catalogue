import { NavLink } from "react-router-dom";

import Tooltip from "../../../../components/common/Tooltip/Tooltip";
import navItems from "../../../../constants/navItems";

const NavigationLink = ({ to, iconFilled, iconOutlined }) => {
  return (
    <li className="link-container">
      <Tooltip text={navItems[to]}>
        <NavLink to={to}>
          {({ isActive }) => (isActive ? iconFilled : iconOutlined)}
        </NavLink>
      </Tooltip>
    </li>
  );
};

export default NavigationLink;
