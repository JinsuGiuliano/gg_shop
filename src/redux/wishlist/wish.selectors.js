import { createSelector } from 'reselect';

const selectwishlist = state => state.wishlist;

export const selectWishItems = createSelector(
  [selectwishlist],
  wishlist => wishlist.wishItems
);

export const selectWishMessage = createSelector(
  [selectwishlist],
  wishlist => wishlist.message
);

export const selectWishHidden = createSelector(
  [selectwishlist],
  wishlist => wishlist.hidden
);

export const selectWishItemsCount = createSelector(
  [selectWishItems],
  wishItems =>
  wishItems.reduce(
      (accumalatedQuantity, wishItem) =>
        accumalatedQuantity + wishItem.quantity,
      0
    )
);

export const selectWishTotal = createSelector(
  [selectWishItems],
  wishItems =>
  wishItems.reduce(
      (accumalatedQuantity, wishItem) =>
        accumalatedQuantity + wishItem.quantity * wishItem.price,
      0
    )
);
