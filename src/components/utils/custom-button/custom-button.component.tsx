import React, { ButtonHTMLAttributes, FC } from 'react';

import { CustomButtonContainer } from './custom-button.styles';
type ButtonProps = {
  isGoogleSignIn?: boolean,
  inverted?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const CustomButton: FC<ButtonProps> = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
