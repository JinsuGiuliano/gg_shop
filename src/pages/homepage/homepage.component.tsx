import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/home/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  return(
    <HomePageContainer>
      <Directory />
      <Outlet/>
    </HomePageContainer>
  )}

export default HomePage;
