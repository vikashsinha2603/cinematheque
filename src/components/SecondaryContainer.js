import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieGenres from "./GenreSection";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
        <div className="bg-black w-screen mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>

          <MovieGenres />
          {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
        </div>
    )
  );
};
export default SecondaryContainer;
