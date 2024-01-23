import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';
import MovieList from './MovieList';
import Header from './Header';

const SearchPage = () => {
    const { movieName }= useParams();
    const [searchQuery, setSearchQuery] = useState();
    const [ searchedMovies, setSearchedMovies] = useState(null);

    useEffect( () => {
        setSearchQuery(searchQuery);
        movieSearchResult();
    }, [movieName]);

    const movieSearchResult = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false`,
            API_OPTIONS
            );
        const json = await data.json();
        setSearchedMovies(json.results);
    }

  return (
    <>
        <Header redirect="" />
        <div className='w-screen h-screen bg-black px-8 py-8 pt-32'>
            <div className='text-3xl'>
                    <div className='text-white pl-5 font-semibold'>
                        Search Result For {movieName} :
                    </div>
                    <div className='pt-8'>
                        <MovieList title={``} movies={searchedMovies} />
                    </div>
                    
            </div>
        </div>
        
    </>
    
  )
}

export default SearchPage
