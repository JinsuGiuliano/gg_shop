import React, { FC } from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection/collection-item/collection-item.component';

import { selectCollection, selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { Category } from '../../redux/shop/shop.types';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './admin.styles';

const CollectionPage = () => {
  
  const {collectionId} = useParams()
  const  collection = useSelector(selectCollection(collectionId as string))
 // const isLoading =  useSelector(selectIsCollectionFetching)
  const { title, items } = collection as Category;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        { 
          items.map( item =>
            <CollectionItem key={item.id} item={item} />
          )
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};


export default CollectionPage;

