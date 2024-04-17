import React from "react";

import SearchOutlined from "../../../../assets/icons/search-outlined.svg?react";

const SearchMovie = () => {
  return (
    <div className="search-movie-container">
      <input type="text" placeholder="Find movie" />
      <button>
        <SearchOutlined />
      </button>
    </div>
  );
};

export default SearchMovie;
