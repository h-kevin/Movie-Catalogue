import React from "react";
import dayjs from "dayjs";
import { useNavigate, useOutletContext } from "react-router-dom";

import useMoviesData from "../../hooks/useMoviesData";
import LoadingIndicator from "../../../../components/common/LoadingIndicator/LoadingIndicator";
import NoContent from "../../../../components/common/NoContent/NoContent";
import MovieCard from "../../../../components/common/MovieCard/MovieCard";
import imageUrlParts from "../../../../constants/imageUrlParts";
import { routeParts } from "../../../../constants/routes";

const FavoriteMovies = () => {
  const navigate = useNavigate();

  const { favoriteMovieIds, toggleFavorite } = useOutletContext();

  const { moviesData, loading } = useMoviesData(favoriteMovieIds);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!moviesData?.length) {
    return <NoContent message="No favorite movies yet!" />;
  }

  return (
    <div className="favorite-movies-container">
      {moviesData?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date ? dayjs(movie.release_date).year() : ""}
          genres={movie.genres?.map((genre) => genre.name)}
          rating={movie.vote_average?.toFixed(1)}
          image={`${imageUrlParts.BASE_URL}${movie.poster_path}`}
          isFavorite={favoriteMovieIds?.includes(movie.id)}
          toggleFavorite={() => toggleFavorite(movie.id)}
          onClick={() => navigate(`${routeParts.DETAILS}/${movie.id}`)}
        />
      ))}
    </div>
  );
};

export default FavoriteMovies;
