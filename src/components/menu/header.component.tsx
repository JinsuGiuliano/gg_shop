import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
/// COMPONENTS
// import Chat from '../utils/chat/chat.component';
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';
import WhishListDropdown from '../wishlist/wishlist-dropdown/wishlist-dropdown.component';
import DarkThemeToggle from '../../redux/theme/darkThemeToogle';
/// SELECTORS
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectWishHidden } from '../../redux/wishlist/wish.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCurrentTheme } from '../../redux/theme/theme.selector';
/// ACTIONS
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  LogoComponent
} from './header.styles';

const Header = () => {

  const dispatch = useDispatch(); 
  const darkThemeEnabled = useSelector(selectCurrentTheme);
  const currentUser = useSelector(selectCurrentUser);
  const hiddenCart = useSelector(selectCartHidden);
  const hiddenWishlist = useSelector(selectWishHidden)
//   <Chat
//   username={currentUser}
// />

  return(
  <Fragment>
 
    <HeaderContainer>
      <LogoContainer to='/' >
         <LogoComponent  hovercolor='#000000a3' color={`${darkThemeEnabled ? 'white': 'black'}`} /> 
      </LogoContainer>
      <OptionsContainer>
      
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={()=>dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon cart/>
        <CartIcon />
        <DarkThemeToggle/>
      </OptionsContainer>
      {hiddenCart ? null : <CartDropdown />}
      {hiddenWishlist? null : <WhishListDropdown/> }
    </HeaderContainer>
    <Outlet/>
  </Fragment>
);}



export default Header;
