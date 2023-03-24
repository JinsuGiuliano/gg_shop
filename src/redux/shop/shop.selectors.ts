import { createSelector } from 'reselect';
import { ShopState } from './shop.reducer';
import { RootState } from '../store';

const selectShop = (state: RootState): ShopState => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key: string) => collections[Object.keys(collections).indexOf(key)]) : []
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    (collections) => {
      return (collections ? collections.find(e => e.title === collectionUrlParam) : null)
    }
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export const selectItemPreview = createSelector(
  [selectShop],
  (shop) => shop.itemPreview
)

