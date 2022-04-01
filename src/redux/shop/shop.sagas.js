import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../firebase/shop/updateItem';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';
import sections from '../directory/SECTIONS_DATA';
import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync() {
  try {
      const collectionsSnap = yield call(getCategoriesAndDocuments,sections)
      yield console.log("collectionsSnap in shop saga: ",collectionsSnap)
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
