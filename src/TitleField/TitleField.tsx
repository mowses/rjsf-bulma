import React from 'react';
import { FieldProps } from '@rjsf/utils';
import { Heading } from 'react-bulma-components';

const TitleField = ({ title }: FieldProps) => {
    if (!title) return null;
    
    return <Heading renderAs="h5">{title}</Heading>
};

export default TitleField;
