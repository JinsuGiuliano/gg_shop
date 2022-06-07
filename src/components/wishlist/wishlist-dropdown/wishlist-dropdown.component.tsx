import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WishItem from '../wishlist-item/wishlist-item.component';
import { selectWishItems } from '../../../redux/wishlist/wish.selectors';
import { saveWishlistForUserStart } from '../../../redux/wishlist/wish.actions';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from '../../cart/cart-dropdown/cart-dropdown.styles';

const WhishListDropdown = () => {
  const dispatch = useDispatch()
  const wishList = useSelector(selectWishItems);
  const currentUser = useSelector(selectCurrentUser) 

  return(
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        wishList.length ? 
        (
          wishList.map(wishItem => (
            <WishItem key={wishItem.id} item={wishItem} />))
        ) 
        : 
        (
          <EmptyMessageContainer>Your wishlist is empty</EmptyMessageContainer>
        )
    }

    </CartItemsContainer>
      <CartDropdownButton> SHARE IT &#9788;</CartDropdownButton>
      <CartDropdownButton 
      onClick={ () => currentUser && dispatch(saveWishlistForUserStart(wishList, currentUser))}> 
      SAVE IT &#9734;
      </CartDropdownButton> 
  </CartDropdownContainer>
);}

export default WhishListDropdown;