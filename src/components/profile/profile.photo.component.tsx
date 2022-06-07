import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './profile.photo.styles';

const ProfilePhoto = () => {

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate('/');

  return(
  <MenuItemContainer
    size={150}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
    />
    <ContentContainer className='content'>
      <ContentTitle>UserName</ContentTitle>
      <ContentSubtitle>email@gmail.com</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)}

export default ProfilePhoto;