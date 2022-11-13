import { FieldProps } from '@rjsf/utils';
import React from 'react';
import Form from 'react-bulma-components/src/components/form';

class AnyOfField extends React.Component<FieldProps> {

    render() {
        return (
            <Form.Field kind="group">
                <Form.Control>
                    {/*field.props.children[0].props.children*/}
                </Form.Control>
                <Form.Control fullwidth={true}>
                    {/*field.props.children[1]*/}
                </Form.Control>
            </Form.Field>
        );
    }
}

export default AnyOfField;
