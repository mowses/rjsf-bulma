import React from 'react';
import { AddButtonProps } from '@rjsf/core';
import { Button } from 'react-bulma-components';

const AddButton: React.FC<AddButtonProps> = props => {
    const { className, ...other } = props;

    return <Button {...other} className={className}>
        <span className="icon">
            <i className="fas fa-plus"></i>
        </span> Add Item
      </Button>
};

export default AddButton;
