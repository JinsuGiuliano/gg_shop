import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CollectionItemComponent from '../../components/collection/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { Category } from '../../redux/shop/shop.types';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = () => {
  const currentUser = useSelector(selectCurrentUser)
  const {category} = useParams();
  const items = useSelector(selectCollection(category as string));

  return (
    <Fragment>
    <CollectionPageContainer>
      <CollectionTitle>{category}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items &&
          items.items.map(item => (
            <CollectionItemComponent key={item.id} item={item} />
          ))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
    <Outlet/>
    </Fragment>
  );
};
export default CollectionPage;
