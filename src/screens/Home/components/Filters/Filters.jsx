import SearchMovie from "../SearchMovie/SearchMovie";
import FilterByGenre from "../FilterByGenre/FilterByGenre";

const Filters = ({ filterByGenres }) => {
  return (
    <div className="filters-container">
      <SearchMovie />
      <FilterByGenre filterByGenres={filterByGenres} />
    </div>
  );
};

export default Filters;
