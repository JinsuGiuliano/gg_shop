import React ,{ useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
  EditIcon
} from './menu-item.styles';
import FormInput from '../../utils/form-input/form-input.component';
import { ButtonsBarContainer } from '../../signInUp/sign-in/sign-in.styles';
import CustomButton from '../../utils/custom-button/custom-button.component';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
const MenuItem = ({ title, imageUrl, size,  gallery ,id}) => {


  const [onEdit, setOnEdit] = useState(false)
  const [projectTitle, setProjectTitle] = useState(title)
  const [mainImageUrl, setMainImageUrl] = useState(imageUrl)
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate('/');
  //const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const handleChange = event => {
    const { value, name } = event.target;
    switch(name){
      case 'title':setProjectTitle(value);break;
      case 'mainImageUrl':setMainImageUrl(value); break;
      default: break;
    }
  
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // const itemUpdated = { 
    //   id:prodId,
    //   name:prodName, 
    //   price:prodPrice, 
    //   imageUrl:prodImageUrl, 
    //   category:prodCategory 
    // }
    //dispatch(updateItemStart(item, itemUpdated))
  };

  return(
    
    <MenuItemContainer
    size={size}
    onClick={onNavigateHandler}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
   
    {
      onEdit ?
      <ContentContainer className='content'>
      
      <form onSubmit={handleSubmit} >
      <img alt="" className='image' src={imageUrl} />
      <FormInput
        name='title'
        type='text'
        label='Title'
        handleChange={handleChange}
        value={projectTitle}
        required
      />
      <FormInput
        name='mainImageUrl'
        type='text'
        label='Main Image'
        handleChange={handleChange}
        value={mainImageUrl}
        required
      />
      <ButtonsBarContainer>
        <CustomButton type='submit'> Guardar </CustomButton>
      </ButtonsBarContainer>
    </form>
      </ContentContainer>
      :
        <ContentContainer className='content'>
          <ContentTitle>{title.toUpperCase()}</ContentTitle>
          <ContentSubtitle><a href={imageUrl} data-lightbox={`gallery-mf-${id}`}><span>KNOW MORE</span></a></ContentSubtitle>
        </ContentContainer>
     }
     
    {
      gallery && 
      gallery.map((el,idx) => 
        (
          <a key={idx} href={el} data-lightbox={`gallery-mf-${id}`}></a>
        ))
    }
  </MenuItemContainer>
)}

export default MenuItem;
