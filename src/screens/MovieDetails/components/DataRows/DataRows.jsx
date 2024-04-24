const DataRows = ({
  overview,
  rating,
  runTime,
  releaseDate,
  genres,
  countriesOfOrigin,
  language,
  director,
  cast,
  writer,
  productionCompanies,
}) => (
  <div className="data-rows-container">
    <p className="plot">{overview}</p>
    <p className="info">Rating: {rating}</p>
    <p className="info">Runtime: {runTime}</p>
    <p className="info">Release Date: {releaseDate}</p>
    <p className="info">Genres: {genres}</p>
    <p className="info">Country of Origin: {countriesOfOrigin}</p>
    <p className="info">Language: {language}</p>
    <p className="info">Director: {director}</p>
    <p className="info">Cast: {cast}</p>
    <p className="info">Writer: {writer}</p>
    <p className="info production-companies">
      {`Production:\n${productionCompanies}`}
    </p>
  </div>
);

export default DataRows;
