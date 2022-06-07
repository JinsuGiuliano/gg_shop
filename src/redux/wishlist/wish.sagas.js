import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { USER_ACTION_TYPE } from '../user/user.types';
import { WISH_ACTION_TYPES } from './wish.types';
import { firestore } from '../../firebase/firebase.utils';
import { 
  clearWish,
  saveWishlistForUserSuccess,
  saveWishlistForUserFailure
} from './wish.actions';

export function* saveWishlistForUser({payload:{wishlist, user}}){
try{
 
  const wishlistObject = {wishlist:{...wishlist}}
  yield console.log('in Wish Saga: ', user, wishlistObject)
  const userRef = doc(firestore, `users`, user.id);
  yield console.log('userRef: ',userRef)
  yield updateDoc(userRef,wishlistObject);
  yield(put(saveWishlistForUserSuccess("Your wish list has been saved! Check it out on your profile!")))
}catch(err){
  yield(put(saveWishlistForUserFailure(err)))
}

}


export function* clearWishOnSignOut() {
  yield put(clearWish());
}

export function* onSignOutSuccess() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_SUCCESS, clearWishOnSignOut);
}

export function* onSaveWishlist(){
  yield takeLatest(WISH_ACTION_TYPES.SAVE_WISH_LIST_START, saveWishlistForUser)
}

export function* wishSagas() {
  yield all([
    call(onSignOutSuccess), 
    call(clearWishOnSignOut), 
    call(onSaveWishlist)
   ]);
}
