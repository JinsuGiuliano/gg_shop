import React, { FC } from 'react';
import { useSelector,useDispatch } from 'react-redux';
/// ACTIONS
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
import { toggleWishHidden } from '../../../redux/wishlist/wish.actions'
/// SELECTORS
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';
import { selectWishItemsCount } from '../../../redux/wishlist/wish.selectors'
import { selectCurrentTheme } from '../../../redux/theme/theme.selector';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectWishHidden } from '../../../redux/wishlist/wish.selectors';

import {
  CartContainer,
  ShoppingIcon,
  WishIcon,
  ItemCountContainer
} from './cart-icon.styles';

type CartType = {
  cart?: boolean;
}

const CartIcon: FC<CartType> = ({cart}) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount)
  const wishItemCount = useSelector(selectWishItemsCount)
  const darkThemeEnabled = useSelector(selectCurrentTheme);

  return(
    <div>
    {
      cart?
      <CartContainer onClick={()=>dispatch(toggleCartHidden())} cart={true}>
         <ShoppingIcon color={`${darkThemeEnabled ? 'white': 'black'}`} />
         <ItemCountContainer>{itemCount == 0? "" : itemCount}</ItemCountContainer>
      </CartContainer>
      :
      <CartContainer onClick={()=>dispatch(toggleWishHidden())} cart={false}>
        <WishIcon color={`${darkThemeEnabled ? 'white': 'black'}`} />
        <ItemCountContainer>{wishItemCount== 0? "" : wishItemCount }</ItemCountContainer>
      </CartContainer>
    }
    </div>
  );
}

export default CartIcon;
