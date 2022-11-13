import React from 'react';
import { ObjectFieldTemplateProps } from '@rjsf/utils';
import Card from 'react-bulma-components/src/components/card';
import Element from 'react-bulma-components/src/components/element';
import Form from 'react-bulma-components/src/components/form';

const ObjectFieldTemplate = ({
  description,
  title,
  properties,
  uiSchema,
}: ObjectFieldTemplateProps) => {

  return (
    <Card>
      {(uiSchema && uiSchema['ui:title'] || title) && (
        <Card.Header>
          <Card.Header.Title>{title}</Card.Header.Title>
          <Card.Header.Icon />
        </Card.Header>
      )}
      
      <Card.Content>
        {description && (
          <Element renderAs="div" className="subtitle description">{description}</Element>
        )}

        {properties.map( (element, index) => (
          <Form.Field key={index} className="field-row">{element.content}</Form.Field>
        ))}

      </Card.Content>
    </Card>
  );
};

export default ObjectFieldTemplate;
