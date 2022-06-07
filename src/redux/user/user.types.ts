import { CategoryItem } from "../shop/shop.types"

export enum USER_ACTION_TYPE {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  CHECK_USER_SESSION = 'CHECK_USER_SESSION',
  // sign in user
  GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',
  // sign out user
  SIGN_OUT_START = 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE',
  // sign up user
  SIGN_UP_START = 'SIGN_UP_START',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
};


export type User = {
  createdAt: Date,
  displayName: string,
  email: string,
  isAdmin: boolean,
  wishList: CategoryItem[]
}
