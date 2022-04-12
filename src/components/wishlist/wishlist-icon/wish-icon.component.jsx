import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleWishHidden } from '../../../redux/wishlist/wish.actions';
import { selectWishItemsCount } from '../../../redux/wishlist/wish.selectors';
import { selectCurrentTheme } from '../../../redux/theme/theme.selector';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from '../../cart/cart-icon/cart-icon.styles';

const WishListIcon = () => {
  
  const itemCount = useSelector(selectWishItemsCount)
  const darkThemeEnabled = useSelector(selectCurrentTheme);
  const dispatch = useDispatch(); 

  return(
    <CartContainer onClick={dispatch(toggleWishHidden())}>
      <ShoppingIcon color={`${darkThemeEnabled ? 'white': 'black'}`} />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
}



export default WishListIcon;
