import Tooltip from "../Tooltip/Tooltip";
import StarFilled from "../../../assets/icons/star-filled.svg?react";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

const MovieCard = ({
  title,
  year,
  genres,
  rating,
  image,
  isFavorite,
  toggleFavorite,
  onClick,
}) => (
  <div className="movie-card-container" onClick={onClick}>
    <div className="image" style={{ backgroundImage: `url("${image}")` }}>
      <FavoriteIcon isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
    </div>
    <div className="meta">
      <div className="title-and-rating">
        <Tooltip text={title} customClassName="tooltip-for-title">
          <h3 className="title">{title}</h3>
        </Tooltip>
        {rating && (
          <p className="rating">
            <StarFilled />
            {rating}
          </p>
        )}
      </div>
      <p className="genres">{genres?.join(" • ")}</p>
      <p className="year">{year}</p>
    </div>
  </div>
);

export default MovieCard;
