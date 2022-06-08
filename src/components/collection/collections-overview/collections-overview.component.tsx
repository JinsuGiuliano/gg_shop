import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { selectCollections, selectIsCollectionFetching } from '../../../redux/shop/shop.selectors';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import WithSpinner from '../../utils/with-spinner/with-spinner.component';
// import { createStructuredSelector } from 'reselect';

const CollectionsOverview = () => {
  const isLoading = useSelector(selectIsCollectionFetching);
  const currentUser = useSelector(selectCurrentUser);
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