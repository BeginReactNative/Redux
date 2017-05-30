import {FETCHING_DATA,FETCH_DATA_SUCCESS,FETCHING_DATA_FAILURE} from './types';
import api from '../api/api';

export function getData() {
    return {
        type: FETCHING_DATA,
   
    }
}
export function getDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    }
}
export function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}
export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    api()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}