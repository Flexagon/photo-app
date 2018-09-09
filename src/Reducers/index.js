import { combineReducers } from 'redux';
import { imagesReducer } from './images';

const rootReducer = combineReducers({
  data: imagesReducer,
});

export { rootReducer as default };
