import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"

const useSearchMovie = (query) => {

    const getSearchMovie = async (query) => {

        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false`,
            API_OPTIONS
            );
        const json = await data.json();
        console.log("yesssss",json);
        
    }
}

export default useSearchMovie;