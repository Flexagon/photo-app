export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

const API_KEY = '8c3fbb523f56915d91b90df43410e00bbe03eff259a671396d7f6b4ca1f6ce2a';

export const getImages = (word = 'surf') => (dispatch) => {
  dispatch({
    type: GET_PHOTOS_REQUEST,
    payload: [],
    word,
  });

  fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${word}&client_id=${API_KEY}`)
    .then(res => res.json())
    .then((data) => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: data.results,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PHOTOS_FAIL,
        payload: error,
      });
    });
};
