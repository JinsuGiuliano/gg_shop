import styled from 'styled-components';
//import CustomButton from '../../utils/custom-button/custom-button.component';
import { ReactComponent as EditIconSVG } from '../../../assets/edit.svg';
import {ReactComponent as HeartIconSVG} from '../../../assets/heart.svg'
import {ReactComponent as AddCartIconSVG} from '../../../assets/shopping-bag.svg'
import {ReactComponent as ShareIconSVG} from '../../../assets/share.svg'

import { backgroundColor, textColor } from '../../../redux/theme/styles.const';




export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    div {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;


export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;


export const AddCartIcon = styled(AddCartIconSVG)`
  height:40px;
  width:40px;
  display: flex;
  cursor: pointer;
  fill: #fff;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));  

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
  
`

export const ShareIcon = styled(ShareIconSVG)`  
  width:40px;  
  height:40px;
  display: flex;
  cursor: pointer;
  fill: #fff;
  filter: drop-shadow(10px 10px 10px rgb(0 0 0 / 0.4));  
`

export const WishIcon = styled(HeartIconSVG)`
  height:40px;
  width:40px;
  cursor: pointer;
  display: flex;
  fill: #fff;
  filter: drop-shadow(10px 10px 10px rgb(0 0 0 / 0.4));  
`

export const ButtonsContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 5px 25px 5px 25px;
    display: none;
    justify-content: space-around;
    top: 75%;
    position:absolute;
    border: none;
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
      fill: ${({color}) => color };
    }
  &:hover path {
      fill: ${({hovercolor}) => hovercolor};
    }
`;