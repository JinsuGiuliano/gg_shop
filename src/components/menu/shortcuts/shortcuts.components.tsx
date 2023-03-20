import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import sections from '../../../redux/directory/SECTIONS_DATA';
import { SectionSCLink, SectionSC, ShortCutsContainer, WelcomeMessage } from './shortcuts.styles';


const Shortcuts = () => {

  const location = useLocation().pathname.split("/")[2];
  console.log(location)
  return (
    <ShortCutsContainer>
      {
        sections.map((section, key) =>
          <SectionSC key={key} style={{ borderBottom: location == section.title ? "1px solid red" : "" }}>
            <SectionSCLink to={section.linkUrl}>{section.title}</SectionSCLink>
          </SectionSC>
        )
      }
    </ShortCutsContainer>
  );
}



export default Shortcuts;
