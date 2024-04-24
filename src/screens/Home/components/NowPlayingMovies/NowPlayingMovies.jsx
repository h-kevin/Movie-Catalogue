import dayjs from "dayjs";
import { useNavigate, useOutletContext } from "react-router-dom";

import LoadingIndicator from "../../../../components/common/LoadingIndicator/LoadingIndicator";
import NoContent from "../../../../components/common/NoContent/NoContent";
import MovieCard from "../../../../components/common/MovieCard/MovieCard";
import movieGenres from "../../../../constants/movieGenres";
import imageUrlParts from "../../../../constants/imageUrlParts";
import { routeParts } from "../../../../constants/routes";

const NowPlayingMovies = ({ nowPlayingMovies, loading }) => {
  const navigate = useNavigate();

  const { favoriteMovieIds, toggleFavorite } = useOutletContext();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!nowPlayingMovies?.length) {
    return <NoContent message="No movies to show!" />;
  }

  return (
    <div className="now-playing-movies-container">
      {nowPlayingMovies?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date ? dayjs(movie.release_date).year() : ""}
          genres={movie.genre_ids?.map(
            (id) => movieGenres.find((genre) => genre.id === id)?.name
          )}
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

export default NowPlayingMovies;
