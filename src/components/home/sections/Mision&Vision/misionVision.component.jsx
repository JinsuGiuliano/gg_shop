import React from 'react';
import { useSelector } from 'react-redux';

import { selectValuesValues } from '../../../../redux/values/values.selectors';

import ValueItem from './values.component';

import { DirectoryMenuContainer, MainDirectoryMenuContainer } from '../../directory/directory.styles';

const MisionVision = () => {
  const ourValues = useSelector(selectValuesValues)
  console.log('ourValues', ourValues)
  return(
    <MainDirectoryMenuContainer>
    <h2 className="text-center">Over Ons</h2>
        <DirectoryMenuContainer>
        {
            ourValues.map(({ id, ...otherSectionProps }) => (
            <ValueItem key={id} {...otherSectionProps} />
          ))
        }
      </DirectoryMenuContainer>
    </MainDirectoryMenuContainer>

)}


export default MisionVision;