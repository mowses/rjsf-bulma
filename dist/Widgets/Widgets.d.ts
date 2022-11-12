/// <reference types="react" />
/// <reference types="@rjsf/core" />
import CheckboxWidget from "../CheckboxWidget/CheckboxWidget";
import CheckboxesWidget from "../CheckboxesWidget/CheckboxesWidget";
import SelectWidget from "../SelectWidget/SelectWidget";
declare const _default: {
    CheckboxWidget: typeof CheckboxWidget;
    CheckboxesWidget: typeof CheckboxesWidget;
    ColorWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    DateWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, schema }: import("@rjsf/core").WidgetProps) => JSX.Element;
    DateTimeWidget: ({ id, required, readonly, disabled, value, onChange, onBlur, onFocus, autofocus, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    EmailWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    PasswordWidget: ({ id, required, readonly, disabled, value, label, onFocus, onBlur, onChange, options, autofocus, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    RadioWidget: ({ id, schema, options, required, disabled, readonly, label, onChange, onBlur, onFocus, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    RangeWidget: ({ value, readonly, disabled, onBlur, onFocus, options, schema, onChange, required, label, id, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    SelectWidget: typeof SelectWidget;
    TextareaWidget: ({ id, placeholder, value, required, disabled, autofocus, readonly, onBlur, onFocus, onChange, options, }: import("@rjsf/core").WidgetProps & {
        options: any;
    }) => JSX.Element;
    TextWidget: ({ id, required, readonly, disabled, value, onChange, onBlur, onFocus, autofocus, options, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    UpDownWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    URLWidget: ({ id, required, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
};
export default _default;
