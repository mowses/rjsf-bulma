import React from 'react';
import { FieldProps } from '@rjsf/core';
import Heading from 'react-bulma-components/src/components/heading';

const TitleField = ({ title }: FieldProps) => {
    if (!title) return null;
    
    return <Heading renderAs="h5">{title}</Heading>
};

export default TitleField;
