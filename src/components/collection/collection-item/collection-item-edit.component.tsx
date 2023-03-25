import React, { useState, FormEvent, ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemStart } from '../../../redux/shop/shop.actions';
import FormInput from '../../utils/form-input/form-input.component';
import { ButtonsBarContainer } from '../../signInUp/sign-in/sign-in.styles';
import CustomButton from '../../utils/custom-button/custom-button.component';
import { CategoryItem } from '../../../redux/shop/shop.types';


type CollectionItemEditType = {
  item: CategoryItem;
}

const CollectionItemEdit: FC<CollectionItemEditType> = ({ item }) => {

  const { name, price, imageUrl, category, id, description } = item;
  const [prodId, setProdId] = useState(id);
  const [prodName, setProdName] = useState(name);
  const [prodPrice, setProdPrice] = useState(price);
  const [prodImageUrl, setProdImageUrl] = useState(imageUrl);
  const [prodCategory, setProdCategory] = useState(category);
  const [prodDescription, setProdDescription] = useState(description);
  const dispatch = useDispatch()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itemUpdated = {
      id: prodId,
      name: prodName,
      price: prodPrice,
      imageUrl: prodImageUrl,
      category: prodCategory,
      description: prodDescription
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
    <form onSubmit={handleSubmit} >

      { }
      <img alt="" className='image' src={imageUrl[0]} />
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
