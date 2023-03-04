import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../../assets/shopping-bag.svg';
import { ReactComponent as WishIconSVG } from '../../../assets/heart.svg';
import { ReactComponent as ThemeIconSVG  } from '../../../assets/moonSun.svg';

type CartContainerType = {
  cart?: boolean
}

export const CartContainer = styled.div<CartContainerType>`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width:24px;
  height: 100%;
  & path {
    fill: ${({color}) => color };
  }
`;

export const WishIcon = styled(WishIconSVG)`
  width: 24px;
  height: 100%;
  & path {
    fill: ${({color}) => color };
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 15px;
`;


export const ThemeIcon = styled(ThemeIconSVG)`
  width: 24px;
  height: 100%;
  & path {
    fill: ${({color}) => color };
  }
  cursor: pointer;
`;