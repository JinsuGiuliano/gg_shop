import React, { InputHTMLAttributes, FC } from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

type FormType = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormType> = ({ label, ...props }) => (
  <GroupContainer>
    <FormInputContainer {...props} />
    {label ? (
      <FormInputLabel className={props.value && typeof props.value === 'string' && props.value.length > 0  ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
