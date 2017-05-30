import {FETCH_DATA_SUCCESS,FETCHING_DATA,FETCHING_DATA_FAILURE} from '../actions/types';

const DEFAULT_STATE = {
    data : [],
    isFetching: false,
    dataFetched: false,
    error: false,
};
export default (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case FETCHING_DATA:
        return {
            ...state,
            isFetching: true,
            data: []
        }
        case FETCH_DATA_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isFetching: false
      
        }
        case FETCHING_DATA_FAILURE :
        return {
            ...state,
            isFetching: false,
            error: true
        }
        default:
         return state
    }
}