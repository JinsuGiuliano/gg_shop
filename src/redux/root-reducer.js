import { combineReducers } from 'redux';
import {userReducer} from './user/user.reducer';
import {cartReducer} from './cart/cart.reducer';
import {directoryReducer} from './directory/directory.reducer';
import {shopReducer} from './shop/shop.reducer';
import { themeReducer } from './theme/theme.reducer';


 export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  theme: themeReducer
});
