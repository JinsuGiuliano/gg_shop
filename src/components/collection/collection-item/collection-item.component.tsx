import React,{useState, FC, FormEvent, ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToWishList} from '../../../redux/wishlist/wish.actions';
import { addItem } from '../../../redux/cart/cart.actions';
import { updateItemStart } from '../../../redux/shop/shop.actions';
import FormInput from '../../utils/form-input/form-input.component';
import { ButtonsBarContainer } from '../../signInUp/sign-in/sign-in.styles';
import CustomButton from '../../utils/custom-button/custom-button.component';
import { selectCurrentTheme } from '../../../redux/theme/theme.selector';
import { CategoryItem } from '../../../redux/shop/shop.types';

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

type CollectionItemType = {
  item: CategoryItem;
}

const CollectionItem: FC<CollectionItemType> = ({item}) => {
  
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
          }/>
          <WishIcon 
          onClick={() => 
            dispatch(addItemToWishList(item))
             //console.log('Wish Icon')
          }/>
          <ShareIcon />
        </ButtonsContainer>
      
      </CollectionItemContainer>
      ):
          <CollectionItemEdit item={item}/>

    }
    </div>
  );
};


export default CollectionItem;
