import { Base_Url } from '../../utilities/API/BaseURl';
import { api_key } from '../../utilities/API/Key';
import { ActionTypes } from './ActionTypes';
export const fetchAllMovies = (currentPage, movieType) => {
    return (dispatch) => {
      fetch(`${Base_Url}/${movieType}?api_key=${api_key}&language=en-US&page=${currentPage}`)
        .then(resp => resp.json())
        .then(res => dispatch({
          type: ActionTypes.FETCH_MOVIES,
          payload: res
        }))
        .catch(er => console.log('fetch movie error: ', er));
    };
  };