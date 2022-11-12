import React from 'react';
import { ErrorListProps } from '@rjsf/core';
import Content from 'react-bulma-components/src/components/content';
import Notification from 'react-bulma-components/src/components/notification';

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
