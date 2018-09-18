import * as React from 'react';
import { Radio } from '@blueprintjs/core';

interface RadioButtonProps {
  id: string;
  label: string;
  onChange: (value: boolean) => void;
  checked?: boolean;
  large?: boolean;
  inline?: boolean;
}

export const RadioButtonField = (props: RadioButtonProps) => (
  <Radio 
    className={props.large ? 'pt-large' : ''}
    id={props.id}
    inline={props.inline}
    label={props.label}
    checked={props.checked} 
    onChange={e => props.onChange((e.target as any).checked)} 
  />
);