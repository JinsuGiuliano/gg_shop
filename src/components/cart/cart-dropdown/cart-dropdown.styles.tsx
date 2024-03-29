import styled from 'styled-components';
import CustomButton from '../../utils/custom-button/custom-button.component';
import { backgroundColor, textColor } from '../../../redux/theme/styles.const';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${textColor};
  background-color: ${backgroundColor};
  top: 90px;
  right: 40px;
  z-index: 9999999;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
