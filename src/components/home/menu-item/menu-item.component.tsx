import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ ...otherSectionProps }) => {
  const {title, imageUrl, size,  linkUrl } = otherSectionProps
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(linkUrl);
  return(
  <MenuItemContainer
    size={size}
    onClick={onNavigateHandler}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)}

export default MenuItem;
