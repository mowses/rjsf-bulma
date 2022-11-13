'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@rjsf/core');
var React = _interopDefault(require('react'));
var reactBulmaComponents = require('react-bulma-components');
var PropTypes = _interopDefault(require('prop-types'));
var utils = _interopDefault(require('@rjsf/utils'));

//import { Button } from 'react-bulma-components';
//const { getDefaultRegistry } = utils;
//const { fields, widgets } = getDefaultRegistry();
var widgets = {};
var fields = {};
/*const DefaultChildren = () => (
  <Button className="submit-button" type="submit">Submit</Button>
);*/
var Theme = {
  //children: <DefaultChildren />,
  fields: fields,
  widgets: widgets
};

var Form = /*#__PURE__*/core.withTheme(Theme);

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

var AnyOfField = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(AnyOfField, _React$Component);
  function AnyOfField() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = AnyOfField.prototype;
  _proto.render = function render() {
    return React.createElement(reactBulmaComponents.Form.Field, {
      kind: "group"
    }, React.createElement(reactBulmaComponents.Form.Control, null), React.createElement(reactBulmaComponents.Form.Control, {
      fullwidth: true
    }));
  };
  return AnyOfField;
}(React.Component);

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;
  if (!description) return null;
  return React.createElement(reactBulmaComponents.Element, {
    renderAs: "div",
    className: "subtitle description"
  }, description);
};

var OneOfField = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(OneOfField, _React$Component);
  function OneOfField() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = OneOfField.prototype;
  _proto.render = function render() {
    return React.createElement(reactBulmaComponents.Form.Field, {
      kind: "group"
    }, React.createElement(reactBulmaComponents.Form.Control, null), React.createElement(reactBulmaComponents.Form.Control, {
      fullwidth: true
    }));
  };
  return OneOfField;
}(React.Component);

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  if (!title) return null;
  return React.createElement(reactBulmaComponents.Heading, {
    renderAs: "h5"
  }, title);
};

var Fields = {
  AnyOfField: AnyOfField,
  DescriptionField: DescriptionField,
  OneOfField: OneOfField,
  TitleField: TitleField
};

var FieldErrorListTemplate = function FieldErrorListTemplate(errors) {
  if (!errors || !errors.length) return null;
  return React.createElement(reactBulmaComponents.Content, {
    renderAs: "ul",
    className: "error-list-field"
  }, errors.map(function (error, index) {
    return React.createElement(reactBulmaComponents.Notification, {
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
  return React.createElement(reactBulmaComponents.Form.Field, {
    className: classnames
  }, displayLabel && label ? React.createElement(reactBulmaComponents.Form.Label, {
    htmlFor: FieldIsBool(schema, uiSchema) ? undefined : id
  }, label) : null, description, React.createElement(reactBulmaComponents.Form.Control, null, children), FieldErrorListTemplate(rawErrors), (rawHelp || help && help.props.help) && React.createElement(reactBulmaComponents.Form.Help, {
    renderAs: "div"
  }, rawHelp ? rawHelp : help));
};

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var description = _ref.description,
    title = _ref.title,
    properties = _ref.properties,
    uiSchema = _ref.uiSchema;
  return React.createElement(reactBulmaComponents.Card, null, (uiSchema && uiSchema['ui:title'] || title) && React.createElement(reactBulmaComponents.Card.Header, null, React.createElement(reactBulmaComponents.Card.Header.Title, null, title), React.createElement(reactBulmaComponents.Card.Header.Icon, null)), React.createElement(reactBulmaComponents.Card.Content, null, description && React.createElement(reactBulmaComponents.Element, {
    renderAs: "div",
    className: "subtitle description"
  }, description), properties.map(function (element, index) {
    return React.createElement(reactBulmaComponents.Form.Field, {
      key: index,
      className: "field-row"
    }, element.content);
  })));
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
  return React.createElement(reactBulmaComponents.Form.Checkbox, {
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
{
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
  return React.createElement(reactBulmaComponents.Element, {
    className: "checkboxes",
    id: id
  }, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    var disabledCls = disabled || itemDisabled || readonly ? "disabled" : "";
    return React.createElement(reactBulmaComponents.Form.Checkbox, {
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
{
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
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(reactBulmaComponents.Form.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(reactBulmaComponents.Form.Input, {
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
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(reactBulmaComponents.Form.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(reactBulmaComponents.Form.Input, {
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
  return React.createElement(reactBulmaComponents.Form.Input, {
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
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(reactBulmaComponents.Form.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(reactBulmaComponents.Form.Input, {
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

var Input = reactBulmaComponents.Form.Input;
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
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(reactBulmaComponents.Form.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(reactBulmaComponents.Form.Field, {
    kind: "group",
    horizontal: !!row
  }, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    return React.createElement(reactBulmaComponents.Form.Label, {
      htmlFor: id + "_" + i
    }, React.createElement(reactBulmaComponents.Form.Radio, {
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
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(reactBulmaComponents.Form.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(reactBulmaComponents.Form.Input, Object.assign({
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
  return React.createElement(reactBulmaComponents.Form.Select, {
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
    return React.createElement(reactBulmaComponents.Element, {
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
{
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
  return React.createElement(reactBulmaComponents.Form.Textarea, {
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
  return React.createElement(reactBulmaComponents.Form.Input, {
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
  return React.createElement(reactBulmaComponents.Form.Field, null, label || schema.title ? React.createElement(reactBulmaComponents.Form.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(reactBulmaComponents.Form.Input, {
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
  return React.createElement(React.Fragment, null, label || schema.title ? React.createElement(reactBulmaComponents.Form.Label, {
    className: required ? 'required' : '',
    htmlFor: id
  }, label || schema.title) : null, React.createElement(reactBulmaComponents.Form.Input, {
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

exports.FieldTemplate = FieldTemplate;
exports.Fields = Fields;
exports.Form = Form;
exports.ObjectFieldTemplate = ObjectFieldTemplate;
exports.Theme = Theme;
exports.Widgets = Widgets;
exports.default = Form;
//# sourceMappingURL=bulma.cjs.development.js.map
