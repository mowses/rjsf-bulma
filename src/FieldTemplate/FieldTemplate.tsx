import React from "react";
import { FieldTemplateProps } from "@rjsf/utils";
import Form from 'react-bulma-components/src/components/form';
import Content from 'react-bulma-components/src/components/content';
import Notification from 'react-bulma-components/src/components/notification';

const FieldErrorListTemplate = (errors: any) => {
  if (!errors || !errors.length) return null;

  return <Content renderAs="ul" className="error-list-field">
    {errors.map( (error: any, index: number) => (
      <Notification renderAs="li" key={index}>{error}</Notification>
    ))}
  </Content>
};

const FieldIsBool = (schema: any, uiSchema: any): boolean => {
  return (schema && schema['type'] == 'boolean') || (uiSchema && ['radio', 'checkbox'].includes('' + uiSchema['ui:widget']));
}

const FieldTemplate = ({
  id,
  classNames,
  children,
  description,
  disabled,
  displayLabel,
  help,
  label,
  required,
  rawErrors = [],
  rawHelp,
  schema,
  uiSchema,
}: FieldTemplateProps) => {
  
  let classnames = classNames || '';
  if (required) {
    classnames += ' required';
  }
  if (disabled) {
    classnames += ' disabled';
  }

  return (
    <Form.Field className={classnames}>
      {displayLabel && label ? (
        <Form.Label htmlFor={FieldIsBool(schema, uiSchema) ? undefined : id}>{label}</Form.Label>
      ) : null}
      {description}
      
      <Form.Control>
        {children}
      </Form.Control>
      
      {FieldErrorListTemplate(rawErrors)}
      {
        (rawHelp || help && help.props.help) && (
          <Form.Help renderAs="div">{rawHelp ? rawHelp : help}</Form.Help>
        )
      }
    </Form.Field>
  );
};

export default FieldTemplate;
