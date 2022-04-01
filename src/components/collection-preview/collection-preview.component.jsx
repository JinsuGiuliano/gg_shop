import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionItemCompenent from '../collection-item/collection-item.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, currentUser }) => {
//   items.forEach(el=>(
//     el.map(e=>console.log(e))
//   ))
    return(
      <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${title}`)}>
          {title && title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
          {items && 
           
            items
            .filter((_, idx) => idx < 4)
            .map((i, idx) => (
              <CollectionItemCompenent key={idx} item={i} currentUser={currentUser} routeName={title}/>
            ))
          }
        </PreviewContainer>
      </CollectionPreviewContainer>
    );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(CollectionPreview));
