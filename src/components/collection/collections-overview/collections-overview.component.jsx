import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { selectCollections } from '../../../redux/shop/shop.selectors';
// import { createStructuredSelector } from 'reselect';

const CollectionsOverview = () => {
  
  const collections = useSelector(selectCollections);

  return(
    <Fragment>
          <CollectionsOverviewContainer>
            {
              collections &&
              collections.map((category) =>( 
                <CollectionPreview key={category.title} title={category.title} items={category.items}/>)
              )
            }
          </CollectionsOverviewContainer>
    </Fragment>
        )     
          }
export default CollectionsOverview;