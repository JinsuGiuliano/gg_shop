import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer, MainDirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {
  console.log('Im in Directory: ',sections)
  return(
    <MainDirectoryMenuContainer>
    <h2 className="text-center">Projecten Gallery</h2>
        <DirectoryMenuContainer>
        {
          sections.map(({gallery, id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} id={id} gallery={gallery}/>
          ))
        }
      </DirectoryMenuContainer>
    </MainDirectoryMenuContainer>

)}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
