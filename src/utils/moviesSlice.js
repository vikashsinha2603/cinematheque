import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    upcomingMovies: null,
    trendingMovies: null,
    genres: null,
    selectedGenresMovies: null,
    selectedGenre: {id: "28", name: "Action"},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addGenres: (state, action) => {
      state.genres = action.payload;;
    },
    addSelectedGenreMovies: (state, action) => {
      state.selectedGenresMovies = action.payload;
    },
    addSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTrendingMovies, addGenres, addSelectedGenreMovies, addSelectedGenre } =
  moviesSlice.actions;

export default moviesSlice.reducer;
