import styled from 'styled-components';
import {ReactComponent as DeleteIcon} from '../../../assets/close.svg'
export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const RemoveItemButton = styled(DeleteIcon)`
  height:20px;
  width:20px;
  display: flex;
  color: transparent;
  cursor: pointer;
  path {
    fill: ${({color}) => color }; 
  }
  &:hover path {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));  
  }
`