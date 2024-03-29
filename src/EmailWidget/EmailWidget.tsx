import React from "react";
import { WidgetProps } from "@rjsf/utils";
import { Form } from 'react-bulma-components';

const EmailWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
}: WidgetProps) => {
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
    <>
      {(label || schema.title) ? (
        <Form.Label className={required ? 'required' : ''} htmlFor={id}>{label || schema.title}</Form.Label>
      ) : null}
      
      <Form.Input
        type="email"
        id={id}
        autoFocus={autofocus}
        required={required}
        disabled={disabled || readonly}
        name={name}
        value={value || value === 0 ? value : ""}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </>
  );
};

export default EmailWidget;
