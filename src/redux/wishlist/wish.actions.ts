import { WISH_ACTION_TYPES } from './wish.types';
import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducers/reducers.utils';
import { Category, CategoryItem } from '../shop/shop.types';
import { WishlistItem } from './wish.types';
import { User } from '../user/user.types';


export type ToggleWishHidden = Action<WISH_ACTION_TYPES.TOGGLE_WISH_LIST_HIDDEN>;
export type AddItemToWishList = ActionWithPayload<WISH_ACTION_TYPES.ADD_ITEM_WISH, CategoryItem>;
export type RemoveItem = ActionWithPayload<WISH_ACTION_TYPES.REMOVE_ITEM_WISH, WishlistItem>
export type ClearItemFromWish = ActionWithPayload<WISH_ACTION_TYPES.CLEAR_ITEM_FROM_WISH_LIST, WishlistItem>;
export type  ClearWish = Action<WISH_ACTION_TYPES.CLEAR_WISH_LIST>;
export type SaveWishlistForUserStart = ActionWithPayload<WISH_ACTION_TYPES.SAVE_WISH_LIST_START, ListAndUser>
export type SaveWishlistForUserSuccess = ActionWithPayload<WISH_ACTION_TYPES.SAVE_WISH_LIST_SUCCESS, WishlistItem[]>;
export type SaveWishlistForUserFailure = ActionWithPayload<WISH_ACTION_TYPES.SAVE_WISH_LIST_FAILURE, Error>;

export type WishlistActions = ToggleWishHidden | AddItemToWishList | RemoveItem | ClearItemFromWish | 
ClearWish | SaveWishlistForUserStart | SaveWishlistForUserSuccess | SaveWishlistForUserFailure

export const toggleWishHidden = withMatcher(
  (): ToggleWishHidden => 
createAction(
  WISH_ACTION_TYPES.TOGGLE_WISH_LIST_HIDDEN
  ));

export const addItemToWishList = withMatcher(
  (item: CategoryItem): AddItemToWishList => 
  createAction(
    WISH_ACTION_TYPES.ADD_ITEM_WISH,
    item
  ));

export const removeItem = withMatcher(
  (item: WishlistItem ): RemoveItem => 
  createAction(
    WISH_ACTION_TYPES.REMOVE_ITEM_WISH,
    item
  ));

export const clearItemFromWish = withMatcher(
  (item: WishlistItem): ClearItemFromWish => 
  createAction(
    WISH_ACTION_TYPES.CLEAR_ITEM_FROM_WISH_LIST,
    item
  ));

export const clearWish = withMatcher(
  (): ClearWish  => 
  createAction(
    WISH_ACTION_TYPES.CLEAR_WISH_LIST
  ));


export type ListAndUser =  {
  wishlist: WishlistItem[];
  user: User | null;
}
export const saveWishlistForUserStart = withMatcher((wishlist:WishlistItem[],user: User ) => 
  createAction(
    WISH_ACTION_TYPES.SAVE_WISH_LIST_START,
    {wishlist,user}
  ));

export const saveWishlistForUserSuccess = withMatcher(
  (wishlist: WishlistItem[]): SaveWishlistForUserSuccess => 
  createAction(
    WISH_ACTION_TYPES.SAVE_WISH_LIST_SUCCESS,
    wishlist
  ));

export const saveWishlistForUserFailure = withMatcher(
  (error: Error): SaveWishlistForUserFailure => 
  createAction(
    WISH_ACTION_TYPES.SAVE_WISH_LIST_FAILURE,
    error
  ));



