import React from "react";
import { Link } from "react-router-dom";

import LoadingIndicator from "../../../../components/common/LoadingIndicator/LoadingIndicator";
import NoContent from "../../../../components/common/NoContent/NoContent";

const Dropdown = ({ items, loading, isOpen }) => {
  let itemsList = items?.map((item, index) => (
    <Link key={index} className="movie-list-item" to={item.path}>
      <span>{item.name}</span>
    </Link>
  ));

  if (loading) {
    itemsList = <LoadingIndicator customClass="movie-list-item loading" />;
  } else if (!items?.length) {
    itemsList = <NoContent customClass="movie-list-item no-results" />;
  }

  return (
    <div className={`dropdown-container ${isOpen ? "open" : ""}`}>
      {itemsList}
    </div>
  );
};

export default Dropdown;
