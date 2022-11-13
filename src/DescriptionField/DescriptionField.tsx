import React from 'react';
import { FieldProps } from '@rjsf/utils';
import Element from 'react-bulma-components/src/components/element';

const DescriptionField = ({ description }: FieldProps) => {
  if (!description) return null;

  return (
    <Element renderAs="div" className="subtitle description">{description}</Element>
  );
};

export default DescriptionField;
