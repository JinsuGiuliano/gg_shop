import React ,{useEffect}from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collection/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import ErrorBoundary from '../../ErrorBoundary'
const ShopPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  });

  return (
    <ErrorBoundary>
      <Routes>
        <Route index element={<CollectionsOverviewContainer />} />
        <Route path=':category' element={<CollectionPageContainer />} />
      </Routes>
      </ErrorBoundary>
    );
  }

export default ShopPage;
