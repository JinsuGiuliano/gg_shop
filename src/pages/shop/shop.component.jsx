import React ,{useEffect}from 'react';
import { Route } from 'react-router-dom';
import { connect,useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
//import {addCollectionAndDocuments} from '../../firebase/firebase.utils'
//import SHOP_DATA from '../../redux/shop/shop.data';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';


import ErrorBoundary from '../../ErrorBoundary';



const ShopPage = ({ match }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  return (
      <ErrorBoundary>
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
           exact
           path=':category' 
           element={<CollectionPageContainer />}
        />
      </div>
      </ErrorBoundary>
    );
  }

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
// });

export default ShopPage;
