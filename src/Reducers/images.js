import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL } from '../Actions/imagesAction';

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
    default:
      return state;
  }
};
