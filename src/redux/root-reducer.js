import { combineReducers } from 'redux';
import {userReducer} from './user/user.reducer';
import {directoryReducer} from './directory/directory.reducer';
import { themeReducer } from './theme/theme.reducer';
import { valuesReducer } from './values/values.reducer';


 export const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  theme: themeReducer,
  values: valuesReducer
});
