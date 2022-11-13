import React from 'react';
import { Button } from 'react-bulma-components';

const IconButton = (props: any) => {
  const { icon, ...otherProps } = props;
  return (
    <Button {...otherProps}>
        <span className="icon">
            <i className={`fas fa-${icon}`}></i>
        </span>
    </Button>
  );
};

export default IconButton;
