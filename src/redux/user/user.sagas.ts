import { takeLatest, put, all, call } from 'typed-redux-saga/macro';

import { USER_ACTION_TYPE } from './user.types';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from './user.actions';

import {signOut as signOutLib, signInWithPopup, PopupRedirectResolver,
        createUserWithEmailAndPassword, getAuth, User, UserCredential } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import {
  provider,
  createUserProfileDocument,
  getCurrentUser, AdditionalData
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth: User, additionalData?: AdditionalData) {
  try {
    const userSnapshot = yield* call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    if(userSnapshot){
      yield* put(signInSuccess({ id: userSnapshot.id, wishList:[], isAdmin: false, ...userSnapshot.data() }));
    }

  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const auth =  getAuth()
    const userCredential = yield* call(signInWithPopup, auth, provider) 
    if(userCredential){
      const { user } = userCredential
      yield* getSnapshotFromUserAuth(user);
    }
   
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

// export function* signInWithEmail({ payload: { email, password } }) {
//   try {
//     const auth = getAuth()
//     const { user } = yield* signInWithEmailAndPassword(auth, email, password);
//     yield* getSnapshotFromUserAuth(user);
//   } catch (error) {
//     yield* put(signInFailure(error));
//   }
// }

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signOut() {
  try {
    const auth = getAuth()
    yield* call(signOutLib,auth);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailure(error as Error));
  }
}

// export function* signUp({ payload: { email, password, displayName } }) {
//   try {
//     const auth = getAuth();
//     const { user } = yield* createUserWithEmailAndPassword(auth, email, password);
//     yield* put(signUpSuccess({ user, additionalData: { displayName } }));
//   } catch (error) {
//     yield* put(signUpFailure(error));
//   }
// }

// export function* signInAfterSignUp({ payload: { user, additionalData } }) {
//   yield* getSnapshotFromUserAuth(user, additionalData);
// }


//Actual SAGAS!
export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// export function* onEmailSignInStart() {
//   yield* takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithEmail);
// }

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut);
}

// export function* onSignUpStart() {
//   yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp);
// }

// export function* onSignUpSuccess() {
//   yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

export function* userSagas() {
  yield* all([
    call(onGoogleSignInStart),
    // call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    // call(onSignUpStart),
    // call(onSignUpSuccess)
  ]);
}
