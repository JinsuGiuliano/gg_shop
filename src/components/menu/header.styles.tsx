import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/gg.svg';
import { ReactComponent as MenuLogo } from '../../assets/menu.svg';
import {backgroundColor, textColor} from '../../redux/theme/styles.const';
export const LogoComponent = styled(Logo)`
  height: 50px;
  & path {
    fill: ${({color}) => color };
  }
  &:hover path {
    fill: ${({hovercolor}) => hovercolor};
  }
`

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: ;
  height: 100%;
  width: 100%;
  padding: 5px 5px 5px 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;
export const ThemeContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 99999;
  background-color: ${backgroundColor};
`;

export const OptionLink = styled(Link)`
  padding: 5px 5px;
  cursor: pointer;
`;
