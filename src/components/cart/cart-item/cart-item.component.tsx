import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../../redux/cart/cart.actions';
import { CartItem as CartItemType } from '../../../redux/cart/cart.types';
import { selectCurrentTheme } from '../../../redux/theme/theme.selector';
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  RemoveItemButton
} from './cart-item.styles';

type CartItemComponentType = {
  item: CartItemType
}

const CartItem: FC<CartItemComponentType> = ({ item }) => {
  const dispatch = useDispatch();
  const darkThemeEnabled = useSelector(selectCurrentTheme);
  
  const { imageUrl, price, name, quantity } = item;
  return(
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
    <RemoveItemButton onClick={()=> dispatch(removeItem(item))} color={`${darkThemeEnabled ? 'white': 'black'}`} />
  </CartItemContainer>
);}

export default CartItem;
