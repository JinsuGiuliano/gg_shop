import { USER_ACTION_TYPE, User } from './user.types';      
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducers/reducers.utils';
import { WishlistItem } from '../wishlist/wish.types';

export type GoogleSignInStart = Action<USER_ACTION_TYPE.GOOGLE_SIGN_IN_START>;
export type SignInSuccess =  ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_SUCCESS, User>;
export type SignInFailure = ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_FAILURE, Error>;
export type CheckUserSession = Action<USER_ACTION_TYPE.CHECK_USER_SESSION>;
export type SignOutStart = Action<USER_ACTION_TYPE.SIGN_OUT_START>
export type SignOutSuccess = Action<USER_ACTION_TYPE.SIGN_OUT_SUCCESS>
export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPE.SIGN_OUT_FAILURE, Error>;

export type UserActions = GoogleSignInStart | SignInSuccess | SignInFailure | 
  CheckUserSession | SignOutStart | SignOutSuccess | SignOutFailure

export const googleSignInStart = withMatcher(
  ():GoogleSignInStart  => 
  createAction(
    USER_ACTION_TYPE.GOOGLE_SIGN_IN_START
  ));

export const signInSuccess = withMatcher(
  (user: User & {id: string}):SignInSuccess  => 
  createAction(
    USER_ACTION_TYPE.SIGN_IN_SUCCESS,
    user
  ));

export const signInFailure = withMatcher(
  (error: Error):SignInFailure  => 
  createAction(
    USER_ACTION_TYPE.SIGN_IN_FAILURE,
    error
  ));

export const checkUserSession = withMatcher(
  (): CheckUserSession => 
  createAction(
    USER_ACTION_TYPE.CHECK_USER_SESSION
  ));

export const signOutStart = withMatcher(
  (): SignOutStart => 
  createAction(
    USER_ACTION_TYPE.SIGN_OUT_START
  ));

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => 
  createAction(
    USER_ACTION_TYPE.SIGN_OUT_SUCCESS
  ));

export const signOutFailure = withMatcher(
  (error: Error): SignOutFailure => 
  createAction(
    USER_ACTION_TYPE.SIGN_OUT_FAILURE,
    error)
  );

// export type SignUpStart
// export const signUpStart = userCredentials => ({
//   type: UserActionTypes.SIGN_UP_START,
//   payload: userCredentials
// });

// export const signUpSuccess = ({ user, additionalData }) => ({
//   type: UserActionTypes.SIGN_UP_SUCCESS,
//   payload: { user, additionalData }
// });

// export const signUpFailure = error => ({
//   type: UserActionTypes.SIGN_UP_FAILURE,
//   payload: error
// });

// export const emailSignInStart = emailAndPassword => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_START,
//   payload: emailAndPassword
// });
