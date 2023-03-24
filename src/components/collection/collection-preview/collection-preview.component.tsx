import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CollectionItemCompenent from '../collection-item/collection-item.component';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import {
  CollectionPreviewContainer,
  PreviewContainer
} from './collection-preview.styles';
import { CategoryItem } from '../../../redux/shop/shop.types';

type CollectionPrevType = {
  title: string;
  items: CategoryItem[]
}

const CollectionPreview: FC<CollectionPrevType> = ({ title, items }) => {

  const currentUser = useSelector(selectCurrentUser)

  return (
    <CollectionPreviewContainer>
      <PreviewContainer>
        {items &&
          items
            .filter((_, idx) => idx < 4)
            .map((i, idx) => (
              <CollectionItemCompenent key={idx} item={i} />
            ))
        }
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}


export default CollectionPreview;
