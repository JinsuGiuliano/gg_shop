import { AnyAction } from 'redux';
import { WishlistActions, toggleWishHidden, addItemToWishList, removeItem, clearItemFromWish, 
         clearWish, saveWishlistForUserSuccess, saveWishlistForUserFailure } from './wish.actions';
import { WishlistItem } from './wish.types';
import { addItemToWish, removeItemFromWish } from './wish.utils';

export type WishListState = {
  readonly hidden: boolean,
  readonly wishItems: WishlistItem[],
  readonly message:string
}

export const WISH_LIST_INITIAL_STATE: WishListState = {
  hidden: true,
  wishItems: [],
  message:''
};

export const wishListReducer = (state = WISH_LIST_INITIAL_STATE, action: AnyAction) => {

  if(toggleWishHidden.match(action)){
      return {
        ...state,
        hidden: !state.hidden
      };
  }
    if(addItemToWishList.match(action)){
      return {
        ...state,
        wishItems: addItemToWish(state.wishItems, action.payload)
      };
    }
    // case WISH_ACTION_TYPES.REMOVE_ITEM_WISH:
    if(removeItem.match(action)){
      return {
        ...state,
        wishItems: removeItemFromWish(state.wishItems, action.payload)
      };
    }
    if(clearItemFromWish.match(action)){
      return {
        ...state,
        wishItems: state.wishItems.filter(
          wishItem => wishItem.id !== action.payload.id
        )
      };
    }
    if(clearWish.match(action)){
      return {
        ...state,
        wishItems: []
      };
    }
    if(saveWishlistForUserSuccess.match(action)){
      return {
        ...state,
        message: action.payload
      };
    }
    if(saveWishlistForUserFailure.match(action)){
      return {
        ...state,
        message: action.payload
      };
    }
      return {...state};
  }