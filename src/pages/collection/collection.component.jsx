import React from 'react';
import { connect } from 'react-redux';

import CollectionItemComponent from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ items, title, currentUser}) => {
  console.log('items: ', items)
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map(item => (
            <CollectionItemComponent key={item.id} item={item} isAdmin={currentUser} />
          ))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
