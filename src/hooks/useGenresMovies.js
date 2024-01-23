import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSelectedGenreMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGenresMovies = () => {

    const dispatch = useDispatch();

    //const selectedGenresMovies = useSelector( (store) => store.movies.selectedGenresMovies);
    const genreId = useSelector( (store) => store.movies.selectedGenre)

    const getSelectedGenreMovies = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_AUTHORIZATION_URL}&with_genres=${genreId.id}`,
            API_OPTIONS
          );
          const json = await data.json();
          dispatch(addSelectedGenreMovies(json.results))
    };

    useEffect( () => {
        getSelectedGenreMovies();
    }, [genreId]);

}

export default useGenresMovies;