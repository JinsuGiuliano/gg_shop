import { AnyAction } from 'redux';
import { USER_ACTION_TYPE, User } from './user.types';
import { UserActions,  signInSuccess, signInFailure, 
         checkUserSession , signOutStart, signOutSuccess, signOutFailure} from './user.actions';

export type UserState = {
  readonly currentUser: User | null,
  readonly error: Error | null
}
export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  error: null
};



export const userReducer = (
    state = USER_INITIAL_STATE, 
    action: AnyAction ): UserState => {

    if(signInSuccess.match(action)){
      return {
              ...state,
              currentUser: action.payload,
              error: null
            };
    }

    if(signOutSuccess.match(action)){
      return {
        ...state,
        currentUser: null,
        error: null
      };
    }

    if(signInFailure.match(action) || signOutFailure.match(action)){
      return {
        ...state,
        error: action.payload
      };
    }

    return {...state}
  // switch (action.type) {
  //   case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
  //     return {
  //       ...state,
  //       currentUser: action.payload,
  //       error: null
  //     };
  //   case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
  //     return {
  //       ...state,
  //       currentUser: null,
  //       error: null
  //     };
  //   case USER_ACTION_TYPE.SIGN_IN_FAILURE:
  //   case USER_ACTION_TYPE.SIGN_OUT_FAILURE:
  //     return {
  //       ...state,
  //       error: action.payload
  //     };
  //   default:
  //     return state;
  // }
};
