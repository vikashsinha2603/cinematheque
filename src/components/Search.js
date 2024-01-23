import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const showGptSearch = useSelector( (store) => store.gpt.showGptSearch);
    const [isExpanded, setIsExpanded] = useState(false);
    const searchRef = useRef();
    const navigate = useNavigate();

    const handleMovieSearch = async () => {
        const query = searchRef.current.value;
        navigate(`/movies/${query}`);
    }

    const handleFocus = () => {
        setIsExpanded(true);
    }
    const handleBlur = () => {
        setIsExpanded(false);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // Trigger the search when the Enter key is pressed
          handleMovieSearch();
        }
      };

  return (
    !showGptSearch &&
    <div className="relative flex justify-center items-center ">
      <input 
            className={`h-10 py-1 pl-3 transition-width duration-700 outline-none text-base font-medium ${isExpanded ? "w-60 pr-10 rounded-full" :" w-32 pr-4 rounded-lg " }`}
            type="text"
            placeholder={`${isExpanded ? "Search for a Movie.." : "Search.."}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            ref={searchRef}
             />

        <div className={`absolute right-4 mt-[3px] transition-opacity duration-700 ${isExpanded ? "opacity-70" : "opacity-0"}`}>
            <FaSearch className='cursor-pointer' onClick={handleMovieSearch} /> 
        </div>
    </div>
  )
}

export default Search
