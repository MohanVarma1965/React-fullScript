import * as types from '../config/constants'

export default function imagesRetrieved(imagesRetrieved) {
    return {
        type: types.IMAGES_RETRIEVED,
        imagesRetrieved
    };
}