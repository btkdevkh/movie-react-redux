import { 
  MOVIE_LIST_REQUEST, 
  MOVIE_LIST_SUCCESS, 
  MOVIE_LIST_FAIL,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_SUCCESS,
  MOVIE_DELETE_FAIL,
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL
} from '../constants/movieConstants';

export const movieListReducer = (state = { movies: [], moviesFiltered: [], moviesFilterCategories: [] }, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { 
        ...state,
        loading: true, 
      }
    case MOVIE_LIST_SUCCESS:
      return { 
        ...state,
        loading: false, 
        movies: action.payload,
        moviesFiltered: state.moviesFilterCategories.length === 0 ? action.payload : [...new Set(state.moviesFilterCategories)]
      }
    case MOVIE_LIST_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    case MOVIE_DELETE_REQUEST:
      return { 
        ...state,
        loading: true
      }
    case MOVIE_DELETE_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        movies: state.movies.filter(movie => movie.id !== action.payload),
        moviesFiltered: state.moviesFiltered.filter(movie => movie.id !== action.payload) 
      }
    case MOVIE_DELETE_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    case MOVIE_SEARCH_REQUEST:
      return { 
        ...state,
        loading: true
      }
    case MOVIE_SEARCH_SUCCESS:
      const items = action.payload.items;
      const keyword = action.payload.keyword;
      const isBool = action.payload.isBool;

      //Search Filter
      const filteredSearch = items.filter(x => 
        x.title[0].toLowerCase().includes(keyword)
      );

      // Checkbox Filter
      const filteredCheckbox = items.filter(x => 
        x.category.toLowerCase() === keyword
      );

      if(!keyword) {
        return {
          ...state,
          loading: false,
          moviesFilterCategories: []
        } 
      } else if(isBool) {
        return {
          ...state,
          loading: false,
          moviesFilterCategories: [...state.moviesFilterCategories, ...filteredSearch, ...filteredCheckbox]
        } 
      } else {
        return {
          ...state,
          loading: false,
          moviesFilterCategories: state.moviesFilterCategories.filter(x => x.category.toLowerCase() !== keyword)
        } 
      }
    case MOVIE_SEARCH_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    default:
      return state
  }
}
