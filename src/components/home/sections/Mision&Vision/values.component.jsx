import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './values.styles';

const ValueItem = ({ title, imageUrl, text }) => {

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate('/');
  return(
  <MenuItemContainer
    onClick={onNavigateHandler}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
    <ContentTitle>{title.toUpperCase()}</ContentTitle>
    </ContentContainer>
    <ContentSubtitle>{text}</ContentSubtitle>
  </MenuItemContainer>
)}

export default ValueItem;
