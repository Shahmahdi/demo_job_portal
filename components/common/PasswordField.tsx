import * as React from 'react';
import { FormGroup, Intent, InputGroup, Button } from '@blueprintjs/core';
import { compose, withState, withHandlers } from 'recompose';

interface PasswordFieldProps {
  id: string;
  onPasswordChange: (value: string) => void;
  error?: string;
  value?: string;
  placeholder?: string;
  large?: boolean;
}

interface PasswordFieldInternalProps extends PasswordFieldProps {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  toggleShowPassword: () => void;
}

const PasswordFieldComponent = (props: PasswordFieldInternalProps) => (
  <InputGroup
    id={props.id}
    leftIcon="lock"
    type={props.showPassword ? 'text' : 'password'}
    intent={props.error ?
      Intent.DANGER :
      props.showPassword ?
        Intent.WARNING :
        Intent.NONE}
    value={props.value}
    placeholder={props.placeholder}
    className={`pt-fill ${props.large ? 'pt-large' : ''}`}
    onChange={e => props.onPasswordChange(e.target.value)}
    rightElement={
      <Button
        intent={props.showPassword ? Intent.WARNING : Intent.NONE}
        className="pt-minimal"
        icon={props.showPassword ? 'eye-off' : 'eye-on'}
        onClick={props.toggleShowPassword}
      />}
  />
);

const enhance = compose<PasswordFieldInternalProps, PasswordFieldProps>(
  withState('showPassword', 'setShowPassword', false),
  withHandlers<PasswordFieldInternalProps, any>({
    toggleShowPassword: ({ showPassword, setShowPassword}) => 
      () => setShowPassword(!showPassword)
  })
);

export const PasswordField = enhance(PasswordFieldComponent);

interface PasswordFieldWithLabelProps extends PasswordFieldProps {
  label: string;
  helperText?: string;
  inline?: boolean;
  required?: boolean;
}

export const PasswordFieldWithLabel = (props: PasswordFieldWithLabelProps) => (
  <FormGroup
    intent={props.error ? Intent.DANGER : Intent.NONE}
    inline={props.inline}
    label={<span className="b">{props.label}</span>}
    // requiredLabel={props.required}
    helperText={props.error ? props.error : props.helperText}
    labelFor={props.id}
  >
    <PasswordField {...props} />
  </FormGroup>
);