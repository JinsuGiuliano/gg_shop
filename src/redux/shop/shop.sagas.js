import { takeLatest, call, put, all } from 'redux-saga/effects';
//import { getCategoriesAndDocuments } from '../../firebase/shop/updateItem';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';
import sections from '../directory/SECTIONS_DATA';
import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync() {
  try {
     // const collectionsSnap = yield getCategoriesAndDocuments()
     const fire = getFirestore()
     let categoriesList =  [];
     for(var i in sections){
          let category = {
            title: sections[i].title,
            items: []
          };
            const sectionSnap =  collection(fire, 'categories', `${sections[i].title}`, 'items')
            const sectionRef = yield  getDocs(sectionSnap)
            yield sectionRef.docs.map(item => category.items.push(item.data()))
            yield categoriesList.push(category)
     }
      yield put(fetchCollectionsSuccess(categoriesList))
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
