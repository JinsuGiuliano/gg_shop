import React from 'react';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => {

  const sections = useSelector(selectDirectorySections)

  return(
  <DirectoryMenuContainer>
    {
      sections.map(({...otherSectionProps }, idx: number) => (
        <MenuItem key={idx} {...otherSectionProps} />
       ))
    }
  </DirectoryMenuContainer>
)}

export default Directory;
