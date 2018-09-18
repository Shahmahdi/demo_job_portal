import * as React from 'react';
import { IconName, InputGroup, FormGroup, Intent } from '@blueprintjs/core';

interface TextFieldProps {
  id: string;
  leftIcon?: IconName;
  rightElement?: JSX.Element;
  placeholder?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  value?: string | null;
  error?: string;
  large?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
}

export const TextField = (props: TextFieldProps) => (
  <InputGroup
    autoFocus={props.autoFocus}
    type="text"
    readOnly={props.readOnly}
    id={props.id}
    intent={props.error ? Intent.DANGER : Intent.NONE}
    className={`pt-fill ${props.large ? 'pt-large' : ''}`}
    leftIcon={props.leftIcon}
    value={props.value ? props.value : undefined}
    onChange={e => props.onChange!(e.target.value)}
    placeholder={props.placeholder}
    rightElement={props.rightElement}
    disabled={props.disabled}
  />
);

interface TextFieldWithLabelProps extends TextFieldProps {
  label: string;
  helperText?: string;
  inline?: boolean;
  required?: boolean;
}

export const TextFieldWithLabel = (props: TextFieldWithLabelProps) => (
  <FormGroup
    inline={props.inline}
    intent={props.error ? Intent.DANGER : Intent.NONE}
    label={<span className="b">{props.label}</span>}
    // requiredLabel={props.required}
    helperText={props.error ? props.error : props.helperText}
    labelFor={props.id}
  >
    <TextField {...props} />
  </FormGroup>
);