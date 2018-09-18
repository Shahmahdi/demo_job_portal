import * as React from 'react';
import { IconName, FormGroup, Intent, NumericInput } from '@blueprintjs/core';

interface NumberFieldProps {
  id: string;
  leftIcon?: IconName;
  rightElement?: JSX.Element;
  placeholder?: string;
  onChange: (value: number) => void;
  value?: number | string | null;
  error?: string;
  large?: boolean;
  start?: number;
  step?: number;
  min?: number;
  max?: number;
  minorStepSize?: number;
  stepSize?: number;
  disabled?: boolean;
}

export const NumberField = (props: NumberFieldProps) => (
  <NumericInput
    type="number"
    onValueChange={(valueAsNumber) => props.onChange(valueAsNumber)}
    id={props.id}
    min={props.min ? props.min : props.start}
    max={props.max}
    intent={props.error ? Intent.DANGER : Intent.NONE}
    className={`pt-fill ${props.large ? 'pt-large' : ''}`}
    leftIcon={props.leftIcon}
    value={props.value ? props.value : undefined}
    placeholder={props.placeholder}
    step={props.step}
    minorStepSize={props.minorStepSize}
    stepSize={props.stepSize}
    disabled={props.disabled}
    buttonPosition="none"
  />
);

interface NumberFieldWithLabelProps extends NumberFieldProps {
  label: string;
  helperText?: string;
  inline?: boolean;
  required?: boolean;
}

export const NumberFieldWithLabel = (props: NumberFieldWithLabelProps) => (
  <FormGroup
    inline={props.inline}
    intent={props.error ? Intent.DANGER : Intent.NONE}
    label={<span className="b">{props.label}</span>}
    // requiredLabel={props.required}
    helperText={props.error ? props.error : props.helperText}
    labelFor={props.id}
  >
    <NumberField {...props} />
  </FormGroup>
);