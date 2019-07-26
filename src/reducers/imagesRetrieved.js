import * as types from '../config/constants';
import initialState from './initialState';


export default function imagesRetrievedReducer(state = initialState.ajaxCallsInProgress, action) {
    if (action.type == types.IMAGES_RETRIEVED) {
        return Object.assign({}, state, {imagesRetrieved: action.imagesRetrieved})
    } else if (action.type == types.IMAGES_RETRIEVED_ERROR){
        return "";
    }


    return state;
}
