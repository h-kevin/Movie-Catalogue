import React from "react";

import FavoriteIcon from "../../../../components/common/FavoriteIcon/FavoriteIcon";

const TitleGroup = ({ movieTitle, isFavorite, toggleFavorite, movieId }) => (
  <div className="title-group-container">
    <h1>{movieTitle}</h1>
    <FavoriteIcon
      isFavorite={isFavorite}
      toggleFavorite={() => toggleFavorite(movieId)}
    />
  </div>
);

export default TitleGroup;
