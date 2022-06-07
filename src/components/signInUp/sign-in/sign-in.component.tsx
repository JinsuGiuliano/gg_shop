import React from 'react';
import { useDispatch } from 'react-redux';

import CustomButton from '../../utils/custom-button/custom-button.component';

import { googleSignInStart } from '../../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

const SignIn = () => {
   const dispatch = useDispatch()

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
          <ButtonsBarContainer>
            <CustomButton
              type='button'
              onClick={ () => dispatch(googleSignInStart()) }
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
      </SignInContainer>
    );
  }

export default SignIn;
