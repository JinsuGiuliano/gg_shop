import { AnyAction } from 'redux';
import { ShopActions, fetchCollectionsStart, fetchCollectionsSuccess,fetchCollectionsFailure,  
          updateItemSuccess, updateItemFailure } from './shop.actions';
import { Category, SHOP_ACTION_TYPES } from './shop.types';

export type ShopState = {
  readonly collections: Category[],
  readonly isFetching: boolean,
  readonly errorMessage: Error | null
}
export const SHOP_INITIAL_STATE: ShopState = {
  collections: [],
  isFetching: false,
  errorMessage: null
};

export const shopReducer = (state = SHOP_INITIAL_STATE, action: AnyAction) => {

  if(fetchCollectionsStart.match(action)){
      return {
        ...state,
        isFetching: true
      };
  }

    if(fetchCollectionsSuccess.match(action)){
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };}

    if(fetchCollectionsFailure.match(action) || updateItemFailure.match(action) ){
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    }

    if(updateItemSuccess.match(action)){
        state.collections.map( collection => collection.title === action.payload.category ? 
                              collection.items.map( item => item.id == action.payload.id ?
                                Object.assign( item, action.payload ) : item )
                                : collection )
        return {
          ...state,
          isFetching: false,
        };}

      return {...state}
  }
