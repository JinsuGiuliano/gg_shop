import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
/// COMPONENTS
// import Chat from '../utils/chat/chat.component';
/// SELECTORS
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCurrentTheme } from '../../redux/theme/theme.selector';
/// ACTIONS
import { signOutStart } from '../../redux/user/user.actions';

import {
  OptionsContainer,
  OptionLink,
  LogoComponent
} from './header.styles';
import CartMenu from '../cart/cart-menu/cart-menu.component';
import Shortcuts from './shortcuts/shortcuts.components';
import { WelcomeMessage } from './shortcuts/shortcuts.styles';

const Header = () => {

  const dispatch = useDispatch(); 
  const darkThemeEnabled = useSelector(selectCurrentTheme);
  const currentUser = useSelector(selectCurrentUser);

  const location = useLocation();
    console.log(location)

  return(
  <Fragment>
          <OptionsContainer >
        <OptionLink to='/'> <LogoComponent hovercolor='#000000a3' color={`${darkThemeEnabled ? 'white' : 'black'}`} /> </OptionLink>
        {
          location.pathname == "/" ?
          <WelcomeMessage>WELCOME TO OUR SHOP</WelcomeMessage>
            :
            <Shortcuts />
        }
			      <CartMenu/>
        </OptionsContainer>
    <Outlet/>
  </Fragment>
);}



export default Header;
