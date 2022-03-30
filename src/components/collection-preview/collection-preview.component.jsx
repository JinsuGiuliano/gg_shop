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

const CollectionPreview = ({ title, items, history, match, routeName, currentUser }) => {

  console.log(title, items)

    return(
      <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
          {title && title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
          {items && 
            items
            .filter((item, idx) => idx < 4)
            .map(item => (
              <CollectionItemCompenent key={item.id} item={item} currentUser={currentUser} routeName={routeName}/>
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
