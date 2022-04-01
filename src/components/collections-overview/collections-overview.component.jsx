import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { selectCollections } from '../../redux/shop/shop.selectors';
// import { createStructuredSelector } from 'reselect';

const CollectionsOverview = () => {
  
  const collections = useSelector(selectCollections);
  return(
          <CollectionsOverviewContainer>
            {
              collections &&
              collections.map((category) =>( 
                <CollectionPreview key={category.title} title={category.title} items={category.items}/>)
              )
            }
          </CollectionsOverviewContainer>
        )     
          }
export default CollectionsOverview;