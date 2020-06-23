import React from 'react';
import { utils } from '@rjsf/core';
import { ArrayFieldTemplateProps, IdSchema } from '@rjsf/core';
import Box from 'react-bulma-components/lib/components/box';
import Columns from 'react-bulma-components/lib/components/columns';
import Level from 'react-bulma-components/lib/components/level';
import AddButton from '../AddButton/AddButton';
import IconButton from '../IconButton/IconButton';

const {
  isMultiSelect,
  getDefaultRegistry,
} = utils;

const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  const { schema, registry = getDefaultRegistry() } = props;

  // TODO: update types so we don't have to cast registry as any
  if (isMultiSelect(schema, (registry as any).rootSchema)) {
    return <DefaultFixedArrayFieldTemplate {...props} />;
  } else {
    return <DefaultNormalArrayFieldTemplate {...props} />;
  }
};

type ArrayFieldTitleProps = {
  TitleField: any;
  idSchema: IdSchema;
  title: string;
  required: boolean;
};

const ArrayFieldTitle = ({
  TitleField,
  idSchema,
  title,
  required,
}: ArrayFieldTitleProps) => {
  if (!title) {
    return null;
  }

  const id = `${idSchema.$id}__title`;
  return <TitleField id={id} title={title} required={required} />;
};

type ArrayFieldDescriptionProps = {
  DescriptionField: any;
  idSchema: IdSchema;
  description: string;
};

const ArrayFieldDescription = ({
  DescriptionField,
  idSchema,
  description,
}: ArrayFieldDescriptionProps) => {
  if (!description) {
    return null;
  }

  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
};

// Used in the two templates
const DefaultArrayItem = (props: any) => {
  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  };
  return (
    <Columns key={props.key} centered={true}>
      <Columns.Column>
        <Box>
          {props.children}
        </Box>
      </Columns.Column>

      {props.hasToolbar && (
        <Columns.Column>
          {(props.hasMoveUp || props.hasMoveDown) && (
            <IconButton
              icon="arrow-up"
              className="array-item-move-up"
              tabIndex={-1}
              style={btnStyle as any}
              disabled={props.disabled || props.readonly || !props.hasMoveUp}
              onClick={props.onReorderClick(props.index, props.index - 1)}
            />
          )}

          {(props.hasMoveUp || props.hasMoveDown) && (
            <IconButton
              icon="arrow-down"
              tabIndex={-1}
              style={btnStyle as any}
              disabled={props.disabled || props.readonly || !props.hasMoveDown}
              onClick={props.onReorderClick(props.index, props.index + 1)}
            />
          )}

          {props.hasRemove && (
            <IconButton
              icon="remove"
              tabIndex={-1}
              style={btnStyle as any}
              disabled={props.disabled || props.readonly}
              onClick={props.onDropIndexClick(props.index)}
            />
          )}
        </Columns.Column>
      )}
    </Columns>
  );
};

const DefaultFixedArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <fieldset className={props.className}>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema['ui:title'] || props.title}
        required={props.required}
      />

      {(props.uiSchema['ui:description'] || props.schema.description) && (
        <div
          className="field-description"
          key={`field-description-${props.idSchema.$id}`}
        >
          {props.uiSchema['ui:description'] || props.schema.description}
        </div>
      )}

      <div
        className="row array-item-list"
        key={`array-item-list-${props.idSchema.$id}`}
      >
        {props.items && props.items.map(DefaultArrayItem)}
      </div>

      {props.canAdd && (
        <AddButton
          className="array-item-add"
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        />
      )}
    </fieldset>
  );
};

const DefaultNormalArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <Box>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema['ui:title'] || props.title}
        required={props.required}
      />

      {(props.uiSchema['ui:description'] || props.schema.description) && (
        <ArrayFieldDescription
          key={`array-field-description-${props.idSchema.$id}`}
          DescriptionField={props.DescriptionField}
          idSchema={props.idSchema}
          description={
            props.uiSchema['ui:description'] || props.schema.description
          }
        />
      )}

      <Level key={`array-item-list-${props.idSchema.$id}`}>
        {props.items && props.items.map(p => DefaultArrayItem(p))}

        {props.canAdd && (
          <Level.Side align="right">
            <Level item={true}>
              <Box>
                <AddButton
                  className="array-item-add"
                  onClick={props.onAddClick}
                  disabled={props.disabled || props.readonly}
                />
              </Box>
            </Level>
          </Level.Side>
        )}
      </Level>
    </Box>
  );
};

export default ArrayFieldTemplate;
