import React, { useState, FC, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToWishList } from '../../../redux/wishlist/wish.actions';
import { addItem } from '../../../redux/cart/cart.actions';
import { updateItemStart } from '../../../redux/shop/shop.actions';
import FormInput from '../../utils/form-input/form-input.component';
import { ButtonsBarContainer } from '../../signInUp/sign-in/sign-in.styles';
import CustomButton from '../../utils/custom-button/custom-button.component';
import { selectCurrentTheme } from '../../../redux/theme/theme.selector';
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
  ShareIcon
} from './collection-styles.styles';
import CollectionItemEdit from './collection-item-edit.component';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { selectWishItems } from '../../../redux/wishlist/wish.selectors';
type CollectionItemType = {
  item: CategoryItem;
}

const CollectionItem: FC<CollectionItemType> = ({ item }) => {

  const { name, price, imageUrl, category, id } = item;
  const [prodId, setProdId] = useState(id);
  const [prodName, setProdName] = useState(name);
  const [prodPrice, setProdPrice] = useState(price);
  const [prodImageUrl, setProdImageUrl] = useState(imageUrl);
  const [prodCategory, setProdCategory] = useState(category);
  const [onEdit, setonEdit] = useState(false);

  const dispatch = useDispatch()
  const darkThemeEnabled = useSelector(selectCurrentTheme);
  const currentUser = useSelector(selectCurrentUser)

  const cartItems = useSelector(selectCartItems);
  const wishList = useSelector(selectWishItems);

  const isoncart = cartItems.filter(it => it.id == item.id).length == 1

  const issaved = wishList.filter(it => it.id == item.id).length == 1

  console.log("isoncart: ", isoncart)
  console.log("issaved: ", issaved)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itemUpdated = {
      id: prodId,
      name: prodName,
      price: prodPrice,
      imageUrl: prodImageUrl,
      category: prodCategory
    }
    dispatch(updateItemStart(itemUpdated))
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    switch (name) {
      case 'name': setProdName(value); break;
      case 'price': setProdPrice(parseInt(value)); break;
      case 'ImageUrl': setProdImageUrl([...prodImageUrl, value]); break;
      case 'category': setProdCategory(value); break;
      default: break;
    }

  };

  return (
    <div>
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
                    <BackgroundImage className='image' imageUrl={e} />
                  </CollectionItemContainer>
                </SplideSlide>
              ))
            }
          </SplideTrack>
          <div className="splide__arrows" />
        </div>
      </Splide>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <ButtonsContainer>
          <AddCartIcon
            isoncart={isoncart}
            onClick={() =>
              dispatch(addItem(item))
            } />
          <WishIcon
            issaved={issaved}
            onClick={() =>
              dispatch(addItemToWishList(item))
              //console.log('Wish Icon')
            } />
          <ShareIcon />
        </ButtonsContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>

    </div>
  );
};


export default CollectionItem;
