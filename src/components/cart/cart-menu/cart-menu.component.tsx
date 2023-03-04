import React, { FC } from 'react';
import { useSelector } from 'react-redux';
// import Chat from '../utils/chat/chat.component';
import CartIcon from '../../cart/cart-icon/cart-icon.component';
import CartDropdown from '../../cart/cart-dropdown/cart-dropdown.component';
import WishListIcon from '../../wishlist/wishlist-icon/wish-icon.component';
import WhishListDropdown from '../../wishlist/wishlist-dropdown/wishlist-dropdown.component';

/// SELECTORS
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectWishHidden } from '../../../redux/wishlist/wish.selectors';
import { selectCurrentTheme } from '../../../redux/theme/theme.selector';
import {
  CartMenuContainer,
} from './cart-menu.styles';
import DarkThemeToggle from '../../../redux/theme/darkThemeToogle';


const CartMenu = () => {

  const hiddenCart = useSelector(selectCartHidden);
  const hiddenWishlist = useSelector(selectWishHidden)
  return (
  <CartMenuContainer>
    <CartIcon cart/>
    <CartIcon />
    <DarkThemeToggle />
    {!hiddenCart && <CartDropdown />}
    {!hiddenWishlist && <WhishListDropdown/> }
  </CartMenuContainer>
);}

export default CartMenu;
