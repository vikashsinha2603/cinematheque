import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import MovieList from './MovieList';
import { addSelectedGenre, addSelectedGenreMovies } from '../utils/moviesSlice';
import useGenresMovies from '../hooks/useGenresMovies';

const MovieGenres = () => {

    const scrollContainer = React.useRef();
    const genres = useSelector( (store) => store.movies.genres);
    let selectedGenre = useSelector( (store) => store.movies.selectedGenre)
    const movies = useSelector( (store) => store.movies)

    const dispatch = useDispatch();

    const handleGenreClick = (e) => {
      selectedGenre = {id: e.target.id, name: e.target.textContent}
      dispatch(addSelectedGenre(selectedGenre));
    }

    const leftScroll = () => {
        const scrollCont = scrollContainer.current;
        let width = scrollCont.clientWidth/3;
        
        scrollCont.scrollLeft -= width;
      }
      const rightScroll = () => {
        const scrollCont = scrollContainer.current;
        let width = scrollCont.clientWidth/3;
        scrollCont.scrollLeft += width;
      }

  return (
    <>
      <div className='w-11/12 ml-4 mt-4 gap-4 rounded-full '>
        <div className='text-white font-md text-3xl'>
        Genres in Mind ??
        </div>
        <div className=" mx-auto w-auto flex items-center gap-4 scroll-smooth overflow-x-hidden ml-8 mt-4 " ref={scrollContainer}>
            <div className='flex '>
                <button className='absolute rounded-full left-16 l h-8 w-8 -mt-3 bg-gray-200 flex justify-center items-center hover:bg-gray-300' onClick={leftScroll}><IoIosArrowRoundBack /></button>
                <button className="absolute rounded-full right-16 h-8 w-8 -mt-3 bg-gray-200 flex justify-center items-center hover:bg-gray-300" onClick={rightScroll}><IoIosArrowRoundForward /></button>
            </div>
            <div className='flex mt-2 whitespace-nowrap -ml-3'>
                {genres?.map( (genre) => (
                <div className='text-black border rounded-2xl bg-white h-8 px-3 mx-1 text-center font-medium text-xl bg-gradient-to-r from-blue-400 to-green-300 hover:opacity-50 transition-opacity' onClick={handleGenreClick} id={genre.id} key={genre.id}>{genre.name}</div>
            ))}
            </div>
            
        </div>
    </div>

    <MovieList title={`${selectedGenre.name} Movies`} movies={movies.selectedGenresMovies} />

    
    </>
    
  )
}

export default MovieGenres;