import WishActionTypes from './wish.types';

export const toggleWishHidden = () => ({
  type: WishActionTypes.TOGGLE_WISH_LIST_HIDDEN
});

export const addItemToWishList = item => {
  console.log('Wish Action: ', item);
  return({
  type: WishActionTypes.ADD_ITEM_WISH,
  payload: item
  });
}

export const removeItem = item => ({
  type: WishActionTypes.REMOVE_ITEM_WISH,
  payload: item
});

export const clearItemFromWish = item => ({
  type: WishActionTypes.CLEAR_ITEM_FROM_WISH_LIST,
  payload: item
});

export const clearWish = () => ({
  type: WishActionTypes.CLEAR_WISH_LIST
});

export const saveWishlistForUserStart = (wishlist,user) => ({
  type: WishActionTypes.SAVE_WISH_LIST_START,
  payload: {wishlist,user}
})

export const saveWishlistForUserSuccess = (wishlist) => ({
  type: WishActionTypes.SAVE_WISH_LIST_SUCCESS,
  payload: wishlist
})

export const saveWishlistForUserFailure = (error) => ({
  type: WishActionTypes.SAVE_WISH_LIST_FAILURE,
  payload: error
})