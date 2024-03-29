import React from "react";
import { WidgetProps } from "@rjsf/utils";
import { Form } from 'react-bulma-components';

type CustomWidgetProps = WidgetProps & {
  options: any;
};

const TextareaWidget = ({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
}: CustomWidgetProps) => {

  const _onChange = ({ target: { value }}: React.FocusEvent<HTMLTextAreaElement>) => onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value }}: React.FocusEvent<HTMLTextAreaElement>) => onBlur(id, value);
  const _onFocus = ({target: { value }}: React.FocusEvent<HTMLTextAreaElement>) => onFocus(id, value);

  return (
    <Form.Textarea
      id={id}
      required={required}
      placeholder={placeholder}
      disabled={disabled || readonly}
      value={value}
      autoFocus={autofocus}
      rows={options.rows || 5}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default TextareaWidget;
