import React ,{useEffect}from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import CollectionPageContainer from '../collection/collection.container';
import ErrorBoundary from '../../ErrorBoundary'
import CollectionPage from '../collection/collection.component';
const ShopPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  });

  return (
    <ErrorBoundary>
      <Routes>
        <Route index element={<CollectionsOverview />} />
        <Route path=':category' element={<CollectionPage />} />
      </Routes>
      </ErrorBoundary>
    );
  }

export default ShopPage;
