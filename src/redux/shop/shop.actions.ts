import { SHOP_ACTION_TYPES, Category, CategoryItem } from './shop.types';
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducers/reducers.utils'
import { create } from 'domain';

//FETCH COLLECTIONS ACTIONS
export type FetchCollectionsStart = Action<SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START>;
export type FetchCollectionsSuccess = ActionWithPayload<SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS, Category[]>;
export type FetchCollectionsFailure = ActionWithPayload<SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE, Error>;
//UPDATE ACTIONS
export type UpdateItemStart = ActionWithPayload<SHOP_ACTION_TYPES.ITEM_UPDATE_START, CategoryItem>;
export type UpdateItemSuccess = ActionWithPayload<SHOP_ACTION_TYPES.ITEM_UPDATE_SUCCESS, CategoryItem>;
export type UpdateItemFailure = ActionWithPayload<SHOP_ACTION_TYPES.ITEM_UPDATE_FAILURE, Error>;

//TOOGLE PREVIEW
export type TooglePreview = ActionWithPayload<SHOP_ACTION_TYPES.TOOGLE_PREVIEW, CategoryItem>;


export const tooglePreview = withMatcher(
  (item: CategoryItem): TooglePreview =>
    createAction(
      SHOP_ACTION_TYPES.TOOGLE_PREVIEW,
      item
    ));

export const fetchCollectionsStart = withMatcher((): FetchCollectionsStart =>
  createAction(SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START));


export const fetchCollectionsSuccess = withMatcher((collections: Category[]): FetchCollectionsSuccess =>
  createAction(
    SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
    collections
  ));

export const fetchCollectionsFailure = withMatcher((errorMessage: Error) =>
  createAction(
    SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE,
    errorMessage
  ));

export const updateItemStart = withMatcher(
  (item: CategoryItem): UpdateItemStart =>
    createAction(
      SHOP_ACTION_TYPES.ITEM_UPDATE_START,
      item
    ));

export const updateItemSuccess = withMatcher(
  (item: CategoryItem): UpdateItemSuccess =>
    createAction(
      SHOP_ACTION_TYPES.ITEM_UPDATE_SUCCESS,
      item
    ));

export const updateItemFailure = withMatcher((errorMessage: Error): UpdateItemFailure =>
  createAction(
    SHOP_ACTION_TYPES.ITEM_UPDATE_FAILURE,
    errorMessage
  ));


export type ShopActions = FetchCollectionsStart | FetchCollectionsSuccess | FetchCollectionsFailure |
  UpdateItemStart | UpdateItemSuccess | UpdateItemFailure