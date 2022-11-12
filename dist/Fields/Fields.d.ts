/// <reference types="react" />
/// <reference types="@rjsf/core" />
import AnyOfField from '../AnyOfField/AnyOfField';
import OneOfField from '../OneOfField/OneOfField';
declare const _default: {
    AnyOfField: typeof AnyOfField;
    DescriptionField: ({ description }: import("@rjsf/core").FieldProps<any>) => JSX.Element | null;
    OneOfField: typeof OneOfField;
    TitleField: ({ title }: import("@rjsf/core").FieldProps<any>) => JSX.Element | null;
};
export default _default;
