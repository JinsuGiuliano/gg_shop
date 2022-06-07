import React, { FC } from 'react';
import { connect, useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../../redux/cart/cart.actions';
import { CartItem } from '../../../redux/cart/cart.types';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

type CheckOutCompType = {
  cartItem: CartItem;
  clearItem: Function;
  addItem: Function;
  removeItem: Function;
}
const CheckoutItem: FC<CheckOutCompType> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={ () => dispatch(removeItem(cartItem)) }>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={ () => dispatch(addItem(cartItem)) }>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={ () => dispatch(clearItemFromCart(cartItem)) }>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};


export default CheckoutItem;
