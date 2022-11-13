import React from 'react';
import { ErrorListProps } from '@rjsf/utils';
import { Content, Notification } from 'react-bulma-components';

const ErrorList = ({ errors }: ErrorListProps) => (
  <Content renderAs="ul" className="error-list-items">
    {errors.map((error, i: number) => {
      return (
        <Notification renderAs="li" key={i}>{error.stack}</Notification>
      );
    })}
  </Content>
);

export default ErrorList;
