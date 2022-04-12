import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToWishList} from '../../../redux/wishlist/wish.actions';
import { addItem } from '../../../redux/cart/cart.actions';
import { updateItemStart } from '../../../redux/shop/shop.actions';
import FormInput from '../../utils/form-input/form-input.component';
import { ButtonsBarContainer } from '../../signInUp/sign-in/sign-in.styles';
import CustomButton from '../../utils/custom-button/custom-button.component';
import { selectCurrentTheme } from '../../../redux/theme/theme.selector';

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

const CollectionItem = ({ item, currentUser}) => {
  
  const { name, price, imageUrl, category, id } = item;
  const [prodId, setProdId] = useState(id);
  const [prodName, setProdName] = useState(name);
  const [prodPrice, setProdPrice] = useState(price);
  const [prodImageUrl, setProdImageUrl] = useState(imageUrl);
  const [prodCategory, setProdCategory] = useState(category);
  const [onEdit, setonEdit] = useState(false);

  const dispatch = useDispatch()
  const darkThemeEnabled = useSelector(selectCurrentTheme);

  const handleSubmit = async event => {
    event.preventDefault();
    const itemUpdated = { 
      id:prodId,
      name:prodName, 
      price:prodPrice, 
      imageUrl:prodImageUrl, 
      category:prodCategory 
    }
    dispatch(updateItemStart(item, itemUpdated))
  };

  const handleChange = event => {
    const { value, name } = event.target;
    switch(name){
      case 'name':setProdName(value);break;
      case 'price':setProdPrice(value); break;
      case 'ImageUrl':setProdImageUrl(value); break;
      case 'category':setProdCategory(value); break;
      default: break;
    }
  
  };

  return (
    <div>
    {
      currentUser?
          <EditIcon onClick={() => setonEdit(!onEdit)} hovercolor='#5b5b5b' color={`${darkThemeEnabled ? 'white': 'black'}`}/>
    :
          null
    }
    {
      !onEdit?
      (
        <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <ButtonsContainer>
          <AddCartIcon 
          onClick={() => 
           dispatch(addItem(item))
          //  console.log('Cart Icon')
          }/>
          <WishIcon 
          onClick={() => 
            dispatch(addItemToWishList(item))
             //console.log('Wish Icon')
          }/>
          <ShareIcon />
        </ButtonsContainer>
      
      </CollectionItemContainer>
      ):(
          <form onSubmit={handleSubmit} >
            <img alt="" className='image' src={imageUrl} />
            <FormInput
              name='name'
              type='text'
              label='name'
              handleChange={handleChange}
              value={prodName}
              required
            />
            <FormInput
              name='price'
              type='text'
              label='price'
              handleChange={handleChange}
              value={prodPrice}
              required
            />
            <FormInput
              name='ImageUrl'
              type='text'
              label='Image Url'
              handleChange={handleChange}
              value={prodImageUrl}
              required
            />
            <FormInput
              name='category'
              type='text'
              label='Category'
              handleChange={handleChange}
              value={prodCategory}
              required
            />
            <ButtonsBarContainer>
              <CustomButton type='submit'> Guardar </CustomButton>
            </ButtonsBarContainer>
          </form>
      )

    }
    </div>
  );
};


export default CollectionItem;
