

export const addItemToWish = (WishItems, WishItemToAdd) => {
  const existingWishItem = WishItems.find(
    WishItem => WishItem.id === WishItemToAdd.id
  );

  if (existingWishItem) {
    return WishItems.map(WishItem =>
      WishItem.id === WishItemToAdd.id
        ? { ...WishItem, quantity: WishItem.quantity + 1 }
        : WishItem
    );
  }

  return [...WishItems, { ...WishItemToAdd, quantity: 1 }];
};

export const removeItemFromWish = (WishItems, WishItemToRemove) => {
  const existingWishItem = WishItems.find(
    WishItem => WishItem.id === WishItemToRemove.id
  );

  if (existingWishItem.quantity === 1) {
    return WishItems.filter(WishItem => WishItem.id !== WishItemToRemove.id);
  }

  return WishItems.map(WishItem =>
    WishItem.id === WishItemToRemove.id
      ? { ...WishItem, quantity: WishItem.quantity - 1 }
      : WishItem
  );
};
