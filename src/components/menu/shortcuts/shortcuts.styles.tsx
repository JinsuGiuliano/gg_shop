import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShortCutsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width:50%;
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
`
export const SectionSCLink = styled(Link)`
    font-size: 22px;
    cursor: pointer;
`