import React from "react";
import PropTypes from "prop-types";
import { Element, Form } from 'react-bulma-components';

function selectValue(value, selected, all) {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));
  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
}

function deselectValue(value, selected) {
  return selected.filter(v => v !== value);
}

function CheckboxesWidget(props) {
  const { id, disabled, options, value, autofocus, readonly, onChange } = props;
  let { enumOptions, enumDisabled, inline } = options;
  return (
    <Element className="checkboxes" id={id}>
      {enumOptions.map((option, index) => {
        const checked = value.indexOf(option.value) !== -1;
        const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
        const disabledCls = disabled || itemDisabled || readonly ? "disabled" : "";
        return (
          <Form.Checkbox
            key={index}
            className={(inline ? 'checkbox-inline' : 'checkbox-block') + ` ${disabledCls}`}
            id={`${id}_${index}`}
            checked={checked}
            disabled={disabled || itemDisabled || readonly}
            autoFocus={autofocus && index === 0}
            onChange={event => {
              const all = enumOptions.map(({ value }) => value);
              if (event.target.checked) {
                onChange(selectValue(option.value, value, all));
              } else {
                onChange(deselectValue(option.value, value));
              }
            }}
          >
          {option.label}
          </Form.Checkbox>
        );
      })}
    </Element>
  );
}

CheckboxesWidget.defaultProps = {
  autofocus: false,
  options: {
    inline: false,
  },
};

if (process.env.NODE_ENV !== "production") {
  CheckboxesWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
      inline: PropTypes.bool,
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default CheckboxesWidget;
