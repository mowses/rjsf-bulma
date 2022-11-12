import { utils, withTheme } from '@rjsf/core';
import React from 'react';
import Box from 'react-bulma-components/src/components/box';
import Button from 'react-bulma-components/src/components/button';
import Columns from 'react-bulma-components/src/components/columns';
import Element from 'react-bulma-components/src/components/element';
import Content from 'react-bulma-components/src/components/content';
import Notification from 'react-bulma-components/src/components/notification';
import Form$1 from 'react-bulma-components/src/components/form';
import Card from 'react-bulma-components/src/components/card';
import MultiSchemaField from '@rjsf/core/lib/components/fields/MultiSchemaField';
import Heading from 'react-bulma-components/src/components/heading';
import PropTypes from 'prop-types';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["className"];
var AddButton = function AddButton(props) {
  var className = props.className,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  return React.createElement(Button, Object.assign({}, other, {
    className: className
  }), React.createElement("span", {
    className: "icon"
  }, React.createElement("i", {
    className: "fas fa-plus"
  })), " Add Item");
};

var _excluded$1 = ["icon"];
var IconButton = function IconButton(props) {
  var icon = props.icon,
    otherProps = _objectWithoutPropertiesLoose(props, _excluded$1);
  return React.createElement(Button, Object.assign({}, otherProps), React.createElement("span", {
    className: "icon"
  }, React.createElement("i", {
    className: "fas fa-" + icon
  })));
};

var isMultiSelect = utils.isMultiSelect,
  getDefaultRegistry = utils.getDefaultRegistry;
var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var schema = props.schema,
    _props$registry = props.registry,
    registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry;
  // TODO: update types so we don't have to cast registry as any
  if (isMultiSelect(schema, registry.rootSchema)) {
    return React.createElement(DefaultFixedArrayFieldTemplate, Object.assign({}, props));
  } else {
    return React.createElement(DefaultNormalArrayFieldTemplate, Object.assign({}, props));
  }
};
var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
    idSchema = _ref.idSchema,
    title = _ref.title,
    required = _ref.required;
  if (!title) {
    return null;
  }
  var id = idSchema.$id + "__title";
  return React.createElement(TitleField, {
    id: id,
    title: title,
    required: required
  });
};
var ArrayFieldDescription = function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
    idSchema = _ref2.idSchema,
    description = _ref2.description;
  if (!description) {
    return null;
  }
  var id = idSchema.$id + "__description";
  return React.createElement(DescriptionField, {
    id: id,
    description: description
  });
};
// Used in the two templates
var DefaultArrayItem = function DefaultArrayItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold'
  };
  return React.createElement(Columns, {
    key: props.key
  }, React.createElement(Columns.Column, null, props.children), props.hasToolbar && React.createElement(Columns.Column, {
    className: "array-item-toolbox"
  }, React.createElement(Button.Group, {
    hasAddons: true,
    align: "right"
  }, (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
    icon: "arrow-up",
    className: "array-item-move-up",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }), (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
    icon: "arrow-down",
    className: "array-item-move-down",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }), props.hasRemove && React.createElement(IconButton, {
    icon: "times",
    className: "array-item-remove",
    tabIndex: -1,
    style: btnStyle,
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  }))));
};
var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(props) {
  return React.createElement(Box, {
    className: props.className
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && React.createElement(Element, {
    renderAs: "p",
    key: "field-description-" + props.idSchema.$id,
    className: "description"
  }, props.uiSchema['ui:description'] || props.schema.description), React.createElement(Element, {
    key: "array-item-list-" + props.idSchema.$id,
    className: "row array-item-list"
  }, props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  })), props.canAdd && React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
};
var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(props) {
  return React.createElement(React.Fragment, null, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && React.createElement(ArrayFieldDescription, {
    key: "array-field-description-" + props.idSchema.$id,
    DescriptionField: props.DescriptionField,
    idSchema: props.idSchema,
    description: props.uiSchema['ui:description'] || props.schema.description
  }), React.createElement(Element, {
    key: "array-item-list-" + props.idSchema.$id,
    className: "row array-item-list"
  }, props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  })), props.canAdd && React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(Content, {
    renderAs: "ul",
    className: "error-list-items"
  }, errors.map(function (error, i) {
    return React.createElement(Notification, {
      renderAs: "li",
      key: i
    }, error.stack);
  }));
};

var FieldErrorListTemplate = function FieldErrorListTemplate(errors) {
  if (!errors || !errors.length) return null;
  return React.createElement(Content, {
    renderAs: "ul",
    className: "error-list-field"
  }, errors.map(function (error, index) {
    return React.createElement(Notification, {
      renderAs: "li",
      key: index
    }, error);
  }));
};
var FieldIsBool = function FieldIsBool(schema, uiSchema) {
  return schema && schema['type'] == 'boolean' || uiSchema && ['radio', 'checkbox'].includes('' + uiSchema['ui:widget']);
};
var FieldTemplate = function FieldTemplate(_ref) {
  var id = _ref.id,
    classNames = _ref.classNames,
    children = _ref.children,
    description = _ref.description,
    disabled = _ref.disabled,
    displayLabel = _ref.displayLabel,
    help = _ref.help,
    label = _ref.label,
    required = _ref.required,
    _ref$rawErrors = _ref.rawErrors,
    rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
    rawHelp = _ref.rawHelp,
    schema = _ref.schema,
    uiSchema = _ref.uiSchema;
  var classnames = classNames || '';
  if (required) {
    classnames += ' required';
  }
  if (disabled) {
    classnames += ' disabled';
  }
  return React.createElement(Form$1.Field, {
    className: classnames
  }, displayLabel && label ? React.createElement(Form$1.Label, {
    htmlFor: FieldIsBool(schema, uiSchema) ? undefined : id
  }, label) : null, description, React.createElement(Form$1.Control, null, children), FieldErrorListTemplate(rawErrors), (rawHelp || help && help.props.help) && React.createElement(Form$1.Help, {
    renderAs: "div"
  }, rawHelp ? rawHelp : help));
};

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var description = _ref.description,
    title = _ref.title,
    properties = _ref.properties,
    uiSchema = _ref.uiSchema;
  return React.createElement(Card, null, (uiSchema['ui:title'] || title) && React.createElement(Card.Header, null, React.createElement(Card.Header.Title, null, title), React.createElement(Card.Header.Icon, null)), React.createElement(Card.Content, null, description && React.createElement(Element, {
    renderAs: "div",
    className: "subtitle description"
  }, description), properties.map(function (element, index) {
    return React.createElement(Form$1.Field, {
      key: index,
      className: "field-row"
    }, element.content);
  })));
};

//const { getDefaultRegistry } = utils;
//const { fields, widgets } = getDefaultRegistry();
var DefaultChildren = function DefaultChildren() {
  return React.createElement(Button, {
    className: "submit-button",
    type: "submit"
  }, "Submit");
};
var Theme = {
  children: /*#__PURE__*/React.createElement(DefaultChildren, null),
  ArrayFieldTemplate: ArrayFieldTemplate,
  //fields: { ...fields, ...Fields },
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  //widgets: { ...widgets, ...Widgets },
  ErrorList: ErrorList
};

var Form = /*#__PURE__*/withTheme(Theme);

var AnyOfField = /*#__PURE__*/function (_MultiSchemaField) {
  _inheritsLoose(AnyOfField, _MultiSchemaField);
  function AnyOfField() {
    return _MultiSchemaField.apply(this, arguments) || this;
  }
  var _proto = AnyOfField.prototype;
  _proto.render = function render() {
    var field = _MultiSchemaField.prototype.render.apply(this, arguments);
    return React.createElement(Form$1.Field, {
      kind: "group"
    }, React.createElement(Form$1.Control, null, field.props.children[0].props.children), React.createElement(Form$1.Control, {
      fullwidth: true
    }, field.props.children[1]));
  };
  return AnyOfField;
}(MultiSchemaField);

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;
  if (!description) return null;
  return React.createElement(Element, {
    renderAs: "div",
    className: "subtitle description"
  }, description);
};

var OneOfField = /*#__PURE__*/function (_MultiSchemaField) {
  _inheritsLoose(OneOfField, _MultiSchemaField);
  function OneOfField() {
    return _MultiSchemaField.apply(this, arguments) || this;
  }
  var _proto = OneOfField.prototype;
  _proto.render = function render() {
    var field = _MultiSchemaField.prototype.render.apply(this, arguments);
    return React.createElement(Form$1.Field, {
      kind: "group"
    }, React.createElement(Form$1.Control, null, field.props.children[0].props.children), React.createElement(Form$1.Control, {
      fullwidth: true
    }, field.props.children[1]));
  };
  return OneOfField;
}(MultiSchemaField);

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  if (!title) return null;
  return React.createElement(Heading, {
    renderAs: "h5"
  }, title);
};

var Fields = {
  AnyOfField: AnyOfField,
  DescriptionField: DescriptionField,
  OneOfField: OneOfField,
  TitleField: TitleField
};

// Check to see if a schema specifies that a value must be true
function schemaRequiresTrueValue(schema) {
  // Check if const is a truthy value
  if (schema["const"]) {
    return true;
  }
  // Check if an enum has a single value of true
  if (schema["enum"] && schema["enum"].length === 1 && schema["enum"][0] === true) {
    return true;
  }
  // If anyOf has a single value, evaluate the subschema
  if (schema.anyOf && schema.anyOf.length === 1) {
    return schemaRequiresTrueValue(schema.anyOf[0]);
  }
  // If oneOf has a single value, evaluate the subschema
  if (schema.oneOf && schema.oneOf.length === 1) {
    return schemaRequiresTrueValue(schema.oneOf[0]);
  }
  // Evaluate each subschema in allOf, to see if one of them requires a true
  // value
  if (schema.allOf) {
    return schema.allOf.some(schemaRequiresTrueValue);
  }
}
function CheckboxWidget(props) {
  var schema = props.schema,
    id = props.id,
    value = props.value,
    disabled = props.disabled,
    readonly = props.readonly,
    label = props.label,
    autofocus = props.autofocus,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    _onChange = props.onChange;
  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  var required = schemaRequiresTrueValue(schema);
  return React.createElement(Form$1.Checkbox, {
    id: id,
    className: "" + (disabled || readonly ? "disabled" : ""),
    checked: typeof value === "undefined" ? false : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onChange: function onChange(event) {
      return _onChange(event.target.checked);
    },
    onBlur: onBlur && function (event) {
      return onBlur(id, event.target.checked);
    },
    onFocus: onFocus && function (event) {
      return onFocus(id, event.target.checked);
    }
  }, label);
}
CheckboxWidget.defaultProps = {
  autofocus: false
};
if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func
  };
}

function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at));
  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
}
function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
}
function CheckboxesWidget(props) {
  var id = props.id,
    disabled = props.disabled,
    options = props.options,
    value = props.value,
    autofocus = props.autofocus,
    readonly = props.readonly,
    _onChange = props.onChange;
  var enumOptions = options.enumOptions,
    enumDisabled = options.enumDisabled,
    inline = options.inline;
  return React.createElement(Element, {
    className: "checkboxes",
    id: id
  }, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    var disabledCls = disabled || itemDisabled || readonly ? "disabled" : "";
    return React.createElement(Form$1.Checkbox, {
      key: index,
      className: (inline ? 'checkbox-inline' : 'checkbox-block') + (" " + disabledCls),
      id: id + "_" + index,
      checked: checked,
      disabled: disabled || itemDisabled || readonly,
      autoFocus: autofocus && index === 0,
      onChange: function onChange(event) {
        var all = enumOptions.map(function (_ref) {
          var value = _ref.value;
          return value;
        });
        if (event.target.checked) {
          _onChange(selectValue(option.value, value, all));
        } else {
          _onChange(deselectValue(option.value, value));
        }
      }
    }, option.label);
  }));
}
CheckboxesWidget.defaultProps = {
  autofocus: false,
  options: {
    inline: false
  }
};
if (process.env.NODE_ENV !== "production") {
  CheckboxesWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: /*#__PURE__*/PropTypes.shape({
      enumOptions: PropTypes.array,
      inline: PropTypes.bool
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func
  };
}

var ColorWidget = function ColorWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus,
    options = _ref.options,
    schema = _ref.schema;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(Form$1.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(Form$1.Input, {
    type: "color",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var DateWidget = function DateWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus,
    options = _ref.options,
    schema = _ref.schema;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(Form$1.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(Form$1.Input, {
    type: "date",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var localToUTC = utils.localToUTC,
  utcToLocal = utils.utcToLocal;
var DateTimeWidget = function DateTimeWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(localToUTC(value));
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(Form$1.Input, {
    type: "datetime-local",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: utcToLocal(value),
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  });
};

var EmailWidget = function EmailWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus,
    options = _ref.options,
    schema = _ref.schema;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(Form$1.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(Form$1.Input, {
    type: "email",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Input = Form$1.Input;
var PasswordWidget = function PasswordWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    value = _ref.value,
    label = _ref.label,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    options = _ref.options,
    autofocus = _ref.autofocus,
    schema = _ref.schema;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(Input, {
    type: "password",
    id: id,
    "aria-label": label || schema.title,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    value: value ? value : "",
    //error={rawErrors.length > 0}
    onFocus: _onFocus,
    onBlur: _onBlur,
    onChange: _onChange
  });
};

var RadioWidget = function RadioWidget(_ref) {
  var id = _ref.id,
    schema = _ref.schema,
    options = _ref.options,
    required = _ref.required,
    disabled = _ref.disabled,
    readonly = _ref.readonly,
    label = _ref.label,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
    enumDisabled = options.enumDisabled;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(schema.type == "boolean" ? value !== "false" : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  var row = options ? options.inline : false;
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(Form$1.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(Form$1.Field, {
    kind: "group",
    horizontal: !!row
  }, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    return React.createElement(Form$1.Label, {
      htmlFor: id + "_" + i
    }, React.createElement(Form$1.Radio, {
      key: i,
      value: "" + option.value,
      disabled: disabled || itemDisabled || readonly,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus
    }), option.label);
  })));
};

var rangeSpec = utils.rangeSpec;
var RangeWidget = function RangeWidget(_ref) {
  var value = _ref.value,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    options = _ref.options,
    schema = _ref.schema,
    onChange = _ref.onChange,
    required = _ref.required,
    label = _ref.label,
    id = _ref.id;
  var sliderProps = _extends({
    value: value,
    label: label,
    id: id
  }, rangeSpec(schema));
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(Form$1.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(Form$1.Input, Object.assign({
    type: "range",
    className: "slider is-fullwidth",
    disabled: disabled || readonly,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }, sliderProps)));
};

var asNumber = utils.asNumber,
  guessType = utils.guessType;
var nums = /*#__PURE__*/new Set(["number", "integer"]);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
    items = schema.items;
  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  }
  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema["enum"]) {
    if (schema["enum"].every(function (x) {
      return guessType(x) === "number";
    })) {
      return asNumber(value);
    } else if (schema["enum"].every(function (x) {
      return guessType(x) === "boolean";
    })) {
      return value === "true";
    }
  }
  return value;
}
function getValue(event, multiple) {
  if (multiple) {
    return [].slice.call(event.target.options).filter(function (o) {
      return o.selected;
    }).map(function (o) {
      return o.value;
    });
  } else {
    return event.target.value;
  }
}
function SelectWidget(props) {
  var schema = props.schema,
    id = props.id,
    options = props.options,
    value = props.value,
    required = props.required,
    disabled = props.disabled,
    readonly = props.readonly,
    multiple = props.multiple,
    autofocus = props.autofocus,
    _onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    placeholder = props.placeholder;
  var enumOptions = options.enumOptions,
    enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";
  return React.createElement(Form$1.Select, {
    id: id,
    multiple: multiple,
    value: typeof value === "undefined" ? emptyValue : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onBlur: onBlur && function (event) {
      var newValue = getValue(event, multiple);
      onBlur(id, processValue(schema, newValue));
    },
    onFocus: onFocus && function (event) {
      var newValue = getValue(event, multiple);
      onFocus(id, processValue(schema, newValue));
    },
    onChange: function onChange(event) {
      var newValue = getValue(event, multiple);
      _onChange(processValue(schema, newValue));
    }
  }, !multiple && schema["default"] === undefined && React.createElement("option", {
    value: ""
  }, placeholder), enumOptions.map(function (_ref, i) {
    var value = _ref.value,
      label = _ref.label;
    var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
    return React.createElement(Element, {
      renderAs: "option",
      key: i,
      value: value,
      disabled: disabled
    }, label);
  }));
}
SelectWidget.defaultProps = {
  autofocus: false
};
if (process.env.NODE_ENV !== "production") {
  SelectWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: /*#__PURE__*/PropTypes.shape({
      enumOptions: PropTypes.array
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
  };
}

var TextareaWidget = function TextareaWidget(_ref) {
  var id = _ref.id,
    placeholder = _ref.placeholder,
    value = _ref.value,
    required = _ref.required,
    disabled = _ref.disabled,
    autofocus = _ref.autofocus,
    readonly = _ref.readonly,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    onChange = _ref.onChange,
    options = _ref.options;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(Form$1.Textarea, {
    id: id,
    required: required,
    placeholder: placeholder,
    disabled: disabled || readonly,
    value: value,
    autoFocus: autofocus,
    rows: options.rows || 5,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  });
};

var TextWidget = function TextWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus,
    options = _ref.options,
    schema = _ref.schema;
  var input_type = schema.type;
  var _value = Array.isArray(value) ? value.toString() : value;
  if (!['text', 'email', 'tel', 'password', 'number', 'search', 'color', 'date', 'time', 'datetime-local'].includes(input_type)) {
    input_type = 'text';
  }
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(Form$1.Input, {
    type: input_type,
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: _value || _value === 0 ? _value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  });
};

var UpDownWidget = function UpDownWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus,
    schema = _ref.schema;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(Form$1.Field, null, label || schema.title ? React.createElement(Form$1.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(Form$1.Input, {
    type: "number",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value ? value : '',
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var URLWidget = function URLWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus,
    options = _ref.options,
    schema = _ref.schema;
  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };
  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };
  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(Form$1.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(Form$1.Input, {
    type: "url",
    id: id,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name,
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var Widgets = {
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  ColorWidget: ColorWidget,
  DateWidget: DateWidget,
  DateTimeWidget: DateTimeWidget,
  EmailWidget: EmailWidget,
  PasswordWidget: PasswordWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget,
  URLWidget: URLWidget
};

export default Form;
export { FieldTemplate, Fields, Form, ObjectFieldTemplate, Theme, Widgets };
//# sourceMappingURL=bulma.esm.js.map
