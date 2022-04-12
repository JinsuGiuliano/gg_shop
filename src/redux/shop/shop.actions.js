import ShopActionTypes from './shop.types';

//FETCH COLLECTIONS ACTIONS
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});


//UPDATE ACTIONS
export const updateItemStart = (item, itemUpdated) => ({
  type: ShopActionTypes.ITEM_UPDATE_START,
  payload: {item, itemUpdated}
});

export const updateItemSuccess = item => ({
  type: ShopActionTypes.ITEM_UPDATE_SUCCESS,
  payload: item
});
export const updateItemFailure = errorMessage => ({
  type: ShopActionTypes.ITEM_UPDATE_FAILURE,
  payload: errorMessage
});

