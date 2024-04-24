import HeartFilled from "../../../assets/icons/heart-filled.svg?react";

const FavoriteIcon = ({ isFavorite, toggleFavorite, customClass }) => {
  const clickHandler = (event) => {
    event.stopPropagation();
    toggleFavorite();
  };

  return (
    <div
      className={`favorite-icon-container ${customClass || ""}`}
      onClick={clickHandler}
    >
      {isFavorite ? (
        <HeartFilled className="filled" />
      ) : (
        <HeartFilled className="outlined" />
      )}
    </div>
  );
};

export default FavoriteIcon;
