import { CartItem, CART_ACTION_TYPES } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';
import { CartActions, toggleCartHidden, addItem, removeItem, clearItemFromCart, clearCart } from './cart.actions';
import { AnyAction } from 'redux';

export type CartState = {
  readonly hidden: boolean;
  readonly cartItems: CartItem[];
}

export const CART_INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction ) => {


  if(toggleCartHidden.match(action)){
      return {
        ...state,
        hidden: !state.hidden
      };
  }

  if(addItem.match(action)){
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
  }

  if(removeItem.match(action)){
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
  }

  if(clearItemFromCart.match(action)){
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
  }

  if(clearCart.match(action)){
      return {
        ...state,
        cartItems: []
      }
  }

    return {...state};
  }