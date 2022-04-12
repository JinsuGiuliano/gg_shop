import ShopActionTypes from './shop.types';
const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: undefined
};

// const UpdateItem = (keyValue, newKey, newValue) =>
// {
//   keyValue.Key = newKey;
//   keyValue.Value = newValue; 
// }

export const shopReducer = (state = INITIAL_STATE, action) => {
  const { type , payload } = action;
  switch (type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      console.log(payload)
      return {
        ...state,
        isFetching: false,
        collections: payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
    case ShopActionTypes.ITEM_UPDATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    case ShopActionTypes.ITEM_UPDATE_SUCCESS:
        state.collections.map( collection => collection.title === payload.category ? 
                              collection.items.map( item => item.id == payload.id ?
                                Object.assign( item, payload ) : item )
                                : collection )
        return {
          ...state,
          isFetching: false,
        };
      
    default:
      return state;
  }
};
