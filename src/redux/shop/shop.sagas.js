import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore } from '../../firebase/firebase.utils';

import { getCategories } from '../../firebase/shop/updateItem';

import { collection, getDocs } from "firebase/firestore";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

const trasnformCollection = (categoriesSnap) => {
  try{
    let categoriesList=[];
    categoriesSnap.forEach( (doc)=> {
      categoriesList.push(doc.data().title);
    })
    return getCategories(categoriesList);
  }catch(err){
       console.log("error at Shop.Saga transformCollections: ",err)
  }
}

export function* fetchCollectionsAsync() {
  try {
    
      const categoriesSnap = yield getDocs(collection(firestore, 'categories'))

      const collectionsSnap = yield trasnformCollection(categoriesSnap)
      
      yield put(fetchCollectionsSuccess(collectionsSnap))
  } catch (error) {
      yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
