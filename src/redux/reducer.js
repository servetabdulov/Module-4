const initState = {
  movies: [],
  listMovies: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_MOVIE":
      const newMovie = state.movies.find(
        (item) => item.imdbID === action.payload.id
      );
      const listMovies = [...state.listMovies, { ...newMovie }];
      return { ...state, listMovies };

    case "REMOVE_TO_MOVIE":
      const filterMovie = state.listMovies.filter(
        (item) => item.imdbID !== action.payload.id
      );
      return {
        ...state,
        listMovies: filterMovie
      };

    case "ADD_MOVIES":
      return {
        ...state,
        movies: [...action.payload.movies],
      };
    default:
      return state;
  }
};

export default reducer;
