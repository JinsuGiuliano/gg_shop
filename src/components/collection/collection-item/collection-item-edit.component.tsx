import React,{useState, FormEvent, ChangeEvent, FC} from 'react';
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
import { User } from '../../../redux/user/user.types';
import { CategoryItem } from '../../../redux/shop/shop.types';
import { selectCurrentUser } from '../../../redux/user/user.selectors';


type CollectionItemEditType = {
    item:CategoryItem;
}

const CollectionItemEdit: FC<CollectionItemEditType> = ({ item}) => {
  
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itemUpdated = { 
      id:prodId,
      name:prodName, 
      price:prodPrice, 
      imageUrl:prodImageUrl, 
      category:prodCategory 
    }
    dispatch(updateItemStart(itemUpdated))
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    switch(name){
      case 'name':setProdName(value);break;
      case 'price':setProdPrice(parseInt(value)); break;
      case 'ImageUrl':setProdImageUrl(value); break;
      case 'category':setProdCategory(value); break;
      default: break;
    }
  
  };

  return (
          <form onSubmit={handleSubmit} >
            <img alt="" className='image' src={imageUrl} />
            <FormInput
              name='name'
              type='text'
              label='name'
              onChange={handleChange}
              value={prodName}
              required
            />
            <FormInput
              name='price'
              type='text'
              label='price'
              onChange={handleChange}
              value={prodPrice}
              required
            />
            <FormInput
              name='ImageUrl'
              type='text'
              label='Image Url'
              onChange={handleChange}
              value={prodImageUrl}
              required
            />
            <FormInput
              name='category'
              type='text'
              label='Category'
              onChange={handleChange}
              value={prodCategory}
              required
            />
            <ButtonsBarContainer>
              <CustomButton type='submit'> Guardar </CustomButton>
            </ButtonsBarContainer>
          </form>
  );
};


export default CollectionItemEdit;
