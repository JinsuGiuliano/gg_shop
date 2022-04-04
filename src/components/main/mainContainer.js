import styled from 'styled-components';
import { backgroundColor, textColor } from '../../redux/theme/styles.const';

export const MainContainer = styled.div`
  font-family: 'Open Sans Condensed';
  padding: 20px 40px;
  background-color: ${backgroundColor};
  color: ${textColor};
  margin: 0px !important;

  & a {
    text-decoration: none;
    color: ${textColor};
  }

  & span {
    color: ${textColor};
  }


`;