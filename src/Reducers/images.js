import {
  GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL, TOGGLE_IMAGE,
} from '../Actions/imagesAction';

export const initialState = {
  word: 'surf',
  images: [],
  isFetching: false,
  error: '',
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        images: action.payload,
        word: action.word,
        isFetching: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        images: action.payload,
        isFetching: false,
      };
    case GET_PHOTOS_FAIL:
      return {
        ...state,
        error: 'Something wrong... Please, reload page!',
        isFetching: false,
      };
    case TOGGLE_IMAGE:
      const newImages = state.images.map(image => (
        (image.id === action.id) ? { ...image, liked_by_user: !image.liked_by_user } : image
      ));

      window.localStorage.setItem('images',
        JSON.stringify(newImages.filter(image => image.liked_by_user === true)));

      return {
        ...state,
        images: newImages,
      };
    default:
      return state;
  }
};
