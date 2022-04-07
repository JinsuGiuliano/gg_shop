import React from 'react'
import { DirectoryMenuContainer } from '../../directory/directory.styles';

import { 
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle
} from './misionVision.styles';
const MisionVision = () => {
    return(
      <DirectoryMenuContainer >
        <div className="row">
          <div className="col-xs-12 col-md-12 ">
            <h2 className="text-center">Over Ons</h2>
          </div>
        </div>

      <MenuItemContainer
          size={300}
          onClick={()=>null}
          >
        <BackgroundImageContainer
          className='background-image'
          imageUrl={'assets/images/img-03.jpg'}
        />
        <ContentContainer className='content'>
          <ContentTitle>Missie</ContentTitle>
          <ContentSubtitle> Stichting Wereldvriendschap in Nood biedt hulp aan mensen die de gevolgen ervaren
          van diverse acute noodsituaties, zoals bijv. natuurrampen, oorlogssituaties e.d., en
          ondersteunt anderzijds de bevordering van projecten op langere termijn ten behoeve
          van het welzijn van mensen in minder gunstige leefomstandigheden.</ContentSubtitle>
        </ContentContainer>
      </MenuItemContainer>

      <MenuItemContainer
      size={300}
      onClick={()=>null}
        >
          <BackgroundImageContainer
            className='background-image'
            imageUrl={'assets/images/img-02.jpg'}
          />
          <ContentContainer className='content'>
            <ContentTitle>Visie</ContentTitle>
            <ContentSubtitle> Vanuit het idee dat wij als wereldgemeenschap één familie zijn, die ondanks
            verschillende culturen en gebruiken dezelfde universele waarden delen, hetzelfde
            menszijn beleven met de integriteit van het hart en de vreugde iets voor elkaar te
            willen betekenen, willen wij het belang onderstrepen en de visie naleven van het ons
            inzetten voor elkaar en mensen in faciliteren in samenwerking met de kunde van de
            lokale gemeenschap, opdat de kennis en creativiteit gebundeld kunnen, voor
            innovatieve en duurzame oplossingen voor toekomstige generaties.</ContentSubtitle>
          </ContentContainer>
      </MenuItemContainer>

      <MenuItemContainer
      size={300}
      onClick={()=>null}
          >
        <BackgroundImageContainer
          className='background-image'
          imageUrl={'assets/images/img-01.jpg'}
        />
        <ContentContainer className='content'>
          <ContentTitle>Kernwaarden</ContentTitle>
          <ContentSubtitle>Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</ContentSubtitle>
        </ContentContainer>
      </MenuItemContainer>
      </DirectoryMenuContainer>
    
    )
}

export default MisionVision;