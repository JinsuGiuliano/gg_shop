import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../../redux/wishlist/wish.actions';
import { selectCurrentTheme } from '../../../redux/theme/theme.selector';
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  RemoveItemButton
} from '../../cart/cart-item/cart-item.styles';

const WishItem = ({ item }) => {
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

export default WishItem;
