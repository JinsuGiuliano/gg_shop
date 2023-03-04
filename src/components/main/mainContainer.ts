import styled from 'styled-components';
import { backgroundColor, textColor } from '../../redux/theme/styles.const';

export const MainContainer = styled.div`
  width:100%;
  height:100%;
  font-family: 'Open Sans Condensed';
  padding: 0px 5px;
  background-color: ${backgroundColor};
  color: ${textColor};
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 0px !important;
  & a {
    text-decoration: none;
    color: ${textColor};
  }

  & span {
    color: ${textColor};
  }
`;