import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { backgroundColor, textColor } from '../../../redux/theme/styles.const';

export const ShortCutsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width:50%;
    color: ${textColor};
    @media screen and (max-width: 800px) {
        flex:1;
        float:center;
        width:100%;
        justify-content: space-around;
        position: absolute;
        bottom: -50%;
        flex-wrap: nowrap;
        overflow-x: auto;
        background-color: ${backgroundColor};
        z-index:99999;
  }
`

export const WelcomeMessage = styled.div`
    font-size: 22px;
    float:center;
`

export const SectionSC = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    padding-bottom: 5px;
    transition: padding-bottom 1000ms linear;

    @media screen and (max-width: 800px) {
         flex: 0 0 auto;
    }
 

`
export const SectionSCLink = styled(Link)`
    font-size: 22px;
    cursor: pointer;
`