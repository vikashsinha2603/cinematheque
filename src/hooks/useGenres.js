import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addGenres } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGenres = () => {

    const dispatch = useDispatch();
    const genres = useSelector( (store) => store.movies.genres);
    
    const getGenres = async() => {
        const data = await fetch(
            "https://api.themoviedb.org/3/genre/movie/list",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addGenres(json.genres));
    };
    
    useEffect( () => {
        !genres && getGenres();
    }, []);
};

export default useGenres;