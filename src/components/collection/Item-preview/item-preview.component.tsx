import React, { useState, FC, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToWishList } from '../../../redux/wishlist/wish.actions';
import { addItem } from '../../../redux/cart/cart.actions';
import { CategoryItem } from '../../../redux/shop/shop.types';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  ButtonsContainer,
  AddCartIcon,
  WishIcon,
  EditIcon,
  ShareIcon,
  ItemPreviewContainer,
  ItemPreviewImage,
  ItemPreviewDetails
} from './item-preview.styles';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { selectWishItems } from '../../../redux/wishlist/wish.selectors';
import { tooglePreview } from '../../../redux/shop/shop.actions';
import ActionComponent from './actions.component';

type CollectionItemType = {
  item: CategoryItem;
}

const ItemPreview: FC<CollectionItemType> = ({ item }) => {

  const { name, price, imageUrl, category, id } = item;

  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const cartItems = useSelector(selectCartItems);
  const wishList = useSelector(selectWishItems);

  const isoncart = cartItems.filter(it => it.id == item.id).length == 1

  const issaved = wishList.filter(it => it.id == item.id).length == 1

  const closePreviewFunc = () => {
    dispatch(tooglePreview({} as CategoryItem))
  }

  return (
    <ItemPreviewContainer >
      <ItemPreviewImage>
        <div onClick={closePreviewFunc}> X </div>
        <Splide
          options={{
            width: '100%',
            padding: '0px',
            gap: '1em',
            rewind: true,
            arrows: false
          }}
          hasTrack={false} aria-label="...">
          <div style={{ position: "relative" }}>
            <SplideTrack>
              {
                imageUrl &&
                imageUrl.map((e, key) => (
                  <SplideSlide key={key}>
                    <CollectionItemContainer >
                      <img src={e} width="400px" />
                    </CollectionItemContainer>
                  </SplideSlide>
                ))
              }
            </SplideTrack>
            <div className="splide__arrows" />
          </div>
        </Splide>

      </ItemPreviewImage>
      <ItemPreviewDetails>
        <ActionComponent item={item} />
        <h2>{item.name}</h2>{" "}<h2>$ {item.price}</h2>
        <br /><br />
        <span style={{ fontSize: '18px' }}>{item.description}</span>
        <br />
      </ItemPreviewDetails>
    </ItemPreviewContainer>
  );
};


export default ItemPreview;
