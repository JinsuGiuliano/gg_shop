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

export const MenuLogoComponent = styled(MenuLogo)`
  height: 50px;
  & path {
    fill: ${({color}) => color };
  }
  &:hover path {
    fill: ${({hovercolor}) => hovercolor};
  }
  display:none;
    @media screen and (max-width: 800px) {
    display: flex;
  }
`



export const HeaderContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    flex:1;
    flex-direction: row;
    margin-bottom: 5px;
    justify-content: flex-start;
  }
`;

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
  justify-content: flex-start;
  position: fixed;
  z-index: 99999;
  padding: 10px 10px;
  background-color: ${backgroundColor};
  @media screen and (max-width: 800px) {
    display: none;
    width: 100%;
    flex:1;
   
    flex-direction: column;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
