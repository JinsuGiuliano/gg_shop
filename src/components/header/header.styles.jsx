import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/gg.svg';

export const LogoComponent = styled(Logo)`
  height: 100%;
  & path {
    fill: ${({color}) => color };
  }
  &:hover path {
    fill: ${({hoverColor}) => hoverColor};
  }
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: ;
  height: 100%;
  width: 100%;
  padding: 5px 5px 5px 25px;
`;
export const ThemeContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
