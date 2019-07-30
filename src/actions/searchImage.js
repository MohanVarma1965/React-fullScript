import axios from 'axios';
import imagesRetrieved from "./imagesRetrieved";

export function searchImageAction(value) {
    return async (dispatch) => {
        let response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: value, count:10, orientation : "landscape" },
            headers: {
                Authorization: 'Client-ID a4cae17560f8a82e6a07ebf4b77f0d2a244bb049f43e7ad15058fc1f5634988d'
            }
        })
        dispatch(imagesRetrieved(response.data.results))
    };
}

/*
export function searchImageAction(value) {
    return async (dispatch) => {
        await fetch(`https://api.unsplash.com/search/photos?query=${value}&count=10&orientation=landscape`, {
            headers: {
                Authorization: 'Client-ID a4cae17560f8a82e6a07ebf4b77f0d2a244bb049f43e7ad15058fc1f5634988d'
            }
        })
            .then((response) => {
                dispatch(imagesRetrieved(response.data.results));
            })
            .catch(error => {
                /!* dispatch(searchImageCallError(error));*!/
                //console.log(error);
            });
    };
}
*/
