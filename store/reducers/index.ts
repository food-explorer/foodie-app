import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export { rootReducer };
