import { takeLatest, call, put, all } from 'redux-saga/effects';
//import { getCategoriesAndDocuments } from '../../firebase/shop/updateItem';
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  updateItemSuccess,
  updateItemFailure
} from './shop.actions';
import sections from '../directory/SECTIONS_DATA';
import ShopActionTypes from './shop.types';
import {firestore} from '../../firebase/firebase.utils'



export function* updateItemAsync({payload: {item, itemUpdated}}) {
  try {
    console.log('updateItemAsync: ', item)
      const itemsRef = doc(firestore, `categories`, item.category, 'items', item.id);
      yield updateDoc(itemsRef,itemUpdated);
      yield put(updateItemSuccess(itemUpdated))
  } catch (error) {
      yield put(updateItemFailure(error.message));
  }
}

export function* fetchCollectionsAsync() {
  try {
     // const collectionsSnap = yield getCategoriesAndDocuments()
     let categoriesList =  [];
     for(var i in sections){
          let category = {
            title: sections[i].title,
            items: []
          };
            const sectionSnap =  collection(firestore, 'categories', `${sections[i].title}`, 'items')
            const sectionRef = yield  getDocs(sectionSnap)
            yield sectionRef.docs.map(item => 
              category.items.push({
                ...item.data(),
                id: item.id
              })
            )
            yield categoriesList.push(category)
     }
      yield put(fetchCollectionsSuccess(categoriesList))
  } catch (error) {
      yield put(fetchCollectionsFailure(error.message));
  }
}

export function* updateItemStart(){
  yield takeLatest(
    ShopActionTypes.ITEM_UPDATE_START,
    updateItemAsync
  )
}


export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(updateItemStart)
  ]);
}
