import React from "react";

import SearchMovie from "../SearchMovie/SearchMovie";
import FilterByGenre from "../FilterByGenre/FilterByGenre";

const Filters = () => {
  return (
    <div className="filters-container">
      <SearchMovie />
      <FilterByGenre />
    </div>
  );
};

export default Filters;
