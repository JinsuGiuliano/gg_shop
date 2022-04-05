import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './profile.photo.styles';

const ProfilePhoto = ({ }) => {

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(linkUrl);

  return(
  <MenuItemContainer
    size={200}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl='../../assets/userRandom.svg'
    />
    <ContentContainer className='content'>
      <ContentTitle>UserName</ContentTitle>
      <ContentSubtitle>email@gmail.com</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)}

export default ProfilePhoto;