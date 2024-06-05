import { Movie } from "./Movie";

export function MovieList({ movies, setMovies, onhandleSelect }) {
  return (
    <ul className="list list-movie">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onhandleSelect={onhandleSelect}
        ></Movie>
      ))}
    </ul>
  );
}
