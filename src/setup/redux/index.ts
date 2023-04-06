import { combineReducers } from 'redux';
import counterReducer from './counter';
import VideosReducer from '../../state/Videos/VideosReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  videos: VideosReducer,
});

export default rootReducer;
