import WishActionTypes from './wish.types';
import { addItemToWish, removeItemFromWish } from './wish.utils';

const INITIAL_STATE = {
  hidden: true,
  wishItems: [],
  message:''
};

export const wishListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishActionTypes.TOGGLE_WISH_LIST_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case WishActionTypes.ADD_ITEM_WISH:
      return {
        ...state,
        wishItems: addItemToWish(state.wishItems, action.payload)
      };
    case WishActionTypes.REMOVE_ITEM_WISH:
      return {
        ...state,
        wishItems: removeItemFromWish(state.wishItems, action.payload)
      };
    case WishActionTypes.CLEAR_ITEM_FROM_WISH_LIST:
      return {
        ...state,
        wishItems: state.wishItems.filter(
          wishItem => wishItem.id !== action.payload.id
        )
      };
    case WishActionTypes.CLEAR_WISH_LIST:
      return {
        ...state,
        wishItems: []
      };
    case WishActionTypes.SAVE_WISH_LIST_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    case WishActionTypes.SAVE_WISH_LIST_FAILURE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};