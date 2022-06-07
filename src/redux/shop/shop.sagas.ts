import { takeLatest, call, put, all } from 'typed-redux-saga';
//import { getCategoriesAndDocuments } from '../../firebase/shop/updateItem';
import { getDocs, collection, updateDoc, doc, DocumentSnapshot } from "firebase/firestore";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  updateItemSuccess,
  updateItemFailure,
  UpdateItemStart
} from './shop.actions';
import sections from '../directory/SECTIONS_DATA';
import { Category, CategoryItem, SHOP_ACTION_TYPES } from './shop.types';
import {firestore} from '../../firebase/firebase.utils'


export function* updateItemAsync({payload: item}:UpdateItemStart) {
  try {
      const itemsRef = doc(firestore, `categories`, item.category, 'items', item.id);
      yield* call(updateDoc, itemsRef, item);
      yield* put(updateItemSuccess(item))
  } catch (error) {
      yield* put(updateItemFailure(error as Error));
  }
}

export function* fetchCollectionsAsync() {
  try {
     // const collectionsSnap = yield* getCategoriesAndDocuments()
    

     var categoriesList:Category[] = [];
     for(var i in sections){

        
          let category:Category = {
            title: sections[i].title,
            items: [],
            imageUrl:''
          };
            const sectionRef =  collection(firestore, 'categories', `${sections[i].title}`, 'items')
            const sectionSnap = yield*  call(getDocs,sectionRef)

            if(sectionSnap){
              yield* sectionSnap.docs.map((item) => {
                const data= item.data() as CategoryItem;
                category.items.push({
                  ...data
                })}
              )
              categoriesList.push(category)
            }
            
     }
      yield* put(fetchCollectionsSuccess(categoriesList))
  } catch (error) {
      yield* put(fetchCollectionsFailure(error as Error));
  }
}

export function* updateItemStart(){
  yield* takeLatest(
    SHOP_ACTION_TYPES.ITEM_UPDATE_START,
    updateItemAsync
  )
}


export function* fetchCollectionsStart() {
  yield* takeLatest(
    SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield* all([
    call(fetchCollectionsStart),
    call(updateItemStart)
  ]);
}
