import React from "react";
import { WidgetProps } from "@rjsf/core";
import Form from 'react-bulma-components/src/components/form';

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
}: WidgetProps) => {
  
  let input_type = schema.type as string;
  let _value = Array.isArray(value) ? value.toString() : value;

  if (!['text',
    'email',
    'tel',
    'password',
    'number',
    'search',
    'color',
    'date',
    'time',
    'datetime-local'
    ].includes(input_type)) {
    input_type = 'text';
  }
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Form.Input
      type={input_type}
      id={id}
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      name={name}
      value={_value || _value === 0 ? _value : ""}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default TextWidget;
