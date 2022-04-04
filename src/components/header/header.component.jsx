import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
/// COMPONENTS
import Chat from '../chat/chat.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import DarkThemeToggle from '../../redux/theme/darkThemeToogle';
/// SELECTORS
import { selectCartHidden } from '../../redux/cart/cart.selectors';
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

const Header = ({ currentUser, hidden, signOutStart }) => {

  const darkThemeEnabled = useSelector(selectCurrentTheme);


  return(
  <Fragment>
    <Chat
      username={currentUser}
    />
    <HeaderContainer>
      <LogoContainer to='/' >
         <LogoComponent  hovercolor='#000000a3' color={`${darkThemeEnabled ? 'white': 'black'}`} /> 
         <h2 to='/shop'>...find your way!</h2>
      </LogoContainer>
      <OptionsContainer>
      
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      
        <DarkThemeToggle/>
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
    <Outlet/>
  </Fragment>
);}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
