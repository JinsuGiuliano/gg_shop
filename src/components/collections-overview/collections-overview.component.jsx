import React from 'react';
// import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';
// import { selectCollections } from '../../redux/shop/shop.selectors';
// import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections, currentUser }) => 

        (
          <CollectionsOverviewContainer>
            {collections &&
              collections.map((category, idx) => (
                <CollectionPreview key={idx} title={category.title} items={category.items}/>
              ))
            }
          </CollectionsOverviewContainer>     
        )

export default CollectionsOverview;