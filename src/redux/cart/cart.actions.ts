import {CART_ACTION_TYPES, CartItem} from './cart.types';
import { CategoryItem } from '../shop/shop.types';
import {createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducers/reducers.utils';

export type ToggleCartHidden = Action<CART_ACTION_TYPES.TOGGLE_CART_HIDDEN>; 
export type AddItem =  ActionWithPayload<CART_ACTION_TYPES.ADD_ITEM, CartItem>;
export type RemoveItem = ActionWithPayload<CART_ACTION_TYPES.REMOVE_ITEM, CartItem>;
export type ClearItemFromCart = ActionWithPayload<CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART, CartItem>;
export type ClearCart = Action<CART_ACTION_TYPES.CLEAR_CART>;

export const toggleCartHidden = withMatcher(
  (): ToggleCartHidden => 
  createAction(
    CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
  ));

export const addItem = withMatcher(
  (item: CartItem): AddItem => 
  createAction(
    CART_ACTION_TYPES.ADD_ITEM,
    item
  ))
 
export const removeItem = withMatcher(
  (item: CartItem): RemoveItem  => 
  createAction(
    CART_ACTION_TYPES.REMOVE_ITEM,
    item
  ));

export const clearItemFromCart = withMatcher(
  (item: CartItem): ClearItemFromCart  => 
  createAction(
    CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART,
    item
  ));

export const clearCart = withMatcher(
  (): ClearCart => 
  createAction(
    CART_ACTION_TYPES.CLEAR_CART
  ));


export type CartActions = ToggleCartHidden | AddItem | RemoveItem | ClearItemFromCart | ClearCart