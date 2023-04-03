import styled from 'styled-components';
//import CustomButton from '../../utils/custom-button/custom-button.component';
import { ReactComponent as EditIconSVG } from '../../../assets/edit.svg';
import { ReactComponent as HeartIconSVG } from '../../../assets/heart.svg'
import { ReactComponent as AddCartIconSVG } from '../../../assets/shopping-bag.svg'
import { ReactComponent as ShareIconSVG } from '../../../assets/share.svg'
import { ReactComponent as CloseIconSVG } from '../../../assets/close.svg'

import { backgroundColor, textColor } from '../../../redux/theme/styles.const';
import { CategoryItem } from '../../../redux/shop/shop.types';

export const ItemPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  /* padding-top: 2%; Location of the box */
  left: 20%;
  top: 10%;
  width: 800px; /* Full width */
  height: 800px; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
   @media screen and (max-width: 800px) {
    left: 0%;
    top: 10%;
    padding:0px;
    flex-direction: column;
    width:100%; /* Full width */
    height: 100%; /* Full height */
    overflow:auto;
  }
`

export const CloseContainer = styled.div`
  position: fixed;
  top:12%;
  left:0px;
  background-color:${backgroundColor};
  padding:10px;
  border-radius:0px 10px 10px 0px;
  z-index:999999;
  cursor: pointer;
`

export const CloseTagIcon = styled(CloseIconSVG)`
  width:20px;
  height:20px;
   fill: ${textColor};
`

export const ItemPreviewImage = styled.div`
  background-color: ${backgroundColor};
  /* margin: auto; */
  padding: 20px;
  width: 400px;
   @media screen and (max-width: 800px) {
      position: relative;
      padding: 0px;
      margin: 0px;
      width: 100%;
   }
`
export const ItemPreviewDetails = styled.div`
  background-color: ${backgroundColor};
  /* margin: auto; */
  padding: 20px;
  width: 400px;
  color: ${textColor};
     @media screen and (max-width: 800px) {
      padding: 5px;
      width: 100%;
      height:100%;
   }
`

export const CollectionItemContainer = styled.div`
display: flex;
    width: 100%;
    align-items: center;
    margin:5px;
     &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
`;

type BackgroundImageType = {
  imageUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageType>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  padding: 0px 20px 0px 20px !important;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  text-align: right;
`;
type AddCartIconContainerType = {
  isoncart: boolean;
}

export const AddCartIcon = styled(AddCartIconSVG) <AddCartIconContainerType>`
  height:20px;
  width:20px;
  display: flex;
  cursor: pointer;
  fill: ${({ isoncart }) => isoncart.toString() ? `#ec8632` : `${textColor}`}; 

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
  
`

type WishIconContainerType = {
  issaved: boolean;
}

export const WishIcon = styled(HeartIconSVG) <WishIconContainerType>`
  height:20px;
  width:20px;
  cursor: pointer;
  display: flex;
  fill: ${({ issaved }) => issaved.toString() ? `#ec4832` : `${textColor}`}; 
`

export const ShareIcon = styled(ShareIconSVG)`  
  width:20px;  
  height:20px;
  display: flex;
  cursor: pointer;
   fill: ${textColor};
`



export const ButtonsContainer = styled.div`
    width: 100%;
    padding: 10px 5px 10px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    bottom: 20px;
`;


export const NameInputContainer = styled.input`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceInputContainer = styled.input`
  width: 10%;
  text-align: right;
`;

export const EditIcon = styled(EditIconSVG)`
  width: 24px;
  height: 24px;
  &:hover {
      opacity: 0.8;
    }
  & path {
      fill: ${({ color }) => color};
    }
  &:hover path {
      fill: ${({ hovercolor }) => hovercolor};
    }
`;


