import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CollectionItemComponent from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({currentUser}) => {

  const {category} = useParams();
  const items = useSelector(selectCollection(category));

  return (
    <Fragment>
    <CollectionPageContainer>
      <CollectionTitle>{category}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.items.map(item => (
            <CollectionItemComponent key={item.id} item={item} isAdmin={currentUser} />
          ))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
    <Outlet/>
    </Fragment>
  );
};



export default CollectionPage;
