import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import FormInput from '../form-input/form-input.component';
import { ButtonsBarContainer } from '../sign-in/sign-in.styles';
import CustomButton from '../custom-button/custom-button.component';
import { updateItem } from '../../firebase/shop/updateItem';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  EditIcon
} from './collection-styles.styles';

const CollectionItem = ({ item, addItem, currentUser}) => {
  

  const { name, price, imageUrl, category } = item;
  const [prodName, setProdName] = useState(name);
  const [prodPrice, setProdPrice] = useState(price);
  const [prodImageUrl, setprodImageUrl] = useState(imageUrl);
  const [onEdit, setonEdit] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    updateItem(item,{prodName,prodPrice,prodImageUrl}, category)
  };

  const handleChange = event => {
    const { value, name } = event.target;
    switch(name){
      case 'name':
                  setProdName(value);
                  break;
      case 'price':
                  setProdPrice(value);
                  break;
      case 'ImageUrl':
                  setprodImageUrl(value)
                  break;
      default:
              break;
    }
     
  };
  return (
    <div>
    {
      currentUser?
          <EditIcon onClick={() => setonEdit(!onEdit)} />
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
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
          
        </AddButton>
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
          
            <ButtonsBarContainer>
              <CustomButton type='submit'> Guardar </CustomButton>
            </ButtonsBarContainer>
          </form>
      )

    }
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
  )(CollectionItem);
